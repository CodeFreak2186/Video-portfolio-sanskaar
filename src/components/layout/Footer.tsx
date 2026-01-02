/**
 * FOOTER COMPONENT
 * Sans Studio branding
 */

import Link from 'next/link';

const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'YouTube', href: 'https://youtube.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12">
            {/* Gradient border top */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-light tracking-wider hover:text-amber-400 transition-colors group"
                    >
                        <span className="text-white group-hover:text-amber-400 transition-colors">Sans</span>
                        <span className="text-amber-400 group-hover:text-purple-400 transition-colors"> Studio</span>
                    </Link>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm uppercase tracking-widest text-purple-300/60 hover:text-amber-400 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-purple-300/40">
                        © {currentYear} Sans Studio. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
