import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Footer() {
    useGSAP(()=> {
        gsap.ticker.lagSmoothing(0)

        gsap.to('#footer', {
            y: -1000,
            duration: 10,
            scrollTrigger: {
                trigger: '#footer',
                start: "top bottom",
                scrub: true
            }
        })
    }, [])

    return (
        <div id="footer" className="absolute z-10 overflow-hidden p-10 w-full bg-white text-black">
            <div className="flex-col-center h-[100svh] gap-10">
                <h1  className="text-7xl md:text-[9vw] font-semibold text-center">Join the private network.</h1>
                <button className="bg-black text-white px-8 py-4 rounded-2xl cursor-pointer text-2xl transition-all duration-300 md:hover:scale-110">Apply Now</button>
            </div>
            <div id="apply-now" className="flex-center">
                <p>©2025 Sphe. All rights reserved.</p>
            </div>
        </div>
    )
}