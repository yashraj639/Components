import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Link2, Clock } from "lucide-react";

const sessions = [
  {
    name: "AI Agent Setup",
    tags: ["34 In Products", "2 Mentorships"],
    avgSession: "32 Min",
  },
  {
    name: "Sprint Planning",
    tags: ["12 In Products", "5 Mentorships"],
    avgSession: "45 Min",
  },
  {
    name: "Design Review",
    tags: ["8 Handoffs", "3 Mentorships"],
    avgSession: "20 Min",
  },
];

const avatarColors = [
  "from-pink-500 to-rose-500",
  "from-violet-500 to-purple-500",
  "from-blue-500 to-cyan-500",
];

export default function AgentSchedule() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const [sessionIndex, setSessionIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const t = setInterval(
      () => setSessionIndex((p) => (p + 1) % sessions.length),
      2800,
    );
    return () => clearInterval(t);
  }, [isInView]);

  const session = sessions[sessionIndex];

  return (
    <div
      ref={ref}
      className="w-full h-full flex flex-col justify-between p-4 gap-3"
    >
      {/* Status badge */}
      <div className="flex items-center gap-1.5 w-fit">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-medium text-emerald-400">
          Scheduled
        </span>
      </div>

      {/* Session title */}
      <motion.div
        key={session.name}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
        className="space-y-3"
      >
        <div className="flex items-baseline gap-1">
          <h3 className="text-base font-semibold text-neutral-100 tracking-tight">
            {session.name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: i * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </h3>

          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-0.5 h-4 bg-blue-400 inline-block "
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {session.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Avg session */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-400">
          <Clock size={12} className="text-neutral-500" />
          <span>Average Session: {session.avgSession}</span>
        </div>
      </motion.div>

      {/* Footer: avatars + invite */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {avatarColors.map((gradient, i) => (
            <div
              key={i}
              className={`w-7 h-7 rounded-full border-2 border-neutral-900 bg-linear-to-br ${gradient} flex items-center justify-center text-[10px] font-bold text-white`}
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>

        <button className="flex items-center gap-1.5 text-[11px] text-neutral-400 border border-neutral-700 px-2.5 py-1 rounded-lg hover:border-neutral-500 hover:text-neutral-200 transition-colors duration-200">
          <Link2 size={11} />
          Invite More
        </button>
      </div>
    </div>
  );
}
