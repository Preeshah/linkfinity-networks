"use client";

import { Menu } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


                {/* Logo */}
                <div className="flex items-center gap-3">

                    <img
                        src={assetPath("/logo.png")}
                        alt="LinkFinity logo"
                        className="h-11 w-auto object-contain"
                    />

                    <div>
                        <h1 className="text-xl font-bold text-gray-900">
                            LINKFINITY
                        </h1>

                        <p className="text-xs text-gray-500">
                            NETWORKS
                        </p>
                    </div>

                </div>



                {/* Menu */}

                <div className="hidden md:flex gap-8 text-gray-700 font-medium">

                    <a href="#">
                        Solutions
                    </a>

                    <a href="#">
                        Features
                    </a>

                    <a href="#">
                        Industries
                    </a>

                    <a href="#">
                        Pricing
                    </a>

                    <a href="#">
                        Contact
                    </a>

                </div>



                {/* Buttons */}

                <div className="hidden md:flex items-center gap-4">

                    <button className="font-medium text-gray-700">
                        Login
                    </button>


                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold">
                        Start Free Trial
                    </button>

                </div>



                {/* Mobile */}

                <button className="md:hidden">
                    <Menu />
                </button>


            </div>


        </nav>
    );
}