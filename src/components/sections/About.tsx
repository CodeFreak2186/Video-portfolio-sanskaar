'use client';

/**
 * ABOUT SECTION
 * Premium design - Sans Studio branding
 */

export default function About() {
    return (
        <section className="py-32" id="about">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image Column */}
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                            {/* Background glow */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-amber-500/20 rounded-3xl blur-2xl" />

                            {/* Image container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-purple-500/20">
                                {/* Gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-amber-900/20" />

                                {/* Pattern overlay */}
                                <div className="absolute inset-0 opacity-20">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <rect width="1" height="1" fill="currentColor" className="text-purple-400" />
                                        </pattern>
                                        <rect width="100" height="100" fill="url(#grid)" />
                                    </svg>
                                </div>

                                {/* Center icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full border border-amber-400/30 flex items-center justify-center backdrop-blur-sm bg-purple-900/30">
                                        <svg
                                            className="w-10 h-10 text-amber-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-1 lg:order-2">
                        <span className="text-sm uppercase tracking-[0.2em] text-amber-400 block mb-4">
                            About Me
                        </span>
                        <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">
                            Creating{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">
                                impactful
                            </span>{' '}
                            visual stories
                        </h2>

                        <p className="text-lg leading-relaxed text-purple-200/80 mb-4">
                            I&apos;m a video editor focused on turning raw footage into clear, engaging stories.
                            From short-form content to cinematic edits, I design visuals that hold attention and communicate with impact.
                        </p>
                        <p className="text-lg leading-relaxed text-purple-200/80">
                            I blend creative editing with modern tools to deliver work that feels{' '}
                            <span className="text-white">polished, purposeful, and memorable.</span>
                        </p>

                        {/* Stats */}
                        <div className="mt-12 pt-8 border-t border-purple-500/20 grid grid-cols-3 gap-6">
                            <div className="text-center p-4 rounded-xl bg-purple-900/20 border border-purple-500/10">
                                <span className="text-3xl font-light text-amber-400">2+</span>
                                <p className="text-xs uppercase tracking-wider mt-2 text-purple-300/60">Years Experience</p>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-purple-900/20 border border-purple-500/10">
                                <span className="text-3xl font-light text-amber-400">70+</span>
                                <p className="text-xs uppercase tracking-wider mt-2 text-purple-300/60">Projects Delivered</p>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-purple-900/20 border border-purple-500/10">
                                <span className="text-3xl font-light text-amber-400">30+</span>
                                <p className="text-xs uppercase tracking-wider mt-2 text-purple-300/60">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
