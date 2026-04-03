import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { ARCH_NODES, ARCH_EDGES } from "@/data/portfolio";
import type { ArchNode, ArchNodeType } from "@/data/portfolio";

// ─── Layout constants (matches viewBox "0 0 900 440") ────────────────────────
const VIEW_W = 900;
const VIEW_H = 440;
const NODE_W = 152;
const NODE_H = 52;

// ─── Per-type accent colours ──────────────────────────────────────────────────
const TYPE_COLOR: Record<ArchNodeType, string> = {
  gateway:  "hsl(183 100% 47%)",
  service:  "hsl(250 73% 60%)",
  queue:    "hsl(35  80% 55%)",
  database: "hsl(145 55% 45%)",
  search:   "hsl(300 55% 60%)",
};

const TYPE_LABEL: Record<ArchNodeType, string> = {
  gateway:  "GATEWAY",
  service:  "SERVICE",
  queue:    "QUEUE",
  database: "DATABASE",
  search:   "SEARCH",
};

// ─── Edge geometry — clip line to node rectangle boundaries ──────────────────
function edgePoints(a: ArchNode, b: ArchNode) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist === 0) return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };

  const ux = dx / dist;
  const uy = dy / dist;
  const hw = NODE_W / 2;
  const hh = NODE_H / 2;
  // Distance from centre to edge of rectangle along direction (ux, uy)
  const t = Math.min(
    ux !== 0 ? hw / Math.abs(ux) : Infinity,
    uy !== 0 ? hh / Math.abs(uy) : Infinity,
  );

  return {
    x1: a.x + ux * (t + 2),
    y1: a.y + uy * (t + 2),
    x2: b.x - ux * (t + 2),
    y2: b.y - uy * (t + 2),
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
export function ArchitectureDiagram() {
  const [selected, setSelected] = useState<ArchNode | null>(null);

  function handleNodeClick(node: ArchNode) {
    setSelected((prev) => (prev?.id === node.id ? null : node));
  }

  return (
    <section id="architecture" className="py-32 px-8 bg-surface-low">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4">
            SYSTEM DESIGN
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Architecture{" "}
            <span className="text-outline">// Overview</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl text-base">
            Click any node to explore the technical decisions and scaling
            strategies behind each component.
          </p>
        </FadeIn>

        {/* ── SVG Diagram — desktop ────────────────────────────────────── */}
        <FadeIn>
          <div className="hidden md:block w-full overflow-hidden rounded-2xl border border-border/40 bg-[hsl(0_0%_4%)]">
            <svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              width="100%"
              aria-label="Interactive backend architecture diagram"
              role="img"
            >
              <defs>
                {/* Glow filter for selected node */}
                <filter id="node-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                {/* Small arrowhead */}
                <marker
                  id="arch-arrow"
                  markerWidth="6"
                  markerHeight="6"
                  refX="5"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0 0 L6 3 L0 6 Z" fill="hsl(184 8% 28%)" />
                </marker>
              </defs>

              {/* Layer label rows */}
              {[
                { label: "INGRESS", y: 22 },
                { label: "COMPUTE", y: 184 },
                { label: "PERSISTENCE", y: 349 },
              ].map(({ label, y }) => (
                <text
                  key={label}
                  x={16}
                  y={y}
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="8"
                  letterSpacing="2"
                  fill="hsl(184 8% 28%)"
                >
                  {label}
                </text>
              ))}

              {/* Horizontal separator lines */}
              {[138, 302].map((y) => (
                <line
                  key={y}
                  x1={0}
                  y1={y}
                  x2={VIEW_W}
                  y2={y}
                  stroke="hsl(184 8% 13%)"
                  strokeWidth="1"
                />
              ))}

              {/* Edges */}
              {ARCH_EDGES.map((edge) => {
                const from = ARCH_NODES.find((n) => n.id === edge.from)!;
                const to   = ARCH_NODES.find((n) => n.id === edge.to)!;
                const { x1, y1, x2, y2 } = edgePoints(from, to);
                const isHighlighted =
                  selected?.id === edge.from || selected?.id === edge.to;

                return (
                  <line
                    key={`${edge.from}→${edge.to}`}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={
                      isHighlighted
                        ? TYPE_COLOR[from.type]
                        : "hsl(184 8% 20%)"
                    }
                    strokeWidth={isHighlighted ? 1.5 : 1}
                    strokeDasharray={isHighlighted ? "none" : "4 3"}
                    strokeOpacity={isHighlighted ? 0.6 : 0.7}
                    markerEnd="url(#arch-arrow)"
                    style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
                  />
                );
              })}

              {/* Nodes */}
              {ARCH_NODES.map((node) => {
                const isSelected = selected?.id === node.id;
                const color = TYPE_COLOR[node.type];

                return (
                  <g
                    key={node.id}
                    onClick={() => handleNodeClick(node)}
                    style={{ cursor: "pointer" }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${node.label} — click to view details`}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNodeClick(node)
                    }
                  >
                    {/* Ambient glow ring when selected */}
                    {isSelected && (
                      <rect
                        x={node.x - NODE_W / 2 - 5}
                        y={node.y - NODE_H / 2 - 5}
                        width={NODE_W + 10}
                        height={NODE_H + 10}
                        rx={15}
                        fill="none"
                        stroke={color}
                        strokeWidth="1"
                        opacity="0.35"
                        filter="url(#node-glow)"
                      />
                    )}

                    {/* Node body */}
                    <rect
                      x={node.x - NODE_W / 2}
                      y={node.y - NODE_H / 2}
                      width={NODE_W}
                      height={NODE_H}
                      rx={10}
                      fill={isSelected ? "hsl(0 0% 10%)" : "hsl(0 0% 8%)"}
                      stroke={isSelected ? color : "hsl(184 8% 18%)"}
                      strokeWidth={isSelected ? 1.5 : 1}
                      style={{ transition: "fill 0.2s, stroke 0.2s" }}
                    />

                    {/* Type tag */}
                    <text
                      x={node.x}
                      y={node.y - 9}
                      textAnchor="middle"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="7.5"
                      letterSpacing="1.8"
                      fill={color}
                      opacity="0.8"
                    >
                      {TYPE_LABEL[node.type]}
                    </text>

                    {/* Node name */}
                    <text
                      x={node.x}
                      y={node.y + 11}
                      textAnchor="middle"
                      fontFamily="Space Grotesk, system-ui, sans-serif"
                      fontSize="13"
                      fontWeight="600"
                      fill={isSelected ? "hsl(30 3% 95%)" : "hsl(30 3% 85%)"}
                      style={{ transition: "fill 0.2s" }}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </FadeIn>

        {/* ── Mobile: stacked node list ─────────────────────────────────── */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ARCH_NODES.map((node) => {
            const color = TYPE_COLOR[node.type];
            const isSelected = selected?.id === node.id;

            return (
              <button
                key={node.id}
                className="w-full text-left p-4 rounded-xl border bg-card transition-all duration-200 hover:bg-card/80"
                style={{
                  borderColor: isSelected ? color : "hsl(184 8% 18%)",
                  boxShadow: isSelected ? `0 0 0 1px ${color}33` : "none",
                }}
                onClick={() => handleNodeClick(node)}
                aria-pressed={isSelected}
              >
                <span
                  className="font-mono text-[9px] tracking-widest uppercase block mb-1.5"
                  style={{ color }}
                >
                  {TYPE_LABEL[node.type]}
                </span>
                <span className="font-headline font-semibold text-foreground text-sm">
                  {node.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Detail Panel ──────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-6 p-6 rounded-2xl border bg-card relative"
              style={{
                borderColor: TYPE_COLOR[selected.type] + "44",
                boxShadow: `0 0 0 1px ${TYPE_COLOR[selected.type]}18`,
              }}
              role="region"
              aria-label={`Details for ${selected.label}`}
            >
              {/* Dismiss */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close detail panel"
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>

              {/* Header */}
              <p
                className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3"
                style={{ color: TYPE_COLOR[selected.type] }}
              >
                {TYPE_LABEL[selected.type]} /{" "}
                {selected.label.toUpperCase()}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
                {selected.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
