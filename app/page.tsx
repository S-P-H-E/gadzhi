"use client"
import Benefits from "@/components/benefits";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <main>
      <ReactLenis root />

      <Navbar />
      <Hero />
      <Benefits />
      <Footer />
    </main>
  );
}
