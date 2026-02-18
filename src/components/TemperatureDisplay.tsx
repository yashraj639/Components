import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function TemperatureDisplay() {
  const [value, setValue] = useState(21);
  const [direction, setDirection] = useState(0); // 1 for up, -1 for down

  const increment = () => {
    if (value < 30) {
      setDirection(1);
      setValue(value + 1);
    }
  };

  const decrement = () => {
    if (value > 19) {
      setDirection(-1);
      setValue(value - 1);
    }
  };

  return (
    <div className="flex h-[260px] w-[88px] flex-col items-center justify-between rounded-[32px] bg-[#1f1f1f] py-6 shadow-xl">
      {/* Up Button */}
      <button
        onClick={increment}
        className="flex h-12 w-12 items-center justify-center text-neutral-400 hover:text-white transition-colors active:scale-95"
      >
        <ChevronUp size={24} />
      </button>

      {/* Value Display */}
      <div className="relative flex h-16 w-full items-center justify-center overflow-hidden text-4xl font-medium text-white">
        <div className="flex">
          {value
            .toString()
            .split("")
            .map((digit, index) => (
              <Digit
                key={`${index}-${digit}`}
                digit={digit}
                direction={direction}
              />
            ))}
        </div>
        <div>°</div>
      </div>

      {/* Down Button */}
      <button
        onClick={decrement}
        className="flex h-12 w-12 items-center justify-center text-neutral-400 hover:text-white transition-colors active:scale-95"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
}

function Digit({ digit, direction }: { digit: string; direction: number }) {
  // If direction is 0 (initial), don't animate enter
  const variants = {
    initial: { y: direction * 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: direction * -20, opacity: 0 },
  };

  return (
    <div className="relative w-[0.6em] h-[1.2em]">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.span
          key={digit}
          variants={variants}
          initial={direction !== 0 ? "initial" : false}
          animate="animate"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0 flex justify-center"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
