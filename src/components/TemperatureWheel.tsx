import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const ITEM_HEIGHT = 44;
const VALUES = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const HALF_VISIBLE_ITEMS = 0; 

export default function TemperatureWheel() {
  const y = useMotionValue(0);
  const [value, setValue] = useState(21);

  useEffect(() => {
    const index = VALUES.indexOf(value);
    y.set((HALF_VISIBLE_ITEMS - index) * ITEM_HEIGHT);
  }, [value, y]);

  const snapToIndex = (index: number) => {
    animate(y, (HALF_VISIBLE_ITEMS - index) * ITEM_HEIGHT, {
      type: "spring",
      stiffness: 400,
      damping: 40,
    });
  };

  const handleDragEnd = () => {
    const offset = y.get();
    const indexOffset = Math.round(offset / ITEM_HEIGHT);
    const currentIndex = VALUES.indexOf(value);

    const nextIndex = Math.min(
      Math.max(currentIndex - indexOffset, 0),
      VALUES.length - 1,
    );

    setValue(VALUES[nextIndex]);
    snapToIndex(nextIndex);
  };

  const updateValue = (next: number) => {
    if (!VALUES.includes(next)) return;
    const index = VALUES.indexOf(next);
    setValue(next);
    snapToIndex(index);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-transparent">
      <div className="flex flex-col items-center gap-4">
        {/* UP BUTTON */}
        <button
          onClick={() => updateValue(value + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition"
        >
          <ChevronUp size={20} />
        </button>

        {/* WHEEL */}
        <div className="flex h-[260px] w-[88px] items-center justify-center rounded-[32px] bg-[#1f1f1f] shadow-xl">
          <div className="relative h-[220px] w-full overflow-hidden py-[88px]">
            {/* Center highlight */}
            <div className="pointer-events-none absolute left-0 top-1/2 h-[44px] w-full -translate-y-1/2 rounded-xl bg-white/5" />

            <motion.div
              drag="y"
              dragConstraints={{
                top: -(VALUES.length - 1) * ITEM_HEIGHT,
                bottom: 0,
              }}
              style={{ y }}
              onDragEnd={handleDragEnd}
              className="w-full"
            >
              {VALUES.map((v, i) => {
                const distance = Math.abs(i - VALUES.indexOf(value));
                const opacity = 1 - distance * 0.25;
                const scale = 1 - distance * 0.08;

                return (
                  <div
                    key={v}
                    className="flex h-[44px] items-center justify-center text-white"
                    style={{
                      opacity,
                      transform: `scale(${scale})`,
                      fontSize: v === value ? 28 : 20,
                      fontWeight: v === value ? 500 : 400,
                    }}
                  >
                    {v}°
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* DOWN BUTTON */}
        <button
          onClick={() => updateValue(value - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition"
        >
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
}
