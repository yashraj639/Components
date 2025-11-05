import { Bed, Moon, Sun } from "lucide-react";
import { GiRunningShoe } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { motion, } from "motion/react";



export default function BentoWhite() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-8">
      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-col gap-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl">
          <Bento1 />
          <Bento2 />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-4xl">
          <Bento3 />
          <Bento4 />
          <Bento5 />
        </div>
      </motion.div>
    </div>
  );
}

const Bento1 = () => (
  <motion.div
    
    className="rounded-3xl p-8 bg-linear-to-l from-yellow-50 to-white border border-yellow-100 overflow-hidden"
  >
    <div className="flex items-center justify-between gap-5">
      <div>
        <h1 className="text-3xl mb-5">Sweat, Smile <br /> and Repeat</h1>
        <button className="bg-amber-100 rounded-3xl px-3 py-2">
          Start Grinding →
        </button>
      </div>
      <img src="./Exercize.png" alt="Workout" className="h-35" />
    </div>
  </motion.div>
);

const Bento2 = () => (
  <motion.div  className="rounded-3xl p-8 bg-[#FFF5EC] overflow-hidden">
    <div className="flex items-center justify-between">
      <img src="./Image.png" alt="" className="h-40" />
      <div className="flex flex-col items-end">
        <h1 className="text-2xl mb-3">Energy flowing</h1>
        <Sun className="text-[#D49A60]" size={32} />
      </div>
    </div>
  </motion.div>
);

const Bento3 = () => (
  <motion.div  className="bg-[#F7E8F9] rounded-3xl p-6 flex flex-col justify-center">
    <p className="text-sm text-[#6E5471] font-medium mb-2">TODAY GOALS</p>
    <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between gap-2">
      <div className="flex flex-col items-center justify-center bg-[#F7E8F9] px-2 py-1 rounded-2xl">
        <p className="text-xl font-semibold mb-1">MAY</p>
        <p className="text-2xl">05</p>
      </div>
      <ul className="list-disc list-inside text-xs text-gray-600">
        <li>20 Pushups</li>
        <li>Jogging for 5 km</li>
        <li>8 hours of sleep</li>
        <li>Meditation for 30 min</li>
      </ul>
    </div>
  </motion.div>
);

const Bento4 = () => (
  <motion.div
    
    className="bg-[#E9F1FA] rounded-3xl flex flex-col items-center justify-center gap-4 p-8"
  >
    <Moon size={52} className="text-[#3C5060]" />
    <h3 className="text-[#3C5060] text-lg font-medium">Have you had enough sleep today?</h3>
    <div className="flex gap-3">
      <button className="px-4 py-2 rounded-full bg-[#bfdbfb] shadow text-sm text-gray-600">Nah</button>
      <button className="px-4 py-2 rounded-full bg-[#bfdbfb] shadow text-sm text-gray-600">💤</button>
    </div>
  </motion.div>
);

const Bento5 = () => {
  const items = [
    { icon: <Bed />, label: "Sleep", color: "bg-blue-200", stat: "Avg: 7 hrs 15 min" },
    { icon: <GiRunningShoe size={20} />, label: "Jogging", color: "bg-green-200", stat: "Avg: 1 hr 10 min" },
    { icon: <GrYoga size={20} />, label: "Meditation", color: "bg-yellow-200", stat: "Avg: 20 mins" },
  ];

  return (
    <motion.div  className="bg-[#E9F8EF] rounded-3xl p-6 flex flex-col gap-5">
      {items.map(({ icon, label, color, stat }) => (
        <div key={label} className="bg-white px-3 py-2 rounded-2xl flex items-center gap-3">
          <div className={`${color} p-2 rounded-full`}>{icon}</div>
          <div>
            <h4 className="font-semibold text-[#375C3E]">{label}</h4>
            <p className="text-sm text-gray-500">{stat}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
