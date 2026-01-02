'use client';

/**
 * SKILLS SECTION
 * Premium skill visualization - SIMPLIFIED, NO GSAP ANIMATIONS
 */

// Skills data with proficiency levels
const skills = [
    {
        name: 'Video Editing',
        description: 'Premiere Pro, DaVinci Resolve, Final Cut',
        level: 95,
    },
    {
        name: 'Motion Graphics',
        description: 'After Effects, Cinema 4D, Blender',
        level: 90,
    },
    {
        name: 'Color Grading',
        description: 'DaVinci Resolve, Lumetri, Film Emulation',
        level: 92,
    },
    {
        name: 'Sound Design',
        description: 'Audition, Logic Pro, Sound Mixing',
        level: 85,
    },
    {
        name: 'AI-Assisted Workflows',
        description: 'Runway, Topaz, Generative Tools',
        level: 80,
    },
];

export default function Skills() {
    return (
        <section className="py-32" id="skills">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column - Title */}
                    <div>
                        <span className="text-sm uppercase tracking-[0.2em] text-amber-400 block mb-4">
                            Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
                            Crafted with{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">
                                precision
                            </span>
                        </h2>
                        <p className="text-lg text-purple-200/80 max-w-md">
                            Every project is an opportunity to push creative boundaries while
                            maintaining the highest technical standards.
                        </p>
                    </div>

                    {/* Right Column - Skills List */}
                    <div className="space-y-8">
                        {skills.map((skill) => (
                            <div key={skill.name} className="group">
                                {/* Skill Header */}
                                <div className="flex justify-between items-baseline mb-3">
                                    <h3 className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">
                                        {skill.name}
                                    </h3>
                                    <span className="text-sm text-amber-400 font-mono">
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Skill Description */}
                                <p className="text-sm text-purple-300/60 mb-3">
                                    {skill.description}
                                </p>

                                {/* Progress Bar */}
                                <div className="h-1 bg-purple-500/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-amber-400 to-purple-400 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
