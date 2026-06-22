"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Personal commit history — Bhanu Prakash R's actual career story ──────────
const NODES = [
  // main — career spine
  { id: 0,  x: 130, y: 460, branch: "main",    label: "init: started CS journey",           hash: "b8a3f1c", author: "Bhanu" },
  { id: 1,  x: 130, y: 390, branch: "main",    label: "feat: first full-stack project",     hash: "2d9e04a", author: "Bhanu" },
  { id: 2,  x: 130, y: 310, branch: "main",    label: "feat: joined Elanco as SWE-I",       hash: "7c1b5f8", author: "Bhanu" },
  { id: 3,  x: 130, y: 230, branch: "main",    label: "perf: 40% latency reduction",        hash: "e3a92d6", author: "Bhanu" },
  { id: 4,  x: 130, y: 155, branch: "main",    label: "release: 2+ yrs · 15+ projects",    hash: "f6d0b1e", author: "Bhanu" },
  { id: 5,  x: 130, y: 65,  branch: "main",    label: "🚀  Bhanu Prakash R — LIVE",         hash: "LIVE",    author: "Bhanu" },

  // feat/stack — tech skills branch
  { id: 6,  x: 310, y: 390, branch: "stack",   label: "feat: React · Next.js · TypeScript", hash: "a1f4c8d", author: "Bhanu" },
  { id: 7,  x: 310, y: 310, branch: "stack",   label: "feat: Node.js · Python · Java",     hash: "3b7e25f", author: "Bhanu" },
  { id: 8,  x: 310, y: 230, branch: "stack",   label: "feat: PostgreSQL · Redis · Docker",  hash: "9c2a16b", author: "Bhanu" },

  // feat/projects — shipped work
  { id: 9,  x: 490, y: 370, branch: "projects",label: "ship: AI-powered analytics dash",   hash: "5d8b30e", author: "Bhanu" },
  { id: 10, x: 490, y: 290, branch: "projects",label: "ship: microservices platform",      hash: "c4f1a92", author: "Bhanu" },
  { id: 11, x: 490, y: 210, branch: "projects",label: "ship: DevOps CI/CD pipeline",       hash: "7e6b4c1", author: "Bhanu" },

  // chore/certs — certifications
  { id: 12, x: 660, y: 350, branch: "certs",   label: "cert: AWS Solutions Architect",     hash: "2a9d5f8", author: "Bhanu" },
  { id: 13, x: 660, y: 265, branch: "certs",   label: "cert: 5+ cloud & dev badges",      hash: "b3e7c04", author: "Bhanu" },
] as const;

type NodeId = (typeof NODES)[number]["id"];

const EDGES: [NodeId, NodeId][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [1, 6], [6, 7], [7, 8], [8, 4],
  [2, 9], [9, 10], [10, 11], [11, 4],
  [3, 12], [12, 13], [13, 4],
];

const BRANCH_COLOR: Record<string, string> = {
  main:     "#06b6d4",   // cyan   — career spine
  stack:    "#a78bfa",   // violet — tech stack
  projects: "#34d399",   // emerald— shipped work
  certs:    "#fb923c",   // orange — certifications
};

const BRANCH_LABEL: Record<string, string> = {
  main:     "career",
  stack:    "feat/stack",
  projects: "feat/projects",
  certs:    "chore/certs",
};

// Phases mirror real git workflow + Bhanu's personal story
const PHASES = [
  "git checkout -b bhanu-prakash-r...",
  "Compiling 2+ years of experience...",
  "Loading React · Next.js · TypeScript...",
  "Deploying microservices & CI/CD...",
  "Merging 5+ certifications to main...",
  "🚀  Portfolio is live. Welcome!",
];

const NODE_RADIUS = 10;
const FINAL_NODE  = 5;
const NODE_REVEAL_INTERVAL = 215;

