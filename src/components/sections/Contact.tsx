'use client';

/**
 * CONTACT SECTION
 * Premium CTA - Sans Studio branding
 */

import Link from 'next/link';

export default function Contact() {
    return (
        <section className="py-32 relative" id="contact">
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-amber-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-sm uppercase tracking-[0.2em] text-amber-400 block mb-6">
                        Let&apos;s Create
                    </span>

                    <h2 className="text-5xl md:text-7xl font-light mb-8 text-white">
                        Have a{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">
                            project
                        </span>{' '}
                        in mind?
                    </h2>

                    <p className="text-lg mb-12 max-w-xl mx-auto text-purple-200/80">
                        Always open to discussing new projects, creative ideas, or
                        opportunities to be part of your vision.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 text-lg bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium rounded-lg hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/25"
                    >
                        Start a Conversation
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>

                    {/* Quick Contact Links */}
                    <div className="mt-16 flex flex-wrap justify-center gap-8">
                        <a
                            href="mailto:sanskaarundale@gmail.com"
                            className="text-purple-300/80 hover:text-white transition-colors"
                        >
                            sanskaarundale@gmail.com
                        </a>
                        <span className="text-purple-500/40">•</span>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-300/80 hover:text-white transition-colors"
                        >
                            @sans.studio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
