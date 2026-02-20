import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { CheckCircle2, Users, Sparkles, GitBranch } from "lucide-react";

const STEP_MS = 1700;
const RESET_MS = 1000;

const steps = [
  {
    id: 1,
    icon: <GitBranch size={14} className="text-sky-300" />,
    label: "Super clean workflow",
    tone: "bg-sky-500/10 border-sky-400/25",
    dot: "bg-sky-300",
  },
  {
    id: 2,
    icon: <Users size={14} className="text-indigo-300" />,
    label: "Assign tasks to members",
    tone: "bg-indigo-500/10 border-indigo-400/25",
    dot: "bg-indigo-300",
  },
  {
    id: 3,
    icon: <Sparkles size={14} className="text-emerald-300" />,
    label: "AI intelligence routed",
    tone: "bg-emerald-500/10 border-emerald-400/25",
    dot: "bg-emerald-300",
  },
  {
    id: 4,
    icon: <CheckCircle2 size={14} className="text-amber-300" />,
    label: "Review and approve output",
    tone: "bg-amber-500/10 border-amber-400/25",
    dot: "bg-amber-300",
  },
];

export default function WorkflowDropdown() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  // 0..steps.length. `steps.length` means "all complete" hold state
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const holdAllDone = activeIndex === steps.length;
    const delay = holdAllDone ? RESET_MS : STEP_MS;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev >= steps.length ? 0 : prev + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [activeIndex, isInView]);

  return (
    <div
      ref={ref}
      className="w-full h-full rounded-2xl border border-white/10 bg-neutral-900/60 p-3 backdrop-blur-sm"
    >
      <p className="mb-2 px-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
        Live workflow
      </p>

      <div className="flex flex-col gap-2">
        {steps.map((step, i) => {
          const isActive = i === activeIndex && activeIndex < steps.length;
          const isDone = i < activeIndex || activeIndex === steps.length;

          return (
            <motion.div
              key={step.id}
              layout
              className={`relative overflow-hidden rounded-xl border transition-colors duration-300 ${
                isActive ? step.tone : "border-white/10 bg-neutral-800/30"
              }`}
            >
              <motion.div layout className="flex items-center gap-3 px-4 py-3">
                <div
                  className={`h-6 w-6 shrink-0 rounded-md border flex items-center justify-center ${
                    isActive ? step.tone : "bg-neutral-800 border-white/10"
                  }`}
                >
                  {isDone ? <CheckCircle2 size={13} className="text-emerald-300" /> : step.icon}
                </div>

                <span
                  className={`flex-1 text-xs font-medium transition-colors ${
                    isActive ? "text-white" : isDone ? "text-white/45" : "text-white/65"
                  }`}
                >
                  {step.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className={`h-1.5 w-1.5 rounded-full ${step.dot}`}
                    transition={{ type: "spring", stiffness: 280, damping: 26 }}
                  />
                )}
                {!isActive && isDone && <div className="h-1.5 w-1.5 rounded-full bg-emerald-300/60" />}
              </motion.div>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key={`expanded-${step.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-3">
                      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: STEP_MS / 1000, ease: "linear" }}
                          className="h-full rounded-full bg-gradient-to-r from-white/40 to-white/15"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
