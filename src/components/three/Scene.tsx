'use client';

/**
 * THREE.JS SCENE - SUBTLE AMBIENT PARTICLES
 * A dark, ambient floating particles scene that doesn't interfere with content
 */

import { useRef, useEffect, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SceneProps {
    className?: string;
}

// Floating ambient particles - subtle and dark
function AmbientParticles() {
    const particlesRef = useRef<THREE.Points>(null);
    const particleCount = 80;

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
        }
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, []);

    useFrame((state) => {
        if (!particlesRef.current) return;
        const time = state.clock.getElapsedTime();
        particlesRef.current.rotation.y = time * 0.02;
        particlesRef.current.rotation.x = Math.sin(time * 0.05) * 0.05;
    });

    return (
        <points ref={particlesRef} geometry={geometry}>
            <pointsMaterial
                color="#a78bfa"
                size={0.03}
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
}

// Floating small dots - very subtle
function FloatingDots() {
    const dotsRef = useRef<THREE.Points>(null);
    const dotCount = 40;

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(dotCount * 3);
        for (let i = 0; i < dotCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
        }
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, []);

    useFrame((state) => {
        if (!dotsRef.current) return;
        const time = state.clock.getElapsedTime();
        dotsRef.current.rotation.y = -time * 0.015;
    });

    return (
        <points ref={dotsRef} geometry={geometry}>
            <pointsMaterial
                color="#fbbf24"
                size={0.02}
                transparent
                opacity={0.3}
                sizeAttenuation
            />
        </points>
    );
}

// Subtle glow sphere in background
function BackgroundGlow() {
    const glowRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!glowRef.current) return;
        const time = state.clock.getElapsedTime();
        const scale = 1 + Math.sin(time * 0.2) * 0.05;
        glowRef.current.scale.setScalar(scale);
    });

    return (
        <mesh ref={glowRef} position={[3, 2, -12]}>
            <sphereGeometry args={[2, 16, 16]} />
            <meshBasicMaterial
                color="#a78bfa"
                transparent
                opacity={0.08}
            />
        </mesh>
    );
}

// Second subtle glow
function BackgroundGlow2() {
    const glowRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!glowRef.current) return;
        const time = state.clock.getElapsedTime();
        const scale = 1 + Math.sin(time * 0.3 + 1) * 0.05;
        glowRef.current.scale.setScalar(scale);
    });

    return (
        <mesh ref={glowRef} position={[-4, -2, -15]}>
            <sphereGeometry args={[2.5, 16, 16]} />
            <meshBasicMaterial
                color="#fbbf24"
                transparent
                opacity={0.05}
            />
        </mesh>
    );
}

export default function Scene({ className }: SceneProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [blurAmount, setBlurAmount] = useState(0);

    // Blur on scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const blurStart = windowHeight * 0.2;
            const blurEnd = windowHeight * 0.8;

            if (scrollY <= blurStart) {
                setBlurAmount(0);
            } else if (scrollY >= blurEnd) {
                setBlurAmount(10);
            } else {
                const progress = (scrollY - blurStart) / (blurEnd - blurStart);
                setBlurAmount(progress * 10);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`fixed inset-0 z-0 ${className ?? ''}`}
            style={{
                pointerEvents: 'none',
                filter: `blur(${blurAmount}px)`,
                transition: 'filter 0.15s ease-out'
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            >
                <Suspense fallback={null}>
                    {/* Very dim ambient light */}
                    <ambientLight intensity={0.1} />

                    {/* Background glows */}
                    <BackgroundGlow />
                    <BackgroundGlow2 />

                    {/* Subtle particles */}
                    <AmbientParticles />
                    <FloatingDots />
                </Suspense>
            </Canvas>
        </div>
    );
}
