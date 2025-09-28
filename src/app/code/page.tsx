"use client";
import { CodeEditor } from "@/components/merge/CodeEditor";

import { Dock } from "@/components/merge/Dock";
import { useRef } from "react";

import { HomeButton } from "@/components/ui/HomeButton";
export default function CodePage() {
  const editorRef = useRef<HTMLDivElement>(null);

  return (
    <>
  <HomeButton/>

       <div className=" mt-14 flex flex-col min-h-screen bg-gray-50 dark:bg-zinc-950">
      {/* Editor */}

      <div className="flex justify-center items-start w-full p-2 sm:p-4 md:p-6 flex-1">
        <CodeEditor editorRef={editorRef} />
      </div>

      {/* Dock */}
      <Dock editorRef={editorRef} />
    </div>
    </>
  );
}
