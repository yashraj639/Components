import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Pencil, RotateCcw, X } from "lucide-react";
import SignatureCanvas from "react-signature-canvas";

export default function SignatureFlow() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const sigCanvas = useRef<SignatureCanvas>(null);

  const clearSignature = () => sigCanvas.current?.clear();

  const finishSigning = () => {
    if (sigCanvas.current?.isEmpty()) return alert("Please sign first!");
    setIsDone(true);
    setIsOpen(false);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center justify-center p-6">
        <AnimatePresence>
          {!isDone && !isOpen && (
            <motion.button
              layoutId="button"
              key="start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 bg-neutral-900 text-white/75 px-4 py-2 rounded-full font-medium shadow-sm"
            >
              <Pencil size={18} />
              Start Signing
            </motion.button>
          )}
        </AnimatePresence>

        {/* Overlay + Signing Modal */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Dimmed background */}
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              />

              {/* Popup box */}
              <motion.div
                key="popup"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="fixed z-20 bg-neutral-900 rounded-2xl border border-dashed border-neutral-700 p-6 w-62 h-72 shadow-lg flex flex-col items-center gap-4"
              >
                <div className="flex justify-between items-center w-full text-gray-600">
                  <button onClick={clearSignature}>
                    <RotateCcw size={18} />
                  </button>
                  <span className="font-medium">Sign</span>
                  <button onClick={() => setIsOpen(false)}>
                    <X size={18} />
                  </button>
                </div>

                <SignatureCanvas
                  ref={sigCanvas}
                  penColor="white"
                  canvasProps={{
                    width: 240,
                    height: 140,
                  }}
                />

                <motion.button
                  layoutId="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={finishSigning}
                  className="flex items-center gap-2 bg-neutral-900 text-white/75 px-4 py-2 rounded-full font-medium"
                >
                  <Pencil size={18} />
                  Finish Signing
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Done State */}
        <AnimatePresence mode="wait">
          {isDone && !isOpen && (
            <motion.div
              layoutId="done-container"
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-center gap-3"
            >
              <motion.div
                layoutId="main-button"
                className="flex items-center gap-2 bg-neutral-900 text-white/75 px-5 py-2.5 rounded-full shadow-lg"
              >
                <Check size={18} className="text-green-400" />
                <span className="font-medium">Signing Done</span>
              </motion.div>

              <motion.button
                layoutId="button"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                onClick={() => {
                  setIsDone(false);
                  setIsOpen(true);
                }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neutral-800 hover:bg-neutral-700 p-2.5 rounded-full transition-colors shadow-lg"
              >
                <Pencil size={16} className="text-white/75" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
