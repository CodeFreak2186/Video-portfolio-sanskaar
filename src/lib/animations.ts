/**
 * GSAP ANIMATION LIBRARY
 * Reusable animation timelines for cinematic effects
 * 
 * Design Philosophy:
 * - GSAP controls all animations (not React state)
 * - Animations are timeline-based for precise control
 * - All functions return cleanup handlers
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins (call once in provider)
export const registerGSAPPlugins = () => {
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
};

/**
 * Hero Title Animation
 * Film-style title sequence with character-by-character reveal
 */
export const createHeroTimeline = (
    container: HTMLElement,
    options?: { delay?: number }
) => {
    const tl = gsap.timeline({
        delay: options?.delay ?? 0.5,
    });

    // Fade in the background/3D scene
    tl.from(container.querySelector('.hero-scene'), {
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
    });

    // Animate title letters
    tl.from(
        container.querySelectorAll('.hero-title .char'),
        {
            y: '100%',
            opacity: 0,
            rotateX: -90,
            stagger: 0.03,
            duration: 1,
            ease: 'power3.out',
        },
        '-=0.5'
    );

    // Animate subtitle
    tl.from(
        container.querySelector('.hero-subtitle'),
        {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
        },
        '-=0.3'
    );

    // Animate scroll indicator
    tl.from(
        container.querySelector('.scroll-indicator'),
        {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: 'power2.out',
        },
        '-=0.2'
    );

    return tl;
};

/**
 * Text Reveal Animation
 * Slide-up reveal for headings
 */
export const createTextReveal = (
    element: HTMLElement,
    options?: {
        trigger?: HTMLElement;
        start?: string;
        scrub?: boolean | number;
    }
) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: options?.trigger ?? element,
            start: options?.start ?? 'top 80%',
            end: 'bottom 20%',
            scrub: options?.scrub ?? false,
            toggleActions: 'play none none reverse',
        },
    });

    tl.from(element, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    });

    return tl;
};

/**
 * Stagger Reveal Animation
 * For grids and lists
 */
export const createStaggerReveal = (
    elements: HTMLElement[] | NodeListOf<Element>,
    options?: {
        trigger?: HTMLElement;
        start?: string;
        stagger?: number;
    }
) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: options?.trigger ?? elements[0],
            start: options?.start ?? 'top 80%',
            toggleActions: 'play none none reverse',
        },
    });

    tl.from(elements, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: options?.stagger ?? 0.15,
        ease: 'power3.out',
    });

    return tl;
};

/**
 * Project Card Expand Animation
 * Cinematic expansion when clicking a project
 */
export const createProjectExpand = (
    card: HTMLElement,
    overlay: HTMLElement,
    onComplete?: () => void
) => {
    const rect = card.getBoundingClientRect();
    const tl = gsap.timeline({
        onComplete,
    });

    // Clone card position to overlay
    gsap.set(overlay, {
        position: 'fixed',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        zIndex: 1000,
    });

    // Expand to fullscreen
    tl.to(overlay, {
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        duration: 0.8,
        ease: 'power3.inOut',
    });

    return tl;
};

/**
 * Parallax Effect
 * Subtle depth movement on scroll
 */
export const createParallax = (
    element: HTMLElement,
    options?: {
        speed?: number;
        trigger?: HTMLElement;
    }
) => {
    const speed = options?.speed ?? 0.5;

    gsap.to(element, {
        y: () => window.innerHeight * speed * -1,
        ease: 'none',
        scrollTrigger: {
            trigger: options?.trigger ?? element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    });
};

/**
 * Video Scale Animation
 * Showreel cinematic scale effect
 */
export const createVideoScale = (
    videoContainer: HTMLElement,
    options?: {
        startScale?: number;
        endScale?: number;
    }
) => {
    const startScale = options?.startScale ?? 0.8;
    const endScale = options?.endScale ?? 1;

    gsap.fromTo(
        videoContainer,
        { scale: startScale, opacity: 0 },
        {
            scale: endScale,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: videoContainer,
                start: 'top 80%',
                end: 'center center',
                scrub: 1,
            },
        }
    );
};

/**
 * Skills Bar Animation
 * Timeline bars that fill on scroll
 */
export const createSkillBars = (
    container: HTMLElement,
    skills: { name: string; level: number }[]
) => {
    const bars = container.querySelectorAll('.skill-bar-fill');

    bars.forEach((bar, index) => {
        gsap.fromTo(
            bar,
            { scaleX: 0 },
            {
                scaleX: skills[index]?.level ?? 0.8,
                transformOrigin: 'left center',
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    });
};

/**
 * Magnetic Button Effect
 * Subtle follow cursor on hover
 */
export const createMagneticButton = (button: HTMLElement) => {
    const strength = 0.3;

    const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
            x: x * strength,
            y: y * strength,
            duration: 0.3,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
        });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    // Return cleanup function
    return () => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
    };
};

/**
 * Camera Scroll Animation (for Three.js)
 * Returns scroll progress for camera movement
 */
export const createCameraScroll = (
    onUpdate: (progress: number) => void,
    options?: {
        trigger?: HTMLElement;
        start?: string;
        end?: string;
    }
) => {
    ScrollTrigger.create({
        trigger: options?.trigger ?? document.body,
        start: options?.start ?? 'top top',
        end: options?.end ?? '50% top',
        scrub: 1,
        onUpdate: (self) => {
            onUpdate(self.progress);
        },
    });
};

/**
 * Cleanup all ScrollTriggers
 * Call on component unmount
 */
export const killScrollTriggers = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
