import { motion } from "motion/react";
import { useMemo, useState } from "react";

type Billing = "monthly" | "yearly";

const BASE_PRICE = 20;
const PER_SEAT = 6;

const FEATURES = [
  { id: "analytics", label: "Advanced analytics", price: 10, hint: "Cohorts, funnels, retention" },
  { id: "automation", label: "Workflow automation", price: 15, hint: "Rules, triggers, approvals" },
  { id: "support", label: "Priority support", price: 20, hint: "Fast SLA + dedicated channel" },
];

export default function PricingCustomizer() {
  const [teamSize, setTeamSize] = useState(3);
  const [billing, setBilling] = useState<Billing>("monthly");
  const [features, setFeatures] = useState<Record<string, boolean>>({
    analytics: false,
    automation: false,
    support: false,
  });

  const price = useMemo(() => {
    let total = BASE_PRICE + teamSize * PER_SEAT;

    FEATURES.forEach((f) => {
      if (features[f.id]) total += f.price;
    });

    if (billing === "yearly") total *= 0.8;
    return Math.round(total);
  }, [teamSize, features, billing]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black px-4 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-size-[32px_32px]" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="relative mx-auto w-full max-w-xl rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl md:p-8"
      >
        <div className="w-full flex flex-col items-center mb-6">
          <p className="text-xs uppercase tracking-[0.24em] text-white/60">Pricing Studio</p>
          <h1 className="mt-2 text-2xl font-semibold md:text-3xl">Build your plan</h1>
          <p className="mt-2 text-sm text-white/70">Simple knobs, instant pricing, no surprises.</p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="relative inline-flex rounded-xl bg-black/30 p-1 ring-1 ring-white/15">
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 420, damping: 30 }}
              className="absolute inset-y-1 w-1/2 rounded-lg bg-white"
              style={{ left: billing === "monthly" ? "0%" : "50%" }}
            />
            {(["monthly", "yearly"] as Billing[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setBilling(mode)}
                className={`relative z-10 px-5 py-2 text-sm font-medium transition ${
                  billing === mode ? "text-slate-900" : "text-white/80"
                }`}
              >
                {mode === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-black/25 p-5 ring-1 ring-white/10">
          <div className="text-center">
            <AnimatedNumber value={price} />
            <div className="mt-2 text-sm text-white/70">
              per month {billing === "yearly" ? "(billed yearly)" : ""}
            </div>

            {billing === "yearly" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 inline-flex rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-medium text-emerald-100 ring-1 ring-emerald-200/30"
              >
                Save 20%
              </motion.div>
            )}
          </div>
        </div>

        <div className="mb-7">
          <div className="mb-2 flex justify-between text-sm text-white/80">
            <span>Team size</span>
            <span className="font-medium">{teamSize} users</span>
          </div>
          <input
            type="range"
            min={1}
            max={20}
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-neutral-300"
          />
        </div>

        <div className="space-y-3">
          {FEATURES.map((feature, i) => {
            const selected = features[feature.id];
            return (
              <motion.button
                key={feature.id}
                onClick={() =>
                  setFeatures((f) => ({
                    ...f,
                    [feature.id]: !f[feature.id],
                  }))
                }
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full rounded-2xl px-4 py-3 text-left ring-1 transition ${
                  selected
                    ? "bg-teal-300/15 ring-teal-200/40"
                    : "bg-black/25 ring-white/10 hover:bg-black/35"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{feature.label}</div>
                    <div className="text-xs text-white/60">{feature.hint}</div>
                  </div>
                  <span
                    className={`rounded-full px-2 py-1 text-sm font-medium ${
                      selected ? "bg-white text-slate-900" : "bg-white/10 text-white/85"
                    }`}
                  >
                    +${feature.price}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const digits = value.toString().split("");

  return (
    <div className="flex items-end justify-center overflow-hidden text-5xl tracking-tight md:text-6xl">
      <span className="mr-1">$</span>

      {digits.map((digit, i) => (
        <div
          key={i}
          className="relative h-[1em] w-[0.6em] overflow-hidden"
        >
          <motion.div
            key={digit}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {digit}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

