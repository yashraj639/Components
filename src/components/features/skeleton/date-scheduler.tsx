import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export default function DateScheduler() {
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 3, 5]);

  const toggle = (i: number) =>
    setSelectedDays((prev) =>
      prev.includes(i) ? prev.filter((d) => d !== i) : [...prev, i],
    );

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 gap-4">
      {/* Row 1: Repeat label + badge */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-200">
          Repeat Weekly
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full border border-neutral-700 text-neutral-400 bg-neutral-800/60">
          Every Week
        </span>
      </div>

      {/* Row 2: Day picker */}
      <div className="flex justify-between gap-1">
        {DAYS.map((day, i) => (
          <motion.button
            key={i}
            onClick={() => toggle(i)}
            whileTap={{ scale: 0.85 }}
            className={cn(
              "w-8 h-8 rounded-full text-xs font-medium transition-all duration-200 border",
              selectedDays.includes(i)
                ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/40"
                : "bg-neutral-800/50 border-neutral-700/50 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300",
            )}
          >
            {day}
          </motion.button>
        ))}
      </div>

      {/* Row 3: Meta info */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-500">Start</span>
          <div className="flex items-center gap-1.5">
            <span className="text-neutral-200 font-medium">
              Sun, May 12, 2025
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-500">Created at</span>
          <span className="text-neutral-300 font-medium">04:25 AM GMT +7</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-800" />

      {/* Row 4: Actions */}
      <div className="flex items-center gap-2">
        <button className="flex-1 text-xs py-2 rounded-lg border border-neutral-700 text-neutral-400 hover:text-neutral-200 hover:border-neutral-500 transition-colors duration-200">
          Cancel
        </button>
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="flex-1 text-xs py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/30 transition-colors duration-200"
        >
          Save
        </motion.button>
      </div>
    </div>
  );
}
