import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../../lib/utils";
import { Video, BarChart2, Phone, CornerDownRight } from "lucide-react";

const avatarColors = [
  "from-pink-500 to-rose-500",
  "from-violet-500 to-purple-500",
];

const listItems = [
  {
    icon: <Video size={13} className="text-violet-400" />,
    title: "Looms Recorded",
    meta1: "34 In Products",
    meta2: "2 Mentorships",
    sub: "Average Session: 32 Min",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: <BarChart2 size={13} className="text-amber-400" />,
    title: "Strategic Overview",
    meta1: "Total Calls: 50",
    meta2: "Internal: 50h",
    sub: "Most Booked: Tuesday",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: <Phone size={13} className="text-emerald-400" />,
    title: "Total Calls",
    meta1: "Client Calls",
    meta2: "Internal Syncs",
    sub: "Discovery Calls",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

const tableRows = [
  { name: "Sprint Planning", duration: "45m", status: "Done", date: "Mon" },
  { name: "Design Sync", duration: "20m", status: "Live", date: "Tue" },
  { name: "Retro", duration: "30m", status: "Pending", date: "Wed" },
  { name: "1:1 Review", duration: "15m", status: "Done", date: "Thu" },
];

const statusColor: Record<string, string> = {
  Done: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Live: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Pending: "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

export default function TaskMarquee() {
  const [view, setView] = useState<"list" | "table">("list");
  const [cmd, setCmd] = useState("");

  return (
    <div className="w-full h-full flex flex-col gap-3 p-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1 bg-neutral-800/60 rounded-lg p-0.5 border border-neutral-700/50">
          {(["list", "table"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                "relative text-xs px-3 py-1 rounded-md transition-colors duration-200 capitalize font-medium",
                view === v
                  ? "text-neutral-100"
                  : "text-neutral-500 hover:text-neutral-300",
              )}
            >
              {view === v && (
                <motion.div
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-neutral-700 rounded-md"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{v}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {avatarColors.map((g, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-full border-2 border-neutral-900 bg-linear-to-br ${g}`}
              />
            ))}
          </div>
          <span className="text-[11px] text-neutral-500 border border-neutral-700 px-2 py-0.5 rounded-md">
            Invite
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {view === "list" ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-3 gap-2 h-full"
            >
              {listItems.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-lg border p-3 flex flex-col gap-2 ${item.bg}`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded flex items-center justify-center bg-neutral-900/60">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-neutral-200 leading-tight">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    <span className="text-[10px] text-neutral-400 bg-neutral-800/60 px-1.5 py-0.5 rounded">
                      {item.meta1}
                    </span>
                    <span className="text-[10px] text-neutral-400 bg-neutral-800/60 px-1.5 py-0.5 rounded">
                      {item.meta2}
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-500">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-neutral-500 border-b border-neutral-800">
                    <th className="text-left pb-2 font-medium">Session</th>
                    <th className="text-left pb-2 font-medium">Duration</th>
                    <th className="text-left pb-2 font-medium">Day</th>
                    <th className="text-left pb-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/50">
                  {tableRows.map((row) => (
                    <tr key={row.name}>
                      <td className="py-2 text-neutral-200">{row.name}</td>
                      <td className="py-2 text-neutral-400">{row.duration}</td>
                      <td className="py-2 text-neutral-400">{row.date}</td>
                      <td className="py-2">
                        <span
                          className={cn(
                            "px-1.5 py-0.5 rounded border text-[10px] font-medium",
                            statusColor[row.status],
                          )}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* AI command input */}
      <div className="flex items-center gap-2 border border-neutral-700 rounded-lg px-3 py-2 bg-neutral-800/40 focus-within:border-neutral-500 transition-colors duration-200">
        <input
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          placeholder="Make a PDF doc of Strategic Overview"
          className="flex-1 text-xs bg-transparent text-neutral-300 placeholder-neutral-600 outline-none"
        />
        <button className="flex items-center gap-1 text-[11px] font-semibold bg-orange-500 hover:bg-orange-400 text-white px-2.5 py-1 rounded-md transition-colors duration-150 shrink-0">
          <CornerDownRight size={11} />
          Enter
        </button>
      </div>
    </div>
  );
}
