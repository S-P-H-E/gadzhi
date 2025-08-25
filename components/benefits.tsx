import { benefits, images } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { SplitText } from "gsap/all";

export default function Benefits() {
    const imgRef = useRef<HTMLImageElement>(null)

    useGSAP(() => {
        gsap.ticker.lagSmoothing(0)

        const subSplit = new SplitText('#sub2', { type: 'chars, words', mask: 'chars'})
        const paragraphSplit = new SplitText('#text', { type: 'lines', mask: 'lines'})

        gsap.from(subSplit.chars, {
            color: '#b95a2c',
            opacity: 0,
            duration: 2,
            ease: 'expo.out',
            stagger: 0.05,
            scrollTrigger: {
                trigger: subSplit.chars,
                start: "top bottom",
            }
        })

        gsap.from(paragraphSplit.lines, {
            color: '#b95a2c',
            opacity: 0,
            yPercent: 100,
            duration: 2,
            ease: 'expo.out',
            stagger: 0.07,
            scrollTrigger: {
                trigger: subSplit.chars,
                start: "top bottom",
            }
        })

        const images = gsap.utils.toArray(imgRef.current!.children) as Element[]

        images.forEach((image) => {
            gsap.fromTo(image,{
                x: -600,
            }, {
                x: 0,
                scrollTrigger: {
                    trigger: image,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                },
                ease: "power1.inOut"
            });
        });
    })
    return (
        <section id="benefits">
            <div ref={imgRef} className="flex gap-12 overflow-hidden">
                <div />
                {images.map((img, i) => (
                    <Image key={i} src={img} className="rounded-2xl w-[300px] h-[300px] object-cover" alt={img} width={300} height={300}/>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 p-20">
                <div className="space-y-4">
                    <p id="text" className="text-description text-xl max-w-xs">Our members cover 6 continents and all share a love for travel, wherever you are in the world we can guarantee that you will find a fellow “gent” to connect with. Real belonging awaits…</p>
                </div>
                <div className="space-y-4">
                    <h1 id="sub2" className="text-2xl font-semibold">What's Included?</h1>
                    {benefits.map((b, i) => (
                        <div key={i} className="flex gap-2 items-center">
                            <p id="text" className="text-xl text-description">- {b}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    )
}