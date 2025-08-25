import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Image from "next/image";
import gsap from 'gsap'
import Link from "next/link";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null)

    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {
        gsap.ticker.lagSmoothing(0)
        
        const heroSplit = new SplitText('#letter', { type: 'chars, words', mask: 'chars'})
        const subSplit = new SplitText('#sub', { type: 'chars, words', mask: 'chars'})
        const paragraphSplit = new SplitText('#paragraph', { type: 'lines'})

        // heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))
        gsap.from(heroSplit.chars, {
            color: '#b95a2c',
            opacity: 0,
            yPercent: 50,
            duration: 2,
            ease: 'expo.out',
            stagger: 0.05
        })

        gsap.from(subSplit.chars, {
            color: '#b95a2c',
            opacity: 0,
            duration: 2,
            ease: 'expo.out',
            stagger: 0.05
        })

        gsap.from(paragraphSplit.lines, {
            color: '#b95a2c',
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

        gsap.to('#vid', { opacity: 1, duration: 4 })

        const startValue = isMobile ? 'top 50%' : 'center 60%'
        const endValue = isMobile ? '120% top' : 'bottom top'

        if (videoRef.current) {
            const video = videoRef.current;
            if (!video) return;

            // Force reload to ensure metadata triggers
            video.src = video.src; 
            video.load();
          
            const onLoad = () => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: video,
                  start: startValue,
                  end: endValue,
                  scrub: true,
                  pin: true,
                }
              });
              tl.to(video, { currentTime: video.duration });
              tl.to(video, { opacity: 0, duration: 0.2 }, ">-0.1");
          
              // clean up
              video.removeEventListener('loadedmetadata', onLoad);
            };
            video.addEventListener('loadedmetadata', onLoad);
        }               

    }, [])

    return (
        <>
            <section id="hero" className="flex flex-col items-center min-h-dvh z-10">
                <h1 id="letter" className="text-7xl md:text-[9vw] mt-48 md:mt-24 text-center md:w-[60vw] font-semibold">PRIVATE MEMBERS</h1>

                <Image id="left-stick" className="absolute left-0 top-[400px] opacity-90" src='/hero-left-stick.png' alt="hero left stick" width={100} height={100}/>
                <Image id="right-stick" className="absolute right-0 top-[50px] md:top-[200px] opacity-90" src='/hero-right-stick.png' alt="hero right stick" width={100} height={100}/>

                <div className="absolute bottom-0 left-0 p-20 space-y-2">
                    <p id="sub" className="text-lg text-description">For. Modern. Gents</p>
                    <p id="paragraph" className="text-5xl">The private club <br /> for modern gentlemen.</p>
                </div>

                <div className="absolute hidden md:block md:bottom-20 lg:bottom-0 right-0 p-20 space-y-4">
                    <p id="paragraph" className="text-xl max-w-xs text-description">Gain knowledge that isn't found in other networks and cultivate relationships that last a life-time.</p>
                    <Link href="#benefits" className="font-semibold md:hover:underline">
                        <p id="sub">Learn More</p>
                    </Link>
                </div>
            </section>

            <div id="vid" className="opacity-0 -z-10 inset-0 md:h-[80%] h-1/2 fixed w-fit my-auto mx-auto">
                <video ref={videoRef} src="/output.mp4" muted playsInline preload="auto"/>
            </div>
        </>
    )
}