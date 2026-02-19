import { Repeat } from "lucide-react";
import { motion, useMotionValue, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import {  FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import { FcMusic, FcNext, FcPrevious } from "react-icons/fc";

const TRACKS = [
  {
    id: 1,
    title: "Midnight Groove",
    artist: "The Velvet Echo",
    album: "Neon Nights",
    duration: 213,
    color: "#f97316",
    accent: "#fb923c",
  },
  {
    id: 2,
    title: "Cassette Dreams",
    artist: "Lo-Fi Phantom",
    album: "Tape Deck Séance",
    duration: 187,
    color: "#a855f7",
    accent: "#c084fc",
  },
  {
    id: 3,
    title: "Static Sunrise",
    artist: "Analog Soul",
    album: "Warm Frequencies",
    duration: 241,
    color: "#06b6d4",
    accent: "#22d3ee",
  },
  {
    id: 4,
    title: "Vinyl Heartbeat",
    artist: "The Needle Drop",
    album: "Side B",
    duration: 198,
    color: "#10b981",
    accent: "#34d399",
  },
];

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// Waveform bars - pre-generated look
const BAR_HEIGHTS = Array.from({ length: 40 }, (_, i) => {
  const wave = Math.sin(i * 0.4) * 0.4 + Math.sin(i * 0.9) * 0.3 + 0.5;
  return 8 + wave * 30;
});

export default function RetroMusicPlayer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–1
  const [volume, setVolume] = useState(0.7);
  const [elapsed, setElapsed] = useState(0);
  const [liked, setLiked] = useState<number[]>([]);
  const [shuffled, setShuffled] = useState(false);
  const [repeated, setRepeated] = useState(false);
  const scrubberRef = useRef<HTMLDivElement>(null);

  const track = TRACKS[trackIndex];

  // Tick timer
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setElapsed((e) => {
        const next = e + 0.1;
        if (next >= track.duration) {
          if (repeated) {
            setElapsed(0);
            return 0;
          }
          handleNext();
          return 0;
        }
        setProgress(next / track.duration);
        return next;
      });
    }, 100);
    return () => clearInterval(id);
  }, [isPlaying, track.duration, repeated]);

  const handleNext = () => {
    setTrackIndex((i) =>
      shuffled
        ? Math.floor(Math.random() * TRACKS.length)
        : (i + 1) % TRACKS.length,
    );
    setElapsed(0);
    setProgress(0);
  };

  const handlePrev = () => {
    if (elapsed > 3) {
      setElapsed(0);
      setProgress(0);
      return;
    }
    setTrackIndex((i) => (i - 1 + TRACKS.length) % TRACKS.length);
    setElapsed(0);
    setProgress(0);
  };

  const handleScrubClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrubberRef.current) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const ratio = Math.max(
      0,
      Math.min(1, (e.clientX - rect.left) / rect.width),
    );
    setProgress(ratio);
    setElapsed(ratio * track.duration);
  };

  const toggleLike = () => {
    setLiked((prev) =>
      prev.includes(track.id)
        ? prev.filter((id) => id !== track.id)
        : [...prev, track.id],
    );
  };

  const isLiked = liked.includes(track.id);
  const vinylRotate = useMotionValue(0);

  // Spin vinyl while playing
  useEffect(() => {
    let raf: number;
    const spin = () => {
      if (isPlaying) {
        vinylRotate.set(vinylRotate.get() + 0.3);
      }
      raf = requestAnimationFrame(spin);
    };
    raf = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(raf);
  }, [isPlaying]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f]">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[120px] opacity-20 transition-colors duration-1000"
        style={{ background: track.color }}
      />

      <div
        className="relative z-10 w-[400px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        style={{
          background:
            "linear-gradient(160deg, #1a1a2e 0%, #12121f 50%, #0d0d1a 100%)",
        }}
      >
        {/* Scanline overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-3xl"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
          }}
        />

        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-2">
          <span
            className="text-[10px] font-bold tracking-[0.25em] uppercase"
            style={{ color: track.accent }}
          >
            ◉ Now Playing
          </span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: i === 0 ? track.color : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Vinyl + Track Info */}
        <div className="flex items-center gap-5 px-6 py-3">
          {/* Vinyl record */}
          <div className="relative shrink-0">
            <motion.div
              className="relative h-28 w-28 rounded-full shadow-2xl"
              style={{
                rotate: vinylRotate,
                background: `radial-gradient(circle at 50% 50%, ${track.color}33 0%, #111 40%, #1a1a1a 55%, #222 60%, #111 65%, #1a1a1a 75%, #111 100%)`,
                boxShadow: `0 0 30px ${track.color}44`,
              }}
            >
              {/* Groove rings */}
              {[30, 42, 54].map((r) => (
                <div
                  key={r}
                  className="absolute rounded-full border border-white/5"
                  style={{
                    top: `${50 - r / 1.12}%`,
                    left: `${50 - r / 1.12}%`,
                    width: `${r * 1.78}%`,
                    height: `${r * 1.78}%`,
                  }}
                />
              ))}
              {/* Center label */}
              <div
                className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-[8px] font-black"
                style={{
                  background: `radial-gradient(circle, ${track.color} 0%, ${track.accent}aa 100%)`,
                }}
              >
                <FcMusic />
              </div>
              {/* Spindle */}
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40" />
            </motion.div>

            {/* Tonearm */}
            <div
              className="absolute -right-3 top-0 h-12 origin-top-right"
              style={{
                width: "2px",
                background: "linear-gradient(to bottom, #aaa, #555)",
                transform: `rotate(${isPlaying ? "28deg" : "20deg"})`,
                transition: "transform 0.6s ease",
                borderRadius: "1px",
              }}
            />
          </div>

          {/* Track info */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-widest mb-0.5"
                  style={{ color: track.accent }}
                >
                  {track.album}
                </p>
                <h2 className="text-white font-bold text-lg leading-tight truncate">
                  {track.title}
                </h2>
                <p className="text-neutral-400 text-sm mt-0.5 truncate">
                  {track.artist}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Like button */}
            <button
              onClick={toggleLike}
              className="mt-2 text-lg transition-transform active:scale-75"
            >
              <motion.span
                animate={isLiked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ display: "inline-block" }}
              >
                {isLiked ? (
                  <span style={{ color: track.color }}>♥</span>
                ) : (
                  <span className="text-neutral-500">♡</span>
                )}
              </motion.span>
            </button>
          </div>
        </div>

        {/* Waveform visualiser */}
        <div className="px-6 pb-2">
          <div className="flex h-12 items-end gap-[2px]">
            {BAR_HEIGHTS.map((h, i) => {
              const ratio = i / BAR_HEIGHTS.length;
              const isActive = ratio <= progress;
              return (
                <motion.div
                  key={i}
                  className="flex-1 rounded-full"
                  style={{
                    background: isActive
                      ? track.color
                      : "rgba(255,255,255,0.08)",
                    boxShadow: isActive ? `0 0 4px ${track.color}88` : "none",
                  }}
                  animate={{
                    height:
                      isPlaying && isActive
                        ? [h, h * (0.7 + Math.random() * 0.5), h]
                        : h,
                  }}
                  transition={{
                    duration: 0.5 + Math.random() * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Scrubber */}
        <div className="px-6 pb-3">
          <div
            ref={scrubberRef}
            className="group relative h-1.5 w-full cursor-pointer rounded-full bg-white/10"
            onClick={handleScrubClick}
          >
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: `${progress * 100}%`,
                background: `linear-gradient(to right, ${track.color}, ${track.accent})`,
                boxShadow: `0 0 8px ${track.color}88`,
              }}
            />
            {/* Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full border-2 border-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                left: `calc(${progress * 100}% - 7px)`,
                background: track.color,
              }}
            />
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-neutral-500 font-mono">
            <span>{formatTime(elapsed)}</span>
            <span>{formatTime(track.duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-6 pb-5">
          {/* Shuffle */}
          <button
            onClick={() => setShuffled((s) => !s)}
            className="text-sm transition-opacity"
            style={{ color: shuffled ? track.accent : "rgba(255,255,255,0.3)" }}
            title="Shuffle"
          >
            ⇌
          </button>

          {/* Prev */}
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 active:scale-90"
          >
            <FcPrevious />
          </button>

          {/* Play/Pause */}
          <motion.button
            onClick={() => setIsPlaying((p) => !p)}
            className="relative flex h-12 w-12 items-center justify-center rounded-full text-black text-2xl font-bold shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${track.color}, ${track.accent})`,
              boxShadow: `0 0 24px ${track.color}66`,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isPlaying ? "pause" : "play"}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                {isPlaying ? <FaRegCirclePause /> : <FaRegCirclePlay />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 active:scale-90"
          >
            <FcNext />
          </button>

          {/* Repeat */}
          <button
            onClick={() => setRepeated((r) => !r)}
            className="text-sm transition-opacity"
            style={{ color: repeated ? track.accent : "rgba(255,255,255,0.3)" }}
            title="Repeat"
          >
            <Repeat />
          </button>
        </div>

        {/* Volume + Track list */}
        <div
          className="border-t border-white/5 px-6 py-4"
          style={{ background: "rgba(0,0,0,0.3)" }}
        >
          {/* Volume slider */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs text-neutral-500">🔈</span>
            <div
              className="relative flex-1 h-1 cursor-pointer rounded-full bg-white/10"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const v = Math.max(
                  0,
                  Math.min(1, (e.clientX - rect.left) / rect.width),
                );
                setVolume(v);
              }}
            >
              <div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  width: `${volume * 100}%`,
                  background: `linear-gradient(to right, ${track.color}88, ${track.color})`,
                }}
              />
            </div>
            <span className="text-xs text-neutral-500">🔊</span>
          </div>

          {/* Track list */}
          <div className="flex flex-col gap-1.5">
            {TRACKS.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => {
                  setTrackIndex(i);
                  setElapsed(0);
                  setProgress(0);
                }}
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-left transition-all"
                style={{
                  background: i === trackIndex ? `${t.color}22` : "transparent",
                  border: `1px solid ${i === trackIndex ? t.color + "44" : "transparent"}`,
                }}
                whileHover={{ x: 4 }}
              >
                {/* Dot */}
                <div
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    background:
                      i === trackIndex ? t.color : "rgba(255,255,255,0.15)",
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-medium truncate"
                    style={{
                      color:
                        i === trackIndex ? t.accent : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {t.title}
                  </p>
                  <p className="text-[10px] text-neutral-500 truncate">
                    {t.artist}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-neutral-600 shrink-0">
                  {formatTime(t.duration)}
                </span>

                {/* Playing bars animation */}
                {i === trackIndex && isPlaying && (
                  <div className="flex items-end gap-[2px] shrink-0 h-4">
                    {[1, 2, 3].map((b) => (
                      <motion.div
                        key={b}
                        className="w-[2px] rounded-full"
                        style={{ background: t.color }}
                        animate={{ height: ["40%", "100%", "40%"] }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: b * 0.15,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
