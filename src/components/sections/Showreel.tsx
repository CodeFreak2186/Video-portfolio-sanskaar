'use client';

/**
 * SHOWREEL SECTION
 * Featured video with Google Drive iframe embed
 */

import { useRef } from 'react';
import { getFeaturedProject } from '@/data/projects';

export default function Showreel() {
    const sectionRef = useRef<HTMLElement>(null);

    const featuredProject = getFeaturedProject();

    if (!featuredProject) return null;

    return (
        <section ref={sectionRef} className="section py-32" id="work">
            <div className="container">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="text-sm uppercase tracking-[0.2em] text-amber-400 block mb-4">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white">
                        {featuredProject.title}
                    </h2>
                </div>

                {/* Video Container - Google Drive Iframe */}
                <div
                    className="relative rounded-2xl overflow-hidden border border-purple-500/20"
                    style={{ aspectRatio: '16/9' }}
                >
                    <iframe
                        src={featuredProject.videoUrl}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        style={{ border: 'none' }}
                    />
                </div>

                {/* Project Info */}
                <div className="mt-8 text-center">
                    <span className="text-sm uppercase tracking-widest text-amber-400 block mb-2">
                        {featuredProject.category.replace('-', ' ')}
                    </span>
                    <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
                        {featuredProject.description}
                    </p>
                    {featuredProject.duration && (
                        <span className="text-sm text-purple-300/60 block mt-4">
                            Duration: {featuredProject.duration}
                        </span>
                    )}
                </div>
            </div>
        </section>
    );
}
