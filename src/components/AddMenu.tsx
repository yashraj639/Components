import  { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, FileText, Image, Link, Calendar } from 'lucide-react';

export default function AddMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { icon: <FileText size={18} />, title: "Document", desc: "Create a new document" },
    { icon: <Image size={18} />, title: "Image", desc: "Upload an image" },
    { icon: <Link size={18} />, title: "Link", desc: "Add a link" },
    { icon: <Calendar size={18} />, title: "Event", desc: "Schedule an event" }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center justify-center">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              layoutId="add-button"
              key="closed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center bg-neutral-900 text-white/60 w-14 h-10 rounded-full shadow-lg cursor-pointer"
            >
              <Plus size={18} />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Dimmed background */}
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-10"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Container */}
              <motion.div
                key="open"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="fixed z-20 flex flex-col items-center gap-3"
              >
                {/* Close Button */}
                <motion.button
                  layoutId="add-button"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center bg-neutral-900 text-white/60 w-14 h-10 rounded-full shadow-lg cursor-pointer"
                >
                  <X size={18} />
                </motion.button>

                {/* Expanding Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 25,
                    delay: 0.05
                  }}
                  className="w-56 bg-neutral-900 shadow-2xl rounded-2xl py-3 border border-neutral-800"
                >
                  {items.map((item, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.1 + i * 0.04,
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-white/75 hover:bg-neutral-700 transition-colors rounded-lg"
                    >
                      <div className="text-white/50">{item.icon}</div>
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-white/40">{item.desc}</p>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}