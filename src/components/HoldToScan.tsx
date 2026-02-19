import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint } from "lucide-react";
import { useRef, useState } from "react";

type State = "idle" | "holding" | "scanning" | "processing" | "success";

const HOLD_TIME = 600;

export default function HoldToScanMock() {
  const [state, setState] = useState<State>("idle");
  const timer = useRef<number | null>(null);

  const startHold = () => {
    setState("holding");
    timer.current = window.setTimeout(() => {
      setState("scanning");
      setTimeout(() => setState("processing"), 2000);
      setTimeout(() => setState("success"), 3000);
    }, HOLD_TIME);
  };

  const cancelHold = () => {
    if (state === "holding") {
      clearTimeout(timer.current!);
      setState("idle");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-neutral-950 text-white">
      <AnimatePresence>
        {(state === "idle" || state === "holding") && (
          <motion.button
            key="hold"
            onPointerDown={startHold}
            onPointerUp={cancelHold}
            onPointerLeave={cancelHold}
            className="relative h-20 w-72 rounded-2xl bg-neutral-900 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: state === "holding" ? 1 : 0 }}
              transition={{ duration: HOLD_TIME / 1000, ease: "linear" }}
              style={{ originX: 0 }}
            />
            <span className="relative z-10 flex h-full items-center justify-center gap-2 text-xl">
              {state === "holding" ? (
                <>
                  <Fingerprint className="h-5 w-5" />
                  Hold
                </>
              ) : (
                "Hold to scan document"
              )}
            </span>
          </motion.button>
        )}

        {state === "scanning" && (
          <motion.div
            key="scan"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-96 w-72 rounded-3xl bg-neutral-900/90 p-4 shadow-2xl overflow-hidden"
          >
            {/* inner glass card */}
            <motion.div
              className="relative h-65 w-full rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm flex items-center justify-center"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              {/* document icon */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/40"
              >
                <path
                  d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M14 3v6h6" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M9 13h6M9 17h4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* scanning line */}
              <motion.div
                className="absolute left-4 right-4 h-[2px] bg-white/60"
                animate={{ top: ["12%", "88%"] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <p className="w-full text-center mt-8 text-xl text-white/60">
              Scanning document…
            </p>
          </motion.div>
        )}

        {state === "processing" && (
          <motion.div
            key="process"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-20 w-72 rounded-2xl bg-blue-600 overflow-hidden text-white flex items-center justify-center gap-3 text-xl"
          >
            <motion.div
              className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            Processing…
          </motion.div>
        )}

        {state === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="h-20 w-72 rounded-2xl bg-green-800 overflow-hidden text-white flex items-center justify-center gap-3 text-xl"
          >
            Document uploaded ✓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
