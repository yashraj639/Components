import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const MIN_VALUE = 19;
const MAX_VALUE = 30;
const TRACK_HEIGHT = 180; // px — the actual draggable range

export default function TemperatureSlider() {
  const y = useMotionValue(0);
  const [value, setValue] = useState(21);
  const isDragging = useRef(false);

  // Map y position → temperature (top = hot, bottom = cold)
  const temp = useTransform(y, [0, TRACK_HEIGHT], [MAX_VALUE, MIN_VALUE], {
    clamp: true,
  });

  // While dragging: update the display value
  useEffect(() => {
    return temp.on("change", (v) => {
      if (isDragging.current) {
        setValue(Math.round(v));
      }
    });
  }, [temp]);

  // Sync y to value only when NOT dragging (e.g. on mount)
  useEffect(() => {
    if (!isDragging.current) {
      const progress = (MAX_VALUE - value) / (MAX_VALUE - MIN_VALUE);
      y.set(progress * TRACK_HEIGHT);
    }
  }, []);

  return (
    <div className="flex h-[260px] w-[88px] flex-col items-center rounded-[32px] bg-[#1f1f1f] px-4 pt-5 pb-6 shadow-xl">
      {/* Temperature label */}
      <div className="mb-4 text-2xl font-medium text-white">
        {value}°
      </div>

      {/* Slider track + knob */}
      <div
        className="relative flex flex-1 w-full justify-center"
        style={{ height: TRACK_HEIGHT }}
      >
        {/* Track */}
        <div className="absolute inset-y-0 left-1/2 w-1.5 -translate-x-1/2 rounded-full bg-neutral-700" />

        {/* Knob */}
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: TRACK_HEIGHT }}
          dragElastic={0}
          dragMomentum={false}
          style={{
            y,
            x: "-50%",
            top: 0,
            left: "50%",
          }}
          className="absolute z-10 h-8 w-8 rounded-full bg-white shadow-md cursor-grab active:cursor-grabbing"
          onDragStart={() => {
            isDragging.current = true;
          }}
          onDragEnd={() => {
            isDragging.current = false;
            // Snap y to the nearest whole-degree position
            const snapped =
              ((MAX_VALUE - Math.round(temp.get())) / (MAX_VALUE - MIN_VALUE)) *
              TRACK_HEIGHT;
            y.set(snapped);
          }}
        />
      </div>
    </div>
  );
}