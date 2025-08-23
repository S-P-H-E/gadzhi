// import { Libre_Baskerville } from "next/font/google"

// Navigation
const nav = [
    {
        id: 'benefits',
        title: 'Benefits',
    },
    {
        id: 'about-us',
        title: 'About Us',
    }
]

// Hero Font
// const h1 = Libre_Baskerville({
//     weight: ["400"],
//     variable: "--font-libre",
//     subsets: ["latin"],
// });

export { nav }

// * Notes
/* Explaining 'bottom top':
    - the "bottom" refers to the elements position
    - the "top" refers to the viewport's position
   So, once the 'bottom' of the 'nav' hits the 'top'
   of the viewport, the animation will begin.
*/