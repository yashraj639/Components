import { PartyPopper, ThumbsUp } from "lucide-react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "pairing" | "confirm" | "success";
type Step = "power" | "wifi" | "pair" | "test";

const STEPS: { id: Step; label: string; duration: number }[] = [
  { id: "power", label: "Powering on device", duration: 2000 },
  { id: "wifi", label: "Connecting to Wi-Fi", duration: 2600 },
  { id: "pair", label: "Pairing device", duration: 2200 },
  { id: "test", label: "Running diagnostics", duration: 1800 },
];

export default function DeviceSetupFlow() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [stepIndex, setStepIndex] = useState(-1); // -1 = not started

  const isDone = stepIndex >= STEPS.length;

  // Advance steps automatically while pairing
  useEffect(() => {
    if (phase !== "pairing") return;
    if (isDone) {
      // All steps complete → move to confirm
      const t = setTimeout(() => setPhase("confirm"), 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setStepIndex((i) => i + 1),
      stepIndex === -1 ? 300 : (STEPS[stepIndex]?.duration ?? 0),
    );
    return () => clearTimeout(t);
  }, [phase, stepIndex, isDone]);

  const handleSwipeSuccess = () => {
    setPhase("pairing");
    setStepIndex(0);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black px-4 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-size-[32px_32px]" />
      <div className="mx-auto flex min-h-screen w-full max-w-xl items-center justify-center">
        <div className="relative w-full rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl md:p-8">
          {/* Header */}
          <div className="mb-6 flex w-full flex-col items-center gap-4">
            <h1 className="mt-2 text-2xl  md:text-3xl">
              {phase === "idle" || phase === "pairing"
                ? "Connect your device"
                : "Congratulations!"}
            </h1>

            <p className="mt-1 text-sm text-white/60">
              {phase === "idle"
                ? "Swipe to start pairing."
                : phase === "pairing"
                  ? "Setting up your device…"
                  : phase === "confirm"
                    ? "Device is ready."
                    : ""}
            </p>
          </div>

          {/* Device visual */}
          <div className="mt-5 flex justify-center">
            <DeviceVisual phase={phase} />
          </div>

          {/* Swipe pill — only visible when idle */}
          <AnimatePresence>
            {phase === "idle" && (
              <motion.div
                key="swipe"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-5"
              >
                <SwipePill onSuccess={handleSwipeSuccess} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Steps list — visible during pairing */}
          <AnimatePresence>
            {phase === "pairing" && (
              <motion.div
                key="steps"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-5 overflow-hidden"
              >
                <StepsList currentIndex={stepIndex} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Confirm / Success */}
          <AnimatePresence>
            {phase === "confirm" && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                className="mt-5 overflow-hidden"
              >
                {/* Completed steps summary (collapsed) */}
                <div className="mb-4 space-y-1">
                  {STEPS.map((s) => (
                    <div
                      key={s.id}
                      className="flex items-center gap-2 text-sm text-white/50"
                    >
                      <CheckIcon className="text-emerald-400" />
                      {s.label}
                    </div>
                  ))}
                </div>

                <p className="mb-3 text-sm text-white/75">
                  All checks passed. Confirm to finish setup.
                </p>

                <motion.button
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPhase("success")}
                  className="w-full rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-900"
                >
                  Confirm Connection
                </motion.button>
              </motion.div>
            )}

            {phase === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-5 rounded-2xl bg-emerald-400/15 px-4 py-3 ring-1 ring-emerald-300/30"
              >
                <p className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-200">
                  <PartyPopper className="h-4 w-4 text-emerald-400" />
                  Device connected successfully!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function StepsList({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="space-y-2">
      {STEPS.map((step, i) => {
        const status =
          i < currentIndex ? "done" : i === currentIndex ? "active" : "pending";

        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
              status === "done"
                ? "bg-white/5 text-white/50"
                : status === "active"
                  ? "bg-cyan-300/10 text-white ring-1 ring-cyan-300/30"
                  : "bg-transparent text-white/30"
            }`}
          >
            {/* Icon */}
            <div className="flex h-5 w-5 shrink-0 items-center justify-center">
              {status === "done" ? (
                <CheckIcon className="text-emerald-400" />
              ) : status === "active" ? (
                <SpinnerIcon />
              ) : (
                <CircleIcon />
              )}
            </div>

            {/* Label */}
            <span className="flex-1">{step.label}</span>

            {/* Active pulse dot */}
            {status === "active" && (
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="h-1.5 w-1.5 rounded-full bg-cyan-300"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={`h-4 w-4 ${className}`}>
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <motion.svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4 text-cyan-300"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.25"
      />
      <path
        d="M14 8a6 6 0 0 0-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

function CircleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-white/20">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SwipePill({ onSuccess }: { onSuccess: () => void }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [done, setDone] = useState(false);

  const KNOB = 44;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => setMaxDrag(Math.max(0, el.clientWidth - KNOB - 8));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={trackRef}
      className="relative h-14 w-full overflow-hidden rounded-full border border-white/15 bg-white/10"
    >
      <div className="absolute inset-0 flex items-center justify-center text-sm text-white/70">
        Swipe to connect
      </div>
      <motion.div
        drag={done ? false : "x"}
        dragConstraints={{ left: 0, right: maxDrag }}
        dragMomentum={false}
        style={{ x }}
        onDragEnd={() => {
          if (x.get() >= maxDrag * 0.8) {
            x.set(maxDrag);
            setDone(true);
            onSuccess();
          } else {
            x.set(0);
          }
        }}
        className={`absolute left-1 top-1 flex h-11 w-11 cursor-grab items-center justify-center rounded-full font-bold text-black active:cursor-grabbing ${
          done ? "bg-emerald-300" : "bg-cyan-300"
        }`}
      >
        →
      </motion.div>
    </div>
  );
}

function DeviceVisual({ phase }: { phase: Phase }) {
  return (
    <motion.div className="relative w-56 rounded-xl border border-white/15 bg-neutral-900 shadow-2xl">
      {/* title bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 text-xs text-white/50">Device Setup</span>
      </div>

      {/* content */}
      <div className="relative flex h-32 items-center justify-center overflow-hidden">
        {/* idle dots */}
        {phase === "idle" && (
          <div className="flex gap-1">
            <Dot />
            <Dot />
            <Dot />
          </div>
        )}

        {/* pairing */}
        {phase === "pairing" && (
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="flex items-center gap-2 text-sm text-cyan-300"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Pairing device…
          </motion.div>
        )}

        {/* success */}
        {phase === "success" && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center gap-2 text-sm text-emerald-300"
          >
            <ThumbsUp className="h-12 w-12 text-emerald-400" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function Dot() {
  return (
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
      className="h-2 w-2 rounded-full bg-white/50"
    />
  );
}
