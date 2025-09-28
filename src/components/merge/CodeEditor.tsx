"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as prismThemes from "react-syntax-highlighter/dist/esm/styles/prism";

import { InputComponent } from "../ui/InputComponent";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";

import { useWrap } from "@/hooks/useWrap";
import { useFonts } from "@/hooks/useFont";
import { useBg } from "@/hooks/useBg";

import {useBgToggle} from "@/hooks/useBgtoggle";



interface CodeEditorProps {
    editorRef: React.RefObject<HTMLDivElement|null>; // receive ref
  }


export const CodeEditor = ({editorRef}:CodeEditorProps) => {
  const [code, setCode] = useState<string>("");

  const { language } = useLanguage();
  const { theme } = useTheme();
  const {wrap} = useWrap();
  const {fontSize}= useFonts();
  const {bg} = useBg();
  const {bgToggle} = useBgToggle();


//   const {bgToggle,setBgtoggle} = useBgToggle();

  // Map string theme → hljs object
  const themeObject =
    prismThemes[theme as keyof typeof prismThemes] || prismThemes["okaidia"];

  return (
    <div className="flex flex-col">
      {/* Input box */}
      <InputComponent
        type="text"
        placeholder="Paste Your Code Snippet"
        onChange={(e) => setCode(e)} // ✅ safer
      />


      <div className="relative p-2"
       ref={editorRef}
       style={{
        background:bgToggle?bg:"transparent"
      }}>
        {/* 3 traffic-light dots */}
        <div className="flex items-center space-x-2 mt-1 absolute left-3 top-2 z-10 px-3 py-4">
          <span className="w-[9px] h-[9px] rounded-full bg-red-500"></span>
          <span className="w-[9px] h-[9px] rounded-full bg-yellow-500"></span>
          <span className="w-[9px] h-[9px] rounded-full bg-green-500"></span>
        </div>

        {/* Code block */}

        <SyntaxHighlighter
          language={language || "javascript"}
          style={themeObject}
          customStyle={{
            fontSize:fontSize||"16px",
            borderRadius: "8px",
            padding: "45px 35px 30px 10px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
            overflow: "hidden",
            opacity: 0.87,


          }}
          wrapLongLines={wrap}
          showLineNumbers={wrap}

        >

          {code ||
            `import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
