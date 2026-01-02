'use client';

/**
 * CONTACT PAGE
 * Minimal, conversion-focused contact page - Sans Studio
 */

import { useState } from 'react';

const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
    { name: 'YouTube', href: 'https://youtube.com', icon: 'YT' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'LI' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'TW' },
];

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('Form submitted:', formState);

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column - Info */}
                    <div>
                        <span className="text-sm uppercase tracking-[0.2em] text-amber-400 block mb-4">
                            Get in Touch
                        </span>
                        <h1 className="text-5xl md:text-6xl font-light mb-8 text-white">
                            Let&apos;s work together.
                        </h1>
                        <p className="text-lg text-purple-200/80 mb-12">
                            Ready to bring your vision to life? Whether it&apos;s a commercial,
                            documentary, or creative project, I&apos;d love to hear about it.
                        </p>

                        {/* Direct Contact */}
                        <div className="mb-12">
                            <h3 className="text-sm uppercase tracking-widest text-purple-300/60 mb-4">
                                Email
                            </h3>
                            <a
                                href="mailto:sanskaarundale@gmail.com"
                                className="text-2xl font-light text-white hover:text-amber-400 transition-colors"
                            >
                                sanskaarundale@gmail.com
                            </a>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-purple-300/60 mb-4">
                                Follow
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 border border-purple-500/30 rounded-full flex items-center justify-center text-sm font-medium text-purple-300/80 hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div>
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-400/20 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-light text-white mb-4">Message Sent!</h3>
                                <p className="text-purple-200/80">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm uppercase tracking-widest text-purple-300/60 mb-3"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formState.name}
                                        onChange={(e) =>
                                            setFormState((s) => ({ ...s, name: e.target.value }))
                                        }
                                        required
                                        className="w-full bg-transparent border-b border-purple-500/30 py-3 text-lg text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-purple-300/40"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm uppercase tracking-widest text-purple-300/60 mb-3"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={(e) =>
                                            setFormState((s) => ({ ...s, email: e.target.value }))
                                        }
                                        required
                                        className="w-full bg-transparent border-b border-purple-500/30 py-3 text-lg text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-purple-300/40"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm uppercase tracking-widest text-purple-300/60 mb-3"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formState.message}
                                        onChange={(e) =>
                                            setFormState((s) => ({ ...s, message: e.target.value }))
                                        }
                                        required
                                        rows={5}
                                        className="w-full bg-transparent border-b border-purple-500/30 py-3 text-lg text-white focus:outline-none focus:border-amber-400 transition-colors resize-none placeholder:text-purple-300/40"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-8 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium rounded-lg hover:from-amber-300 hover:to-amber-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
