"use client"
import { useState } from "react";

interface InputTypes {
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
}

export const InputComponent = ({placeholder, onChange }: InputTypes) => {
  const [content, setContent] = useState(""); // we will actually use it

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-2xl">
        <textarea
          placeholder={placeholder}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            onChange?.(e.target.value);
          }}
          className="w-full
            max-w-full sm:max-w-lg md:max-w-xl
            h-40 sm:h-56 md:h-72
            p-2 sm:p-3
            border-2 border-black dark:border-white
            rounded-lg
            resize-none
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 mb-10"
        />
      </div>
    </div>
  );
};
