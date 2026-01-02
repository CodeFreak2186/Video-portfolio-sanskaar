'use client';

/**
 * PROJECT CARD COMPONENT
 * Premium card - SIMPLIFIED, NO GSAP, NO THUMBNAILS
 */

import { useRef, useState } from 'react';
import { Project, categoryLabels } from '@/data/projects';
import Link from 'next/link';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Video play failed
            });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={`/projects#${project.id}`} className="block">
                {/* Media Container - VIDEO ONLY */}
                <div
                    className="relative overflow-hidden rounded-2xl border border-purple-500/20 group-hover:border-amber-400/40 transition-colors duration-300"
                    style={{ aspectRatio: '16/9' }}
                >
                    {/* Video - ALWAYS VISIBLE */}
                    <video
                        ref={videoRef}
                        src={project.videoUrl}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        preload="metadata"
                    />

                    {/* Hover Overlay */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-40'
                            }`}
                    />

                    {/* View Project Button */}
                    <div
                        className={`absolute bottom-6 left-6 right-6 flex justify-between items-end transition-all duration-300 ${isHovered
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <span className="text-sm font-medium text-amber-400">
                            View Project →
                        </span>
                        {project.duration && (
                            <span className="text-xs text-purple-300/60">
                                {project.duration}
                            </span>
                        )}
                    </div>
                </div>

                {/* Project Info */}
                <div className="pt-4">
                    <span className="text-xs uppercase tracking-widest text-amber-400 block mb-1">
                        {categoryLabels[project.category]}
                    </span>
                    <h3 className="text-xl font-medium text-white group-hover:text-amber-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-purple-300/60 mt-1 line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </Link>
        </div>
    );
}
