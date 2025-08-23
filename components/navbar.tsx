import { nav } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        })

        navTween.fromTo('.bg-blur', {
            backgroundColor: 'transparent'
        }, {
            // Blur Background
            backgroundColor: '#00000050',
            backdropFilter: 'blur(3px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    }, [])

    return (
        <nav>
            <Link href="#home" className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-blur">
                <Image src="/logo.png" alt='logo' priority className="flex-shrink-0" width={40} height={40}/>
                <h1 className="text-3xl font-semibold">Gadzhi</h1>
            </Link>

            <div className="flex gap-6 px-4 py-2 md:py-3 rounded-2xl bg-blur">
                {nav.map((n, i) => (
                    <Link key={i} href={`#${n.id}`} className="md:hover:underline">
                        <p>{n.title}</p>
                    </Link>
                ))}
            </div>
        </nav>
    )
}