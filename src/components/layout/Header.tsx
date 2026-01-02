'use client';

/**
 * HEADER COMPONENT
 * Premium glassmorphism navigation - SIMPLIFIED
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}
            style={{
                background: isScrolled ? 'rgba(3, 0, 20, 0.9)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(167, 139, 250, 0.1)' : 'none',
            }}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-light tracking-wider hover:text-amber-400 transition-colors group"
                >
                    <span className="text-white group-hover:text-amber-400 transition-colors">Sans</span>
                    <span className="text-amber-400 group-hover:text-purple-400 transition-colors"> Studio</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <NavLink href="#work">Work</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 group"
                    aria-label="Toggle menu"
                >
                    <span className="w-full h-px bg-white group-hover:bg-amber-400 transition-colors" />
                    <span className="w-3/4 h-px bg-white group-hover:bg-amber-400 transition-colors" />
                </button>
            </div>
        </header>
    );
}

function NavLink({
    href,
    children,
    highlight = false,
}: {
    href: string;
    children: React.ReactNode;
    highlight?: boolean;
}) {
    return (
        <Link
            href={href}
            className={`text-sm uppercase tracking-widest transition-colors relative group ${highlight
                ? 'text-amber-400 hover:text-amber-300'
                : 'text-purple-200/70 hover:text-white'
                }`}
        >
            {children}
            <span
                className={`absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300 ${highlight
                    ? 'bg-gradient-to-r from-amber-400 to-purple-400'
                    : 'bg-amber-400'
                    }`}
            />
        </Link>
    );
}
