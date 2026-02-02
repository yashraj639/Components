import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

interface BarData {
  value: number;
  label: string;
}

const AnimatedCounter: React.FC<{
  value: number;
  delay: number;
  isVisible: boolean;
}> = ({ value, delay, isVisible }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest);
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const controls = animate(count, value, {
        duration: 1,
        delay: delay,
        ease: "easeOut",
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isVisible, value, delay, count, rounded]);

  return <>{displayValue}K</>;
};

const PerformanceChart: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const barData: BarData[] = [
    { value: 5, label: "5K" },
    { value: 12, label: "12K" },
    { value: 30, label: "30K" },
    { value: 24, label: "24K" },
    { value: 10, label: "10K" },
    { value: 4, label: "4K" },
  ];

  const maxValue = Math.max(...barData.map((d) => d.value));

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-5xl w-full">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-teal-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h2 className="text-3xl font-medium text-gray-700">Performance</h2>
          </div>
          <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-500 font-medium hover:border-gray-300 transition-colors">
            Last week
          </button>
        </div>

        <div className="flex items-end justify-center gap-6 md:gap-8 h-96 mb-12">
          {barData.map((bar, index) => {
            const heightPercentage = (bar.value / maxValue) * 100;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-end flex-1 max-w-[120px]"
                style={{ height: `${heightPercentage}%` }}
              >
                <motion.div
                  className="relative w-full h-full"
                  initial={{ scaleY: 0 }}
                  animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  style={{ originY: 1 }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-teal-100 to-teal-50 rounded-t-2xl" />
                  <div className="absolute inset-0 bg-linear-to-t from-teal-100 to-teal-300 rounded-t-2xl" />
                  <motion.div
                    className="absolute -top-14 left-1/2 -translate-x-1/2 bg-teal-400 text-white px-4 py-2 rounded-xl font-semibold text-lg whitespace-nowrap shadow-lg"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={
                      isVisible
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.5, y: 20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.4,
                      type: "spring",
                      stiffness: 200,
                      damping: 12,
                    }}
                  >
                    <AnimatedCounter
                      value={bar.value}
                      delay={index * 0.1 + 0.3}
                      isVisible={isVisible}
                    />
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="">
          <h3 className="text-3xl font-normal text-gray-800 mb-4">
            Real-time analytics
          </h3>
          <p className="text-xl text-gray-400 leading-relaxed">
            Track performance, identify bottlenecks, and optimize support with
            actionable insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
