import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Clock, Loader2, Minus, Pencil, X } from "lucide-react";

type StatusType = "loading" | "pending" | "progress" | "completed" | "removed";

interface ColorOption {
  name: string;
  bg: string;
  text: string;
}

const icons = {
  loading: <Loader2 size={16} className="animate-spin" />,
  pending: <Clock size={16} />,
  progress: <Clock size={16} className="opacity-80" />,
  completed: <Check size={16} />,
  removed: <Minus size={16} />,
};

const colorOptions: ColorOption[] = [
  { name: "blue", bg: "bg-blue-200", text: "text-blue-700" },
  { name: "yellow", bg: "bg-yellow-200", text: "text-yellow-700" },
  { name: "orange", bg: "bg-orange-200", text: "text-orange-700" },
  { name: "green", bg: "bg-green-200", text: "text-green-700" },
  { name: "red", bg: "bg-red-200", text: "text-red-700" },
];

export default function Badge() {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState<StatusType>("completed");
  const [color, setColor] = useState<ColorOption>(colorOptions[3]);
  const [label, setLabel] = useState("Completed");

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50">
      <div className="relative flex items-center justify-center">
        <AnimatePresence>
          {!isEditing && (
            <motion.div
              key="badgeView"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-center gap-2"
            >
              <motion.div
                layoutId="badge"
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${color.bg} ${color.text}`}
              >
                {icons[status]}
                <span className="font-medium">{label}</span>
              </motion.div>

              <motion.button
                layoutId="editBtn"
                onClick={() => setIsEditing(true)}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 "
              >
                <Pencil size={16} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isEditing && (
            <>
              {/* Dimmed background */}
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 z-10"
                onClick={() => setIsEditing(false)}
              />

              {/* Edit Panel */}
              <motion.div
                key="editPanel"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="fixed z-20 p-5 rounded-2xl bg-white shadow-xl w-80 space-y-4 border border-gray-100"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Edit Badge</span>
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="text-gray-500 hover:text-gray-700 transition"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Badge Preview */}
                <motion.div
                  layoutId="badge"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${color.bg} ${color.text} w-fit`}
                >
                  {icons[status]}
                  <span className="font-medium">{label}</span>
                </motion.div>

                {/* Editable input */}
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-xs text-gray-500 font-medium mb-1 block">
                    Label
                  </label>
                  <input
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  />
                </motion.div>

                {/* Status icons */}
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="text-xs text-gray-500 font-medium mb-2 block">
                    Status
                  </label>
                  <div className="flex justify-between gap-2">
                    {(Object.keys(icons) as StatusType[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => setStatus(key)}
                        className={`p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition ${
                          status === key ? "ring-2 ring-gray-900 bg-gray-100" : ""
                        }`}
                      >
                        {icons[key]}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Color selection */}
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="text-xs text-gray-500 font-medium mb-2 block">
                    Color
                  </label>
                  <div className="flex justify-between gap-2">
                    {colorOptions.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setColor(c)}
                        className={`w-8 h-8 rounded-full ${c.bg} hover:scale-110 transition-transform ${
                          color.name === c.name ? "ring-2 ring-gray-900 ring-offset-2" : ""
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Update button */}
                <motion.button
                  layoutId="editBtn"
                  onClick={() => setIsEditing(false)}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 mt-2 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800  shadow-sm"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Check size={16} />
                    Update Badge
                  </div>
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}