function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const midX = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${midX} ${y1} ${midX} ${y2} ${x2} ${y2}`;
}

// ── Component ─────────────────────────────────────────────────────────────────
const LoadingScreen = () => {
  const [litNodes,    setLitNodes]    = useState<Set<number>>(new Set());
  const [litEdges,    setLitEdges]    = useState<Set<string>>(new Set());
  const [activeNode,  setActiveNode]  = useState<number | null>(null);
  const [activeLabel, setActiveLabel] = useState<string>("");
  const [blossomed,   setBlossomed]   = useState(false);
  const [phase,       setPhase]       = useState(0);
  const [progress,    setProgress]    = useState(0);
  const [exit,        setExit]        = useState(false);
  const [done,        setDone]        = useState(false);
  const phaseRef = useRef(0);

  useEffect(() => {
    const ORDER: NodeId[] = [0, 1, 6, 2, 9, 7, 3, 10, 12, 8, 11, 13, 4, 5];
    let i = 0;

    const tick = () => {
      if (i >= ORDER.length) return;
      const nodeId = ORDER[i];
      const node = NODES[nodeId];
      setActiveNode(nodeId);
      setActiveLabel(node.label);
      setLitNodes((prev) => new Set([...prev, nodeId]));
      EDGES.forEach(([a, b]) => {
        if (a === nodeId || b === nodeId) {
          setLitEdges((prev) => new Set([...prev, `${a}-${b}`]));
        }
      });
      setProgress(Math.round(((i + 1) / ORDER.length) * 100));

      const newPhase = Math.min(
        Math.floor((i / ORDER.length) * PHASES.length),
        PHASES.length - 1
      );
      if (newPhase !== phaseRef.current) {
        phaseRef.current = newPhase;
        setPhase(newPhase);
      }

      i++;
      if (i < ORDER.length) {
        setTimeout(tick, NODE_REVEAL_INTERVAL + Math.random() * 80);
      } else {
        setTimeout(() => setBlossomed(true), 400);
        setTimeout(() => {
          setExit(true);
          setTimeout(() => setDone(true), 800);
        }, 2000);
      }
    };

    const start = setTimeout(tick, 500);
    return () => clearTimeout(start);
  }, []);

  if (done) return null;

  const finalNode = NODES[FINAL_NODE];
  const svgW = 800, svgH = 540;
  const pctX = (finalNode.x / svgW) * 100;
  const pctY = (finalNode.y / svgH) * 100;

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="git-loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "hsl(var(--background))" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          {/* Scanline grid */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(6,182,212,0.03) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Ambient glow */}
          <motion.div
            className="pointer-events-none absolute rounded-full"
            style={{
              width: 640, height: 420,
              background: "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)",
              top: "50%", left: "50%", x: "-50%", y: "-50%",
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ── Terminal header ── */}
          <motion.div
            className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Window chrome */}
            <div className="rounded-xl overflow-hidden border border-white/8 shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/6">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="mx-auto text-[11px] font-mono text-muted-foreground/50 tracking-wide">
                  bhanu@elanco: ~/portfolio-website-bhanu
                </span>
              </div>

              {/* Git config lines */}
              <div className="px-4 py-2.5 space-y-0.5 bg-black/20">
                <p className="text-[11px] font-mono">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-cyan-400 ml-2">git</span>
                  <span className="text-white/60"> log --graph --oneline --all</span>
                </p>
                <p className="text-[11px] font-mono text-white/30">
                  Author: Bhanu Prakash R &lt;bp71712@gmail.com&gt;
                </p>
                <p className="text-[11px] font-mono text-white/30">
                  Repo: BhanuPrakash056/portfolio-website-bhanu · Bengaluru, India
                </p>
              </div>
            </div>

            {/* Branch legend */}
            <div className="flex justify-center gap-5 mt-3">
              {Object.entries(BRANCH_LABEL).map(([branch, label]) => (
                <div key={branch} className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: BRANCH_COLOR[branch],
                      boxShadow: `0 0 5px ${BRANCH_COLOR[branch]}`,
                    }}
                  />
                  <span className="text-[10px] font-mono text-muted-foreground/50">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── SVG Git Graph ── */}
          <div className="relative mt-6" style={{ width: "min(800px, 96vw)" }}>
            <svg viewBox="0 0 800 540" width="100%" style={{ overflow: "visible" }}>
              {/* Ghost dashed tracks */}
              {EDGES.map(([a, b]) => {
                const nA = NODES[a], nB = NODES[b];
                return (
                  <path
                    key={`ghost-${a}-${b}`}
                    d={curvePath(nA.x, nA.y, nB.x, nB.y)}
                    fill="none" strokeWidth={1}
                    stroke="rgba(255,255,255,0.04)"
                    strokeDasharray="4 6" strokeLinecap="round"
                  />
                );
              })}

              {/* Lit edges */}
              {EDGES.map(([a, b]) => {
                const nA = NODES[a], nB = NODES[b];
                const isLit = litEdges.has(`${a}-${b}`);
                const color = BRANCH_COLOR[nA.branch];
                return (
                  <motion.path
                    key={`${a}-${b}`}
                    d={curvePath(nA.x, nA.y, nB.x, nB.y)}
                    fill="none" strokeWidth={2} stroke={color} strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: isLit ? 1 : 0, opacity: isLit ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ filter: isLit ? `drop-shadow(0 0 3px ${color})` : "none" }}
                  />
                );
              })}

              {/* Nodes */}
              {NODES.map((node) => {
                const isLit    = litNodes.has(node.id);
                const isActive = activeNode === node.id;
                const isFinal  = node.id === FINAL_NODE;
                const color    = BRANCH_COLOR[node.branch];

                if (isFinal && blossomed) return null;

                return (
                  <g key={node.id}>
                    {/* Pulse ring on active */}
                    {isActive && (
                      <motion.circle
                        cx={node.x} cy={node.y} r={NODE_RADIUS + 4}
                        fill="none" stroke={color} strokeWidth={1.5}
                        initial={{ r: NODE_RADIUS, opacity: 0.9 }}
                        animate={{ r: NODE_RADIUS + 18, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    )}

                    {/* Node circle */}
                    <motion.circle
                      cx={node.x} cy={node.y}
                      r={isFinal ? NODE_RADIUS + 3 : NODE_RADIUS}
                      fill={isLit ? color : "hsl(var(--background))"}
                      stroke={isLit ? color : "rgba(255,255,255,0.12)"}
                      strokeWidth={2}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        isLit
                          ? { scale: isActive ? [1, 1.4, 1] : 1, opacity: 1 }
                          : { scale: 0.6, opacity: 0.12 }
                      }
                      transition={{ duration: 0.3, ease: "backOut" }}
                      style={{ filter: isLit ? `drop-shadow(0 0 7px ${color})` : "none", transformOrigin: `${node.x}px ${node.y}px` }}
                    />

                    {/* Inner dot */}
                    {isLit && !isFinal && (
                      <motion.circle
                        cx={node.x} cy={node.y} r={3}
                        fill="hsl(var(--background))"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      />
                    )}

                    {/* Commit label */}
                    {isLit && (
                      <motion.text
                        x={node.x + NODE_RADIUS + 8}
                        y={node.y + 4}
                        fontSize={10}
                        fill={color}
                        fontFamily="monospace"
                        initial={{ opacity: 0, x: node.x + NODE_RADIUS }}
                        animate={{ opacity: isFinal ? 1 : 0.8, x: node.x + NODE_RADIUS + 8 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {node.hash !== "LIVE" && (
                          <tspan fill="rgba(255,255,255,0.25)">{node.hash} </tspan>
                        )}
                        {node.label}
                      </motion.text>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* ── Blossom: final node → personal avatar ── */}
            <AnimatePresence>
              {blossomed && (
                <motion.div
                  key="blossom"
                  className="absolute pointer-events-none flex flex-col items-center"
                  style={{
                    left: `${pctX}%`,
                    top:  `${pctY}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Shockwave rings */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{ border: `2px solid ${BRANCH_COLOR.main}` }}
                      initial={{ width: 26, height: 26, opacity: 0.9 }}
                      animate={{ width: 140 + i * 55, height: 140 + i * 55, opacity: 0 }}
                      transition={{ duration: 0.75, delay: i * 0.13, ease: "easeOut" }}
                    />
                  ))}

                  {/* Avatar ring */}
                  <motion.div
                    className="relative flex items-center justify-center rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
                      boxShadow: "0 0 50px rgba(6,182,212,0.7), 0 0 90px rgba(139,92,246,0.35)",
                    }}
                    initial={{ width: 26, height: 26 }}
                    animate={{ width: 90, height: 90 }}
                    transition={{ duration: 0.55, ease: [0.175, 0.885, 0.32, 1.275] }}
                  >
                    <motion.div
                      className="absolute rounded-full border-2 border-white/20"
                      initial={{ width: 0, height: 0 }}
                      animate={{ width: 82, height: 82 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    />
                    <motion.span
                      className="relative z-10 text-2xl font-black tracking-tight text-white select-none"
                      initial={{ opacity: 0, scale: 0.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
                    >
                      BP
                    </motion.span>
                  </motion.div>

                  {/* Name + role card */}
                  <motion.div
                    className="absolute flex flex-col items-center"
                    style={{ top: "calc(100% + 52px)" }}
                    initial={{ opacity: 0, y: -8, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.35 }}
                  >
                    <div
                      className="px-4 py-2 rounded-lg text-center"
                      style={{
                        background: "rgba(6,182,212,0.1)",
                        border: "1px solid rgba(6,182,212,0.35)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <p className="text-[13px] font-bold text-white whitespace-nowrap tracking-wide">
                        Bhanu Prakash R
                      </p>
                      <p className="text-[10px] font-mono mt-0.5 whitespace-nowrap" style={{ color: "#06b6d4" }}>
                        Full Stack Engineer · Elanco
                      </p>
                    </div>
                    <motion.div
                      className="flex gap-2 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.85, duration: 0.3 }}
                    >
                      {["React", "Next.js", "Node.js", "AWS"].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[9px] font-mono"
                          style={{
                            background: "rgba(139,92,246,0.12)",
                            border: "1px solid rgba(139,92,246,0.3)",
                            color: "#a78bfa",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Bottom status bar ── */}
          <motion.div
            className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            {/* Active commit label */}
            <div className="h-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={phase}
                  className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground/55"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                >
                  {PHASES[phase]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div
              className="rounded-full overflow-hidden"
              style={{ width: 300, height: 2, background: "rgba(255,255,255,0.06)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #06b6d4, #a78bfa)",
                  boxShadow: "0 0 8px rgba(6,182,212,0.5)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              />
            </div>

            <span className="text-[10px] font-mono text-muted-foreground/35 tabular-nums">
              {progress} / 100 — bp71712@gmail.com
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
