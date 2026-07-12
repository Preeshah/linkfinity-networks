"use client";

import {
    Activity,
    Layers,
    Clock,
    ShieldCheck
} from "lucide-react";

import { motion } from "framer-motion";


const stats = [
    {
        icon: Activity,
        number: "99.99%",
        title: "Reliable Uptime",
        description: "Enterprise-grade cloud phone reliability"
    },

    {
        icon: Layers,
        number: "35+",
        title: "Business Features",
        description: "Everything your team needs to communicate"
    },

    {
        icon: Clock,
        number: "15 Days",
        title: "Free Trial",
        description: "Experience our platform risk-free"
    },

    {
        icon: ShieldCheck,
        number: "Secure",
        title: "Cloud Platform",
        description: "Built for modern business needs"
    }
];


export default function TrustSection() {

    return (

        <section className="py-20 bg-white">


            <div className="max-w-7xl mx-auto px-6">


                <div className="text-center mb-14">


                    <h2 className="text-4xl font-bold text-gray-900">

                        Trusted Communication For Growing Businesses

                    </h2>


                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">

                        LinkFinity Networks helps businesses replace outdated
                        phone systems with powerful cloud communication solutions.

                    </p>


                </div>



                <div className="grid md:grid-cols-4 gap-6">


                    {stats.map((item, index) => {


                        const Icon = item.icon;


                        return (

                            <motion.div

                                key={item.title}

                                initial={{ opacity: 0, y: 20 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                transition={{
                                    duration: .5,
                                    delay: index * .1
                                }}

                                viewport={{
                                    once: true
                                }}

                                className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition"


                            >


                                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">

                                    <Icon size={24} />

                                </div>



                                <h3 className="text-3xl font-bold mt-6 text-gray-900">

                                    {item.number}

                                </h3>


                                <h4 className="font-semibold text-lg mt-2 text-gray-700">

                                    {item.title}

                                </h4>


                                <p className="text-gray-600 mt-2 text-sm">

                                    {item.description}

                                </p>


                            </motion.div>


                        )

                    })}


                </div>


            </div>


        </section>


    )

}