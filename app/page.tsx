"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  useGSAP(() => {
    
  }, [])

  return (
    <div className="flex-col-center gap-6 h-[100dvh]">
      <h1 id="heading" className="text-6xl">Gadzhi</h1>
      <p id="paragraph">Owner, Consulting.com</p>
    </div>
  );
}
