import { useState, useEffect, useRef, useCallback } from "react";
import { FadeIn } from "./FadeIn";

// ─── Types ────────────────────────────────────────────────────────────────────

type TrafficState = "low" | "heavy" | "overload";

interface Packet {
  id: number;
  /** 0 → 1, drives left% via CSS transition */
  phase: "travel" | "done";
  lane: number; // vertical jitter lane (0-4) so packets don't stack exactly
}

// ─── Constants ────────────────────────────────────────────────────────────────

const PACKET_TRAVEL_MS = 900;
const OVERLOAD_LOCKOUT_MS = 5000;
const CPS_WINDOW_MS = 1200;    // rolling window for CPS measurement
const LANES = 5;

const STATE_COLORS: Record<TrafficState, string> = {
  low:      "hsl(145 60% 45%)",
  heavy:    "hsl(38 90% 55%)",
  overload: "hsl(0 80% 55%)",
};

const SERVER_COUNT = 3;

// ─── Component ────────────────────────────────────────────────────────────────

export function LoadBalancerWidget() {
  const [packets, setPackets] = useState<Packet[]>([]);
  const [cps, setCps] = useState(0);
  const [trafficState, setTrafficState] = useState<TrafficState>("low");
  const [locked, setLocked] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [activeServer, setActiveServer] = useState(0); // round-robin indicator

  const packetIdRef    = useRef(0);
  const clickTimesRef  = useRef<number[]>([]);
  const lockTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownRef   = useRef<ReturnType<typeof setInterval> | null>(null);

  // ─── CPS calculation ───────────────────────────────────────────────────────
  const calcCps = useCallback(() => {
    const now = Date.now();
    clickTimesRef.current = clickTimesRef.current.filter(
      (t) => now - t < CPS_WINDOW_MS,
    );
    // Normalise to per-second from the rolling window
    const rawCps = (clickTimesRef.current.length / CPS_WINDOW_MS) * 1000;
    return Math.round(rawCps);
  }, []);

  // ─── Click handler ────────────────────────────────────────────────────────
  function handleSend() {
    if (locked) return;

    const now = Date.now();
    clickTimesRef.current.push(now);
    const currentCps = calcCps();
    setCps(currentCps);

    // Determine state
    let nextState: TrafficState = "low";
    if (currentCps >= 8) nextState = "overload";
    else if (currentCps >= 4) nextState = "heavy";
    setTrafficState(nextState);

    // Round-robin server highlight
    setActiveServer((prev) => (prev + 1) % SERVER_COUNT);

    // Spawn packet
    const id = ++packetIdRef.current;
    const lane = id % LANES;

    setPackets((prev) => [...prev, { id, phase: "travel", lane }]);

    // Advance packet to "done" after travel time, then remove
    setTimeout(() => {
      setPackets((prev) =>
        prev.map((p) => (p.id === id ? { ...p, phase: "done" } : p)),
      );
      setTimeout(() => {
        setPackets((prev) => prev.filter((p) => p.id !== id));
      }, 300);
    }, PACKET_TRAVEL_MS);

    // Trigger overload lock
    if (nextState === "overload" && !locked) {
      setLocked(true);
      setCountdown(5);

      countdownRef.current = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) {
            clearInterval(countdownRef.current!);
            return 0;
          }
          return c - 1;
        });
      }, 1000);

      lockTimerRef.current = setTimeout(() => {
        setLocked(false);
        setTrafficState("low");
        setCps(0);
        setPackets([]);
        clickTimesRef.current = [];
        setCountdown(0);
      }, OVERLOAD_LOCKOUT_MS);
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  const nodeColor  = STATE_COLORS[trafficState];
  const isOverload = trafficState === "overload";
  const isHeavy    = trafficState === "heavy";

  return (
    <section id="playground" className="py-32 px-8 bg-surface-mid">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Technical Playground
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Load balancer stress test
          </h2>
          <p className="text-muted-foreground mb-14 max-w-xl text-base">
            Click fast enough and watch the system buckle — a hands-on demo of
            what happens when traffic outpaces infrastructure capacity.
          </p>
        </FadeIn>

        {/* ── Diagram ──────────────────────────────────────────────────────── */}
        <FadeIn delay={0.08}>
          <div
            className="relative rounded-xl border border-border bg-background p-8 md:p-12 overflow-hidden select-none"
            aria-label="Architecture stress test diagram"
          >
            {/* CPS badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span
                className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border"
                style={{
                  color: nodeColor,
                  borderColor: nodeColor + "44",
                  backgroundColor: nodeColor + "10",
                  transition: "all 0.3s ease",
                }}
              >
                {cps} CPS
              </span>
            </div>

            {/* Main diagram row */}
            <div className="flex items-center justify-between gap-4 md:gap-8">

              {/* ── Source: Send Traffic button ─────────────────────────── */}
              <div className="flex flex-col items-center gap-3 shrink-0">
                <button
                  onClick={handleSend}
                  disabled={locked}
                  aria-label="Send traffic packet"
                  className="relative group w-24 h-24 md:w-28 md:h-28 rounded-xl border-2 flex flex-col items-center justify-center gap-1 font-mono text-xs tracking-widest uppercase transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  style={{
                    borderColor: locked ? "hsl(var(--border))" : nodeColor + "66",
                    backgroundColor: locked ? "hsl(var(--surface-low))" : nodeColor + "08",
                    boxShadow: locked
                      ? "none"
                      : `0 0 18px ${nodeColor}22`,
                    transition: "all 0.3s ease",
                  }}
                >
                  <span className="text-2xl">📡</span>
                  <span
                    className="text-xs tracking-widest"
                    style={{ color: locked ? "hsl(var(--muted-foreground))" : nodeColor }}
                  >
                    SEND
                  </span>
                  {/* ripple on click */}
                  <span
                    className="absolute inset-0 rounded-xl pointer-events-none group-active:animate-ping opacity-0 group-active:opacity-20"
                    style={{ backgroundColor: nodeColor }}
                    aria-hidden="true"
                  />
                </button>
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Client
                </p>
              </div>

              {/* ── Track (packet travel lane) ──────────────────────────── */}
              <div
                className="relative flex-1 h-20"
                aria-hidden="true"
              >
                {/* Dashed path line */}
                <div
                  className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
                  style={{
                    background: `repeating-linear-gradient(90deg, ${nodeColor}55 0px, ${nodeColor}55 6px, transparent 6px, transparent 14px)`,
                    transition: "background 0.4s ease",
                  }}
                />

                {/* Packets */}
                {packets.map((pkt) => {
                  const laneOffset = (pkt.lane - Math.floor(LANES / 2)) * 7;
                  return (
                    <span
                      key={pkt.id}
                      aria-hidden="true"
                      className="absolute w-2.5 h-2.5 rounded-full pointer-events-none"
                      style={{
                        top: `calc(50% + ${laneOffset}px)`,
                        left: pkt.phase === "travel" ? "98%" : "2%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: nodeColor,
                        boxShadow: `0 0 8px 2px ${nodeColor}88`,
                        opacity: pkt.phase === "done" ? 0 : 1,
                        transition:
                          pkt.phase === "travel"
                            ? `left ${PACKET_TRAVEL_MS}ms cubic-bezier(0.4,0,0.6,1)`
                            : "opacity 0.3s ease",
                      }}
                    />
                  );
                })}
              </div>

              {/* ── Load Balancer node ──────────────────────────────────── */}
              <div className="flex flex-col items-center gap-3 shrink-0">
                <div
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl border-2 flex flex-col items-center justify-center gap-1"
                  style={{
                    borderColor: nodeColor + "66",
                    backgroundColor: nodeColor + "08",
                    boxShadow: `0 0 20px ${nodeColor}28`,
                    transition: "all 0.3s ease",
                  }}
                >
                  {isOverload ? (
                    <span
                      className="text-3xl lb-fire"
                      role="img"
                      aria-label="System overloaded"
                    >
                      🔥
                    </span>
                  ) : (
                    <>
                      <span className="text-2xl">⚖️</span>
                      {/* Pulsing ring */}
                      <span
                        className="absolute inset-0 rounded-xl lb-pulse pointer-events-none"
                        style={{
                          boxShadow: `0 0 0 0 ${nodeColor}`,
                          animationDuration: isHeavy ? "0.6s" : "1.8s",
                        }}
                        aria-hidden="true"
                      />
                    </>
                  )}

                  {isHeavy && !isOverload && (
                    <span className="text-xs font-mono tracking-widest" style={{ color: nodeColor }}>
                      SCALING
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Load Balancer
                </p>
              </div>

              {/* ── Second track ─────────────────────────────────────────── */}
              <div
                className="relative flex-1 h-20"
                aria-hidden="true"
              >
                <div
                  className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
                  style={{
                    background: `repeating-linear-gradient(90deg, ${nodeColor}55 0px, ${nodeColor}55 6px, transparent 6px, transparent 14px)`,
                    transition: "background 0.4s ease",
                  }}
                />
              </div>

              {/* ── Servers cluster ─────────────────────────────────────── */}
              <div className="flex flex-col items-center gap-3 shrink-0">
                <div className="flex flex-col gap-2">
                  {Array.from({ length: SERVER_COUNT }).map((_, i) => {
                    const isActive = activeServer === i && !locked && cps > 0;
                    return (
                      <div
                        key={i}
                        className="w-20 h-6 rounded border flex items-center justify-center transition-all duration-200"
                        style={{
                          borderColor: isActive
                            ? nodeColor + "99"
                            : nodeColor + "25",
                          backgroundColor: isActive
                            ? nodeColor + "18"
                            : nodeColor + "05",
                          boxShadow: isActive
                            ? `0 0 10px ${nodeColor}44`
                            : "none",
                        }}
                        aria-label={`Server ${i + 1}${isActive ? " — active" : ""}`}
                      >
                        <span className="text-xs font-mono tracking-widest" style={{ color: nodeColor + "cc" }}>
                          SRV-{i + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Servers
                </p>
              </div>
            </div>

            {/* ── Status bar ───────────────────────────────────────────────── */}
            <div className="mt-10 min-h-[3rem] flex flex-col items-center gap-2 text-center">
              {isOverload && (
                <>
                  <p
                    className="font-mono text-sm font-semibold tracking-wide animate-pulse"
                    style={{ color: "hsl(0 80% 65%)" }}
                  >
                    💥 Architecture scaled successfully… but my Azure bill just doubled. Please stop.
                  </p>
                  {countdown > 0 && (
                    <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                      Recovery in {countdown}s
                    </p>
                  )}
                </>
              )}
              {isHeavy && !isOverload && (
                <p
                  className="font-mono text-xs tracking-widest uppercase animate-pulse"
                  style={{ color: "hsl(38 90% 60%)" }}
                >
                  ⚠ Scaling instances…
                </p>
              )}
              {trafficState === "low" && cps > 0 && (
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  ✓ All systems nominal
                </p>
              )}
              {cps === 0 && !locked && (
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  Click SEND to start sending packets
                </p>
              )}
            </div>

            {/* ── Traffic state legend ─────────────────────────────────────── */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-border/30 pt-6">
              {(
                [
                  { state: "low",      label: "Low  0–3 CPS",    color: STATE_COLORS.low },
                  { state: "heavy",    label: "Heavy 4–7 CPS",   color: STATE_COLORS.heavy },
                  { state: "overload", label: "Overload 8+ CPS", color: STATE_COLORS.overload },
                ] as const
              ).map(({ state, label, color }) => (
                <span
                  key={state}
                  className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase"
                  style={{ color: trafficState === state ? color : "hsl(var(--muted-foreground))" }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ backgroundColor: trafficState === state ? color : "hsl(var(--border))" }}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
