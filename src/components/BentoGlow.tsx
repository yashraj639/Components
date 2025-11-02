import { Maximize2, MousePointerClick, RefreshCw } from "lucide-react";

export default function BentoGlow() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <div className="relative rounded-3xl p-8 bg-linear-to-b from-neutral-900 to-black border border-neutral-800 shadow-2xl overflow-hidden row-span-2">
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-blue-500/30 via-indigo-500/20 to-transparent blur-3xl" />

          <div className="relative z-10 flex flex-col h-full text-white">
            <div className="h-14 w-14 bg-neutral-800/50 rounded-full flex items-center justify-center mb-6 border border-neutral-700">
              <Maximize2 size={28} className="text-neutral-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Build workflows
              <br />
              that work for you
            </h3>
            <p className="text-neutral-400 text-sm mb-auto leading-relaxed">
              Create, customize, and launch powerful automations without writing
              a single line of code.
            </p>
            <button className="text-white flex items-center gap-2 hover:gap-3 transition-all mt-8 font-medium">
              Learn More →
            </button>
          </div>
        </div>

        <div className="relative rounded-3xl p-8 bg-linear-to-b from-neutral-900 to-black border border-neutral-800 shadow-2xl overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-cyan-500/30 via-blue-500/20 to-transparent blur-3xl" />

          <div className="relative z-10 flex flex-col h-full text-white">
            <div className="h-14 w-14 bg-neutral-800/50 rounded-full flex items-center justify-center mb-6 border border-neutral-700">
              <MousePointerClick size={28} className="text-neutral-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Integrate with
              <br />
              anything
            </h3>
            <p className="text-xs text-neutral-400 mb-auto">
              Connect with over 200+ tools — from Google Workspace to Slack,
              Notion, Trello, and more.
            </p>
            <button className="text-white flex items-center gap-2 hover:gap-3 transition-all mt-6 font-medium text-sm">
              Learn More →
            </button>
          </div>
        </div>

        <div className="relative rounded-3xl p-8 bg-linear-to-b from-neutral-900 to-black border border-neutral-800 shadow-2xl overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-indigo-500/30 via-purple-500/20 to-transparent blur-3xl" />

          <div className="relative z-10 flex items-center gap-6 text-white h-full">
            <div className="h-14 w-14 bg-neutral-800/50 rounded-full flex items-center justify-center border border-neutral-700 shrink-0">
              <RefreshCw size={28} className="text-neutral-300" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-3">
                Automate the
                <br />
                boring stuff
              </h3>
              <button className="text-white flex items-center gap-2 hover:gap-3 transition-all font-medium text-sm">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
