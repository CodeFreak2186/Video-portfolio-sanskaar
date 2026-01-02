'use client';

/**
 * CAMERA LENS 3D OBJECT
 * Low-poly camera lens that floats in the hero section
 * Uses useFrame for animation (GSAP controls camera, not this)
 */

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

interface CameraLensProps {
    mousePosition: { x: number; y: number };
}

export default function CameraLens({ mousePosition }: CameraLensProps) {
    const groupRef = useRef<Group>(null);
    const lensRef = useRef<Mesh>(null);
    const ringRef = useRef<Mesh>(null);

    // Subtle floating animation + mouse parallax
    useFrame((state) => {
        if (!groupRef.current) return;

        const time = state.clock.getElapsedTime();

        // Floating motion
        groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
        groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;

        // Mouse parallax (subtle)
        groupRef.current.rotation.x = mousePosition.y * 0.1;
        groupRef.current.rotation.z = mousePosition.x * 0.05;

        // Inner lens rotation
        if (lensRef.current) {
            lensRef.current.rotation.z = time * 0.2;
        }

        // Ring pulse
        if (ringRef.current) {
            const scale = 1 + Math.sin(time * 2) * 0.02;
            ringRef.current.scale.set(scale, scale, 1);
        }
    });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {/* Outer Ring */}
            <mesh ref={ringRef} position={[0, 0, 0]}>
                <torusGeometry args={[1.2, 0.08, 16, 48]} />
                <meshStandardMaterial
                    color="#c9a55c"
                    metalness={0.8}
                    roughness={0.2}
                    emissive="#c9a55c"
                    emissiveIntensity={0.1}
                />
            </mesh>

            {/* Lens Body */}
            <mesh position={[0, 0, 0.1]}>
                <cylinderGeometry args={[1, 1.1, 0.4, 32]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.9}
                    roughness={0.3}
                />
            </mesh>

            {/* Inner Lens (Glass) */}
            <mesh ref={lensRef} position={[0, 0, 0.25]}>
                <circleGeometry args={[0.85, 32]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    metalness={0.3}
                    roughness={0.1}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Aperture Blades (simplified) */}
            {[...Array(8)].map((_, i) => (
                <mesh
                    key={i}
                    position={[0, 0, 0.26]}
                    rotation={[0, 0, (Math.PI * 2 * i) / 8]}
                >
                    <planeGeometry args={[0.3, 0.08]} />
                    <meshStandardMaterial color="#2a2a2a" />
                </mesh>
            ))}

            {/* Center Reflection */}
            <mesh position={[0, 0, 0.27]}>
                <circleGeometry args={[0.15, 16]} />
                <meshStandardMaterial
                    color="#c9a55c"
                    emissive="#c9a55c"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.6}
                />
            </mesh>

            {/* Focus Ring */}
            <mesh position={[0, 0, -0.15]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.15, 0.04, 8, 48]} />
                <meshStandardMaterial
                    color="#333333"
                    metalness={0.7}
                    roughness={0.4}
                />
            </mesh>
        </group>
    );
}
