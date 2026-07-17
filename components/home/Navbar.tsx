"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const navItems = [
    { href: "#trust-section", label: "About Us" },
    { href: "#features-section", label: "Features" },
    { href: "#industries-section", label: "Industries" },
    { href: "#pricing-section", label: "Pricing" },
    { href: "#footer-section", label: "Contact" }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <img
                        src={assetPath("/logo.png")}
                        alt="LinkFinity logo"
                        className="h-9 sm:h-11 w-auto object-contain flex-shrink-0"
                    />

                    <div className="min-w-0">
                        <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-none">
                            LINKFINITY
                        </h1>

                        <p className="text-[10px] sm:text-xs text-gray-500 leading-none mt-1">
                            NETWORKS
                        </p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-6 text-gray-700 font-medium">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="#hero-lead-form"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold"
                    >
                        Start Free Trial
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 flex-shrink-0"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white/95 px-4 sm:px-6 py-4 space-y-3 shadow-sm">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="block text-gray-700 font-medium"
                            onClick={closeMenu}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="#hero-lead-form"
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold text-center"
                        onClick={closeMenu}
                    >
                        Start Free Trial
                    </a>
                </div>
            )}
        </nav>
    );
}