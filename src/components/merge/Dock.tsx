"use client"
import { LanguageSelector } from "@/components/ui/LangugeSelector";
import { ThemeSelector } from "../ui/ThemeSelector";
import { FontSizeSelector } from "../ui/FontSelector";
import { Toggle } from "../ui/Toggle";
import { useWrap } from "@/hooks/useWrap";
import { BgSelector } from "../ui/bgSelector";
import { useBgToggle } from "@/hooks/useBgtoggle";
import { CopyandDownload } from "../ui/download";

import { DarkButton } from "../ui/darkButton";

interface DockProps {
  editorRef: React.RefObject<HTMLDivElement|null>;
}

export const Dock = ({ editorRef }: DockProps) => {
  const { wrap, setWrap } = useWrap();
  const { bgToggle, setBgtoggle } = useBgToggle();

  return (
    <div
      className={`
          fixed bottom-0 left-1/2 transform -translate-x-1/2
        w-[95%] sm:w-[90%] md:w-[85%] lg:w-[98%] max-w-[1180px]
        p-4 sm:p-6 rounded-[10px]
        flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-4
        max-h-[60vh] sm:max-h-[50vh] md:max-h-[40vh] overflow-y-auto
        shadow-[20px_20px_40px_-6px_rgba(0,0,0,0.2)]
        bg-white/25 dark:bg-black/25
        backdrop-blur-[4.5px] dark:backdrop-blur-[4.5px]
        border border-black/20 dark:border-white/40
      `}
    >
      {/* BG Gradient */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-900 dark:text-gray-200">BG Gradient</p>
        <BgSelector />
      </div>

      {/* Language */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-900 dark:text-gray-200">Language</p>
        <LanguageSelector />
      </div>

      {/* Theme */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-900 dark:text-gray-200">Themes</p>
        <ThemeSelector />
      </div>

      {/* Font */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-900 dark:text-gray-200">Fonts</p>
        <FontSizeSelector />
      </div>

      {/* Wrap Lines */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-900 dark:text-gray-200">Wrap Lines</p>
        <Toggle checked={wrap} onToggle={(val) => setWrap(val)} />
      </div>

      {/* BG Toggle */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-900 dark:text-gray-200">BG background</p>
        <Toggle checked={bgToggle} onToggle={(val) => setBgtoggle(val)} />
      </div>

      {/* Copy/Download */}
      <div className="flex flex-col items<CopyandDownload targetRef={editorRef} />-center gap-2">
        <p className="text-sm text-gray-900 dark:text-gray-200">Copy/Download</p>
        <CopyandDownload targetRef={editorRef} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-900 dark:text-gray-200">Dark/Light Mode</p>
        <DarkButton/>
      </div>
    </div>
  );
};
