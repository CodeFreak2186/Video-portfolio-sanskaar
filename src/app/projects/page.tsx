'use client';

/**
 * PROJECTS PAGE
 * Expanded view of all projects with filtering - SIMPLIFIED
 */

import { useState } from 'react';
import { projects, categoryLabels, ProjectCategory } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

// Get unique categories from projects
const categories: ProjectCategory[] = [
    ...new Set(projects.map((p) => p.category)),
];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container">
                {/* Page Header */}
                <div className="mb-16">
                    <span className="text-sm uppercase tracking-[0.2em] text-amber-400 block mb-4">
                        Portfolio
                    </span>
                    <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">All Projects</h1>
                    <p className="text-lg text-purple-200/80 max-w-2xl">
                        A curated collection of work spanning commercials, music videos,
                        documentaries, and motion graphics.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-4 mb-12">
                    <FilterButton
                        active={activeFilter === 'all'}
                        onClick={() => setActiveFilter('all')}
                    >
                        All
                    </FilterButton>
                    {categories.map((category) => (
                        <FilterButton
                            key={category}
                            active={activeFilter === category}
                            onClick={() => setActiveFilter(category)}
                        >
                            {categoryLabels[category]}
                        </FilterButton>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-lg text-purple-300/60">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

// Filter Button Component
function FilterButton({
    children,
    active,
    onClick,
}: {
    children: React.ReactNode;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 text-sm uppercase tracking-widest border rounded-full transition-all duration-300 ${active
                ? 'bg-amber-400 border-amber-400 text-black'
                : 'bg-transparent border-purple-500/30 text-purple-300/80 hover:border-amber-400 hover:text-amber-400'
                }`}
        >
            {children}
        </button>
    );
}
