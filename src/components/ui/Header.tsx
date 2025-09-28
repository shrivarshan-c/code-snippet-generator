"use client";
import { DarkButton } from "@/components/ui/darkButton";

export const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50
      flex items-center justify-between w-[90%] max-w-4xl
      rounded-2xl bg-white/10 dark:bg-black/40
      backdrop-blur-md border border-white/20 px-6 py-3 shadow-lg">


      <h1 className="cursor-pointer text-xl font-extrabold tracking-wide text-black dark:text-white">
        Snappify
      </h1>


      <DarkButton/>
    </nav>
  );
};
