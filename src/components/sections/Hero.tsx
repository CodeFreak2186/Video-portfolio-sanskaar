'use client';

/**
 * HERO SECTION
 * Premium cinematic intro with gradient effects and dynamic visuals
 * First impression - must be stunning and professional
 */

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Dynamic import with SSR disabled - Three.js requires browser APIs
const Scene = dynamic(() => import('../three/Scene'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 z-0" />,
});

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    const decorRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const title = titleRef.current;
        const subtitle = subtitleRef.current;
        const scrollIndicator = scrollIndicatorRef.current;
        const decor = decorRef.current;

        if (!container || !title || !subtitle || !scrollIndicator) return;

        // Set initial visibility
        setIsLoaded(true);

        // Create master timeline
        const tl = gsap.timeline({ delay: 0.3 });

        // Animate decorative element
        if (decor) {
            tl.fromTo(decor,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
            );
        }

        // Simple title fade in - no character splitting to avoid issues
        tl.fromTo(title,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
            '-=0.7'
        );

        // Animate subtitle
        tl.fromTo(subtitle,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.5'
        );

        // Animate scroll indicator
        tl.fromTo(scrollIndicator,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
            '-=0.3'
        );

        // Continuous scroll indicator bounce
        gsap.to(scrollIndicator.querySelector('.scroll-arrow'), {
            y: 8,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* 3D Scene Background */}
            <Scene className="hero-scene" />

            {/* Decorative glow ring */}
            <div
                ref={decorRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0"
            >
                <div className="w-[500px] h-[500px] rounded-full border border-purple-500/30 animate-pulse" />
                <div className="absolute w-[400px] h-[400px] rounded-full border border-amber-500/20" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container text-center">
                {/* Accent Label */}
                <span className={`inline-block text-caption text-amber-400 mb-6 tracking-[0.3em] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    CINEMATIC VIDEO EDITOR
                </span>

                {/* Title - Always visible with gradient */}
                <h1
                    ref={titleRef}
                    className="heading-xl mb-6"
                    style={{
                        background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Visual Storyteller
                </h1>

                {/* Subtitle */}
                <p
                    ref={subtitleRef}
                    className="text-lg max-w-xl mx-auto text-purple-200/80 leading-relaxed"
                >
                    Crafting cinematic experiences through the art of editing.
                    <br />
                    <span className="text-amber-400/80">Every frame tells a story.</span>
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                    <a href="#work" className="btn btn-primary">
                        View My Work
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                    <a href="/contact" className="btn">
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollIndicatorRef}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-caption text-purple-300/60">
                    Scroll to explore
                </span>
                <div className="scroll-arrow w-6 h-10 border border-purple-400/30 rounded-full flex items-start justify-center pt-2">
                    <span className="w-1 h-2 bg-amber-400 rounded-full" />
                </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030014] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#030014]/50 pointer-events-none" />
        </section>
    );
}
