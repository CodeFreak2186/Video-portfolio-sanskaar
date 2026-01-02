'use client';

/**
 * PROJECTS SECTION
 * Premium project grid - SIMPLIFIED, NO GSAP
 */

import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
    // Filter out featured project (shown in Showreel)
    const projectsToShow = projects.filter((p) => !p.featured);

    return (
        <section className="py-32" id="projects">
            <div className="container">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="text-sm uppercase tracking-[0.2em] text-amber-400 block mb-4">
                        Selected Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white">
                        Recent{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">
                            Projects
                        </span>
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projectsToShow.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* View All Link */}
                <div className="mt-16 text-center">
                    <a href="/projects" className="inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-widest border border-purple-500/30 rounded-lg text-white hover:border-amber-400 hover:text-amber-400 transition-colors">
                        View All Projects
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
