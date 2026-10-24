import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Section, SectionHeader } from "./Primitives";
import { press } from "@/lib/motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type TrafficState = "low" | "heavy" | "overload";

interface Packet {
  id: number;
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

  const dashed = {
    background: `repeating-linear-gradient(90deg, ${nodeColor}66 0px, ${nodeColor}66 6px, transparent 6px, transparent 14px)`,
  };
  const nodeBox =
    "relative flex size-16 shrink-0 flex-col items-center justify-center gap-0.5 rounded-2xl border-2 md:size-28";
  const caption = "text-xs font-medium text-muted-foreground";

  return (
    <Section id="playground" width="default" labelledBy="playground-title">
      <FadeIn>
        <SectionHeader
          id="playground-title"
          eyebrow="Technical Playground"
          title="Load balancer stress test"
          lead="Click fast enough and watch the system buckle — a hands-on demo of what happens when traffic outpaces infrastructure capacity."
        />
      </FadeIn>

      <FadeIn delay={0.06}>
        <div
          className="relative select-none overflow-hidden rounded-[2rem] bg-card p-5 md:p-12"
          role="group"
          aria-label="Architecture stress test diagram"
        >
          <div className="mb-6 flex justify-end md:mb-0 md:absolute md:right-5 md:top-5">
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold tabular-nums"
              style={{ color: nodeColor, backgroundColor: nodeColor + "1a" }}
            >
              {cps} CPS
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 md:gap-8">
            {/* Client */}
            <div className="flex shrink-0 flex-col items-center gap-3">
              <motion.button
                {...press}
                type="button"
                onClick={handleSend}
                disabled={locked}
                aria-label="Send traffic packet"
                className={`${nodeBox} disabled:cursor-not-allowed disabled:opacity-40`}
                style={{
                  borderColor: locked ? "hsl(var(--border))" : nodeColor + "88",
                  backgroundColor: locked ? "hsl(var(--surface-high))" : nodeColor + "12",
                }}
              >
                <span className="text-xl md:text-2xl" aria-hidden="true">📡</span>
                <span
                  className="text-[0.6875rem] font-semibold md:text-xs"
                  style={{ color: locked ? "hsl(var(--muted-foreground))" : nodeColor }}
                >
                  SEND
                </span>
              </motion.button>
              <p className={caption}>Client</p>
            </div>

            {/* Packet lane: packets move with transform only, clipped to the lane. */}
            <div className="relative h-16 min-w-0 flex-1 overflow-hidden md:h-20" aria-hidden="true">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2" style={dashed} />
              {packets.map((pkt) => {
                const laneOffset = (pkt.lane - Math.floor(LANES / 2)) * 7;
                return (
                  <motion.span
                    key={pkt.id}
                    className="pointer-events-none absolute inset-x-0 h-2.5"
                    style={{ top: `calc(50% + ${laneOffset}px - 5px)` }}
                    initial={{ x: "-100%", opacity: 1 }}
                    animate={{ x: "0%", opacity: pkt.phase === "done" ? 0 : 1 }}
                    transition={{
                      x: { duration: PACKET_TRAVEL_MS / 1000, ease: [0.4, 0, 0.6, 1] },
                      opacity: { duration: 0.3 },
                    }}
                  >
                    <span
                      className="absolute right-0 size-2.5 rounded-full"
                      style={{ backgroundColor: nodeColor }}
                    />
                  </motion.span>
                );
              })}
            </div>

            {/* Load balancer */}
            <div className="flex shrink-0 flex-col items-center gap-3">
              <div
                className={nodeBox}
                style={{ borderColor: nodeColor + "88", backgroundColor: nodeColor + "12" }}
              >
                {isOverload ? (
                  <span className="lb-fire text-2xl md:text-3xl" role="img" aria-label="System overloaded">
                    🔥
                  </span>
                ) : (
                  <>
                    <span className="text-xl md:text-2xl" aria-hidden="true">⚖️</span>
                    <span
                      className="lb-pulse pointer-events-none absolute inset-0 rounded-2xl border-2"
                      style={{
                        borderColor: nodeColor,
                        animationDuration: isHeavy ? "0.6s" : "1.8s",
                      }}
                      aria-hidden="true"
                    />
                  </>
                )}
                {isHeavy && !isOverload && (
                  <span className="text-[0.6875rem] font-semibold md:text-xs" style={{ color: nodeColor }}>
                    SCALING
                  </span>
                )}
              </div>
              <p className={caption}>Load Balancer</p>
            </div>

            <div className="relative h-16 min-w-0 flex-1 md:h-20" aria-hidden="true">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2" style={dashed} />
            </div>

            {/* Servers */}
            <div className="flex shrink-0 flex-col items-center gap-3">
              <div className="flex flex-col gap-2">
                {Array.from({ length: SERVER_COUNT }).map((_, i) => {
                  const isActive = activeServer === i && !locked && cps > 0;
                  return (
                    <div
                      key={i}
                      className="flex h-6 w-14 items-center justify-center rounded-lg border md:w-20"
                      style={{
                        borderColor: isActive ? nodeColor + "bb" : nodeColor + "33",
                        backgroundColor: isActive ? nodeColor + "26" : nodeColor + "0d",
                      }}
                      aria-label={`Server ${i + 1}${isActive ? " — active" : ""}`}
                    >
                      <span className="text-[0.6875rem] font-semibold" style={{ color: nodeColor }}>
                        SRV-{i + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className={caption}>Servers</p>
            </div>
          </div>

          {/* Status */}
          <div
            role="status"
            aria-live="polite"
            className="mt-10 flex min-h-12 flex-col items-center gap-2 text-center"
          >
            {isOverload && (
              <>
                <p className="font-semibold text-pretty" style={{ color: "hsl(var(--destructive))" }}>
                  💥 Architecture scaled successfully… but my Azure bill just doubled. Please stop.
                </p>
                {countdown > 0 && (
                  <p className="text-sm text-muted-foreground">Recovery in {countdown}s</p>
                )}
              </>
            )}
            {isHeavy && !isOverload && (
              <p className="text-sm font-medium text-muted-foreground">⚠ Scaling instances…</p>
            )}
            {trafficState === "low" && cps > 0 && (
              <p className="text-sm text-muted-foreground">✓ All systems nominal</p>
            )}
            {cps === 0 && !locked && (
              <p className="text-sm text-muted-foreground">Click SEND to start sending packets</p>
            )}
          </div>

          {/* Legend */}
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-border pt-6">
            {(
              [
                { state: "low", label: "Low  0–3 CPS", color: STATE_COLORS.low },
                { state: "heavy", label: "Heavy 4–7 CPS", color: STATE_COLORS.heavy },
                { state: "overload", label: "Overload 8+ CPS", color: STATE_COLORS.overload },
              ] as const
            ).map(({ state, label, color }) => (
              <li
                key={state}
                className={`flex items-center gap-2 text-sm ${
                  trafficState === state ? "font-semibold text-foreground" : "text-muted-foreground"
                }`}
              >
                <span
                  className="inline-block size-2 rounded-full"
                  style={{ backgroundColor: trafficState === state ? color : "hsl(var(--border))" }}
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </Section>
  );
}
