"use client"
import Benefits from "@/components/benefits";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
    </main>
  );
}
