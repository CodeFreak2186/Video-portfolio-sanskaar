import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GSAPProvider from "@/components/providers/GSAPProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sans Studio | Video Editor Portfolio",
    description: "Professional video editing portfolio showcasing cinematic storytelling, motion graphics, and color grading. Every frame tells a story.",
    keywords: ["video editor", "motion graphics", "color grading", "film editing", "portfolio", "Sans Studio"],
    openGraph: {
        title: "Sans Studio | Video Editor Portfolio",
        description: "Professional video editing portfolio showcasing cinematic storytelling.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <GSAPProvider>
                    {/* Animated gradient background */}
                    <div className="animated-bg" aria-hidden="true" />

                    {/* Floating orbs for visual depth */}
                    <div className="floating-orb floating-orb-1" aria-hidden="true" />
                    <div className="floating-orb floating-orb-2" aria-hidden="true" />
                    <div className="floating-orb floating-orb-3" aria-hidden="true" />

                    {/* Film grain overlay */}
                    <div className="grain" aria-hidden="true" />

                    {/* Vignette effect */}
                    <div className="vignette" aria-hidden="true" />

                    {/* Header */}
                    <Header />

                    {/* Main content */}
                    <main>{children}</main>

                    {/* Footer */}
                    <Footer />
                </GSAPProvider>
            </body>
        </html>
    );
}
