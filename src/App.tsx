import { Features } from "./components/features";
import RetroMusicPlayer from "./components/RetroMusicPlayer";

export default function App() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-neutral-900">
        <div className="w-full h-full flex items-center justify-center">
          <Features />
        </div>
      </div>
    </>
  );
}
