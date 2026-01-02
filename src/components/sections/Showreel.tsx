'use client';

/**
 * SHOWREEL SECTION
 * Featured video with premium cinematic styling - NO THUMBNAILS
 */

import { useRef, useState } from 'react';
import { getFeaturedProject } from '@/data/projects';

export default function Showreel() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const featuredProject = getFeaturedProject();

    const handlePlayClick = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
    };

    if (!featuredProject) return null;

    return (
        <section ref={sectionRef} className="section py-32" id="work">
            <div className="container">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="text-caption text-amber-400 block mb-4 tracking-[0.2em]">
                        Featured Work
                    </span>
                    <h2 className="heading-lg text-white">
                        {featuredProject.title}
                    </h2>
                </div>

                {/* Video Container - NO THUMBNAILS, JUST VIDEO */}
                <div
                    className="relative rounded-2xl overflow-hidden cursor-pointer group border border-purple-500/20"
                    onClick={handlePlayClick}
                    style={{ aspectRatio: '16/9' }}
                >
                    {/* Video - ALWAYS VISIBLE */}
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        src={featuredProject.videoUrl}
                        loop
                        playsInline
                        onEnded={handleVideoEnd}
                    />

                    {/* Play Overlay */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                            }`}
                    >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-[#030014]/30 to-transparent" />

                        {/* Play Button */}
                        <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 ml-1 text-white"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>

                        {/* Project Info */}
                        <div className="absolute bottom-8 left-8 right-8">
                            <span className="text-sm uppercase tracking-widest text-amber-400 block mb-2">
                                {featuredProject.category.replace('-', ' ')}
                            </span>
                            <p className="text-lg text-purple-200/80 max-w-xl">
                                {featuredProject.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Duration Badge */}
                {featuredProject.duration && (
                    <div className="mt-6 text-center">
                        <span className="text-sm text-purple-300/60">
                            Duration: {featuredProject.duration}
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
}
