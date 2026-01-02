'use client';

/**
 * GSAP PROVIDER
 * Registers GSAP plugins and provides smooth scrolling via Lenis
 * Must wrap the entire app for ScrollTrigger to work
 */

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

interface GSAPProviderProps {
    children: ReactNode;
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // Initialize Lenis smooth scroll
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        });

        // Sync Lenis with GSAP ScrollTrigger
        lenisRef.current.on('scroll', ScrollTrigger.update);

        // Use GSAP ticker for smooth animation frame updates
        gsap.ticker.add((time) => {
            lenisRef.current?.raf(time * 1000);
        });

        // Disable GSAP's lag smoothing for better sync
        gsap.ticker.lagSmoothing(0);

        // Cleanup on unmount
        return () => {
            lenisRef.current?.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            gsap.ticker.remove((time) => {
                lenisRef.current?.raf(time * 1000);
            });
        };
    }, []);

    return <>{children}</>;
}
