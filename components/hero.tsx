import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Image from "next/image";
import gsap from 'gsap'
import Link from "next/link";

export default function Hero() {
    useGSAP(() => {
        const heroSplit = new SplitText('#title', { type: 'chars, words'})
        const paragraphSplit = new SplitText('#paragraph', { type: 'lines'})

        // heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))
        gsap.from(heroSplit.chars, {
            opacity: 0,
            yPercent: 50,
            duration: 2,
            ease: 'expo.out',
            stagger: 0.05
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 2,
            ease: 'expo.out',
            stagger: 0.07,
            delay: 1,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('#right-stick', { y: 200 }, 0)
        .to('#left-stick', { y: -200 }, 0)
    }, [])

    return (
        <>
            <section id="hero" className="flex flex-col items-center min-h-dvh z-10">
                <h1 id="title" className="text-8xl md:text-[9vw] mt-48 md:mt-32 text-center md:w-[60vw] font-semibold">PRIVATE MEMBERS</h1>

                <Image id="left-stick" className="absolute left-0 top-[400px] opacity-90" src='/hero-left-stick.png' alt="hero left stick" width={100} height={100}/>
                <Image id="right-stick" className="absolute right-0 top-[200px] opacity-90" src='/hero-right-stick.png' alt="hero right stick" width={100} height={100}/>

                <div className="absolute bottom-0 left-0 p-20 space-y-2">
                    <p id="title" className="text-lg text-description">For. Modern. Gents</p>
                    <p id="paragraph" className="text-5xl">The private club <br /> for modern gentlemen.</p>
                </div>

                <div className="absolute hidden md:block md:bottom-20 lg:bottom-0 right-0 p-20 space-y-4">
                    <p id="paragraph" className="text-xl max-w-xs text-description">Gain knowledge that isn't found in other networks and cultivate relationships that last a life-time.</p>
                    <Link href="#benefits" className="font-semibold md:hover:underline">Learn More</Link>
                </div>
            </section>
        </>
    )
}