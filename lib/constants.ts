// Navigation
const nav = [
    {
        id: 'benefits',
        title: 'Benefits',
    },
    {
        id: 'apply-now',
        title: 'Apply Now',
    }
]

// Benefits
const benefits = ['MEET YOUR BROTHERS', 'PRIVATE RESEARCH TEAM', 'THE PORTAL TO INTO GCC']

const images = [
    '/benefits/01.jpg',
    '/benefits/02.jpg',
    '/benefits/03.jpg',
    '/benefits/04.jpg',
    '/benefits/01.jpg',
    '/benefits/02.jpg',
    '/benefits/03.jpg',
    '/benefits/04.jpg',
]
export { nav, benefits, images }

// * Notes
/* Explaining 'bottom top':
    - the "bottom" refers to the elements position
    - the "top" refers to the viewport's position
   So, once the 'bottom' of the 'nav' hits the 'top'
   of the viewport, the animation will begin.
*/