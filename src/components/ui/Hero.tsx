"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Navbar } from "./Header";

export const Hero = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const bRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!h1Ref.current || !pRef.current) return;

    // Split h1 into words
    const words = h1Ref.current.textContent?.split(" ") || [];
    h1Ref.current.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block opacity-0 mr-2 neon-word">${word}</span>`
      )
      .join(" ");

    const h1Spans = h1Ref.current.querySelectorAll("span");

    // Animate heading words
    gsap.fromTo(
      h1Spans,
      { y: 50, opacity: 0, scale: 0.8, rotate: -30 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Animate subtitle
    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        delay: words.length * 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Animate button
    gsap.fromTo(
      bRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        delay: words.length * 0.2 + 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center w-screen h-screen
        bg-white dark:bg-black px-4 text-center transition-colors duration-500">

        {/* Heading */}
        <h1
          ref={h1Ref}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight
          text-black dark:text-white font-mono transition-colors duration-500"
          style={{ lineHeight: 1.2 }}
        >
          Glow Up Your Code
        </h1>

        {/* Subtitle */}
        <p
          ref={pRef}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold font-sans
          text-gray-700 dark:text-amber-200 transition-colors duration-500"
        >
          From plain text to stunning, shareable code in seconds
        </p>

        {/* Button */}
        <Link href="/code">
          <button
            ref={bRef}
            className="mt-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px]
            focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-slate-50 dark:focus:ring-offset-black"
          >

            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
              bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center
              rounded-full bg-black text-white dark:bg-white dark:text-black
              px-6 py-2 text-lg font-semibold backdrop-blur-3xl transition-colors duration-500"
            >
              🚀 Get Started
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};
