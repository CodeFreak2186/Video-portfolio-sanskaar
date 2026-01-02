'use client';

/**
 * PROJECT CARD COMPONENT
 * Premium card with Google Drive iframe embed
 */

import { useState } from 'react';
import { Project, categoryLabels } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="group">
            {/* Media Container */}
            <div
                className="relative overflow-hidden rounded-2xl border border-purple-500/20 group-hover:border-amber-400/40 transition-colors duration-300 cursor-pointer"
                style={{ aspectRatio: '16/9' }}
                onMouseEnter={() => setShowVideo(true)}
                onMouseLeave={() => setShowVideo(false)}
            >
                {/* Thumbnail or Video */}
                {showVideo ? (
                    <iframe
                        src={project.videoUrl}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        style={{ border: 'none' }}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-amber-900/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 ml-1 text-white"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                )}

                {/* Hover label */}
                <div className={`absolute bottom-4 left-4 right-4 transition-opacity duration-300 ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="text-sm font-medium text-amber-400">
                        Hover to play →
                    </span>
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
                {project.duration && (
                    <span className="text-xs text-purple-300/40 mt-2 block">
                        {project.duration}
                    </span>
                )}
            </div>
        </div>
    );
}
