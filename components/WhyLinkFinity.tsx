"use client";

import {
    X,
    Check,
    Cloud,
    Settings,
    Smartphone,
    TrendingUp
} from "lucide-react";

import { motion } from "framer-motion";


const oldSystem = [
    "Expensive phone hardware",
    "Limited business features",
    "Difficult upgrades",
    "Office-only calling",
    "High maintenance costs",
    "Limited remote access"
];


const linkfinity = [
    "Cloud-based phone system",
    "35+ professional features",
    "Easy upgrades and scaling",
    "Work from anywhere",
    "Mobile and desktop apps",
    "Advanced call management"
];


export default function WhyLinkFinity() {

    return (

        <section className="py-24 bg-gray-50">


            <div className="max-w-7xl mx-auto px-6">


                {/* Heading */}

                <div className="text-center mb-16">


                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

                        <Cloud size={18} />

                        Modern Cloud Communication

                    </div>


                    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">

                        Move Beyond Traditional Phone Systems

                    </h2>


                    <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">

                        Upgrade your business communication with a flexible,
                        powerful, and reliable cloud phone system designed
                        for today's workforce.

                    </p>


                </div>



                <div className="grid md:grid-cols-2 gap-10">



                    {/* Traditional */}

                    <motion.div

                        initial={{ opacity: 0, x: -30 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        className="bg-white rounded-3xl border p-8"

                    >


                        <h3 className="text-2xl font-bold text-gray-900">

                            Traditional Phone Systems

                        </h3>


                        <p className="text-gray-500 mt-2">

                            Outdated technology that slows businesses down.

                        </p>



                        <div className="mt-8 space-y-5">


                            {oldSystem.map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-4"
                                >


                                    <div className="bg-red-100 text-red-600 rounded-full p-1">

                                        <X size={18} />

                                    </div>


                                    <p className="text-gray-700">

                                        {item}

                                    </p>


                                </div>

                            ))}


                        </div>


                    </motion.div>





                    {/* LinkFinity */}

                    <motion.div

                        initial={{ opacity: 0, x: 30 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        className="bg-blue-600 text-white rounded-3xl p-8 shadow-xl"

                    >


                        <h3 className="text-2xl font-bold">

                            LinkFinity Networks

                        </h3>


                        <p className="text-blue-100 mt-2">

                            The future of business communication.

                        </p>



                        <div className="mt-8 space-y-5">


                            {linkfinity.map((item) => (


                                <div

                                    key={item}

                                    className="flex items-center gap-4"

                                >


                                    <div className="bg-white/20 rounded-full p-1">

                                        <Check size={18} />

                                    </div>


                                    <p>

                                        {item}

                                    </p>


                                </div>


                            ))}



                        </div>


                    </motion.div>



                </div>





                {/* Bottom benefits */}

                <div className="grid md:grid-cols-3 gap-6 mt-16">


                    <div className="bg-white rounded-2xl p-6 border">

                        <Settings className="text-blue-600" />

                        <h4 className="font-bold mt-4">

                            Simple Management

                        </h4>

                        <p className="text-gray-600 mt-2">

                            Manage users, extensions, and features easily.

                        </p>

                    </div>



                    <div className="bg-white rounded-2xl p-6 border">

                        <Smartphone className="text-blue-600" />

                        <h4 className="font-bold mt-4">

                            Work Anywhere

                        </h4>

                        <p className="text-gray-600 mt-2">

                            Stay connected from your office or mobile device.

                        </p>

                    </div>



                    <div className="bg-white rounded-2xl p-6 border">

                        <TrendingUp className="text-blue-600" />

                        <h4 className="font-bold mt-4">

                            Built To Grow

                        </h4>

                        <p className="text-gray-600 mt-2">

                            Scale your communication as your business grows.

                        </p>

                    </div>


                </div>


            </div>


        </section>


    )

}