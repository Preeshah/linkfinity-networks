"use client";

import {
    Phone,
    Route,
    Smartphone,
    BarChart3,
    ShieldCheck,
    Check
} from "lucide-react";

import { motion } from "framer-motion";


const categories = [

    {
        icon: Phone,
        title: "Business Calling",
        features: [
            "HD Voice Calling",
            "Unlimited US & Canada Calling",
            "Caller ID Name & Number",
            "Call Transfer",
            "Call Hold",
            "Call Waiting",
            "Call Parking",
            "Call Pickup"
        ]
    },


    {
        icon: Route,
        title: "Smart Call Management",
        features: [
            "Auto Attendant (IVR)",
            "Ring Groups",
            "Call Queues",
            "Business Hours Routing",
            "Holiday Routing",
            "Call Forwarding",
            "Find Me Follow Me"
        ]
    },


    {
        icon: Smartphone,
        title: "Work Anywhere",
        features: [
            "Mobile App",
            "Desktop Softphone",
            "Remote Extensions",
            "Presence Status",
            "Internal Extension Dialing",
            "Conference Calling"
        ]
    },


    {
        icon: BarChart3,
        title: "Analytics & Reporting",
        features: [
            "Call Reports",
            "Call Analytics",
            "Missed Call Reports",
            "Extension Activity",
            "Usage Insights"
        ]
    },


    {
        icon: ShieldCheck,
        title: "Professional Tools",
        features: [
            "Voicemail To Email",
            "Voicemail Transcription",
            "Custom Greetings",
            "Music On Hold",
            "Number Porting",
            "Failover Routing"
        ]
    }


];



export default function FeaturesSection() {


    return (

        <section className="py-24 bg-white">


            <div className="max-w-7xl mx-auto px-6">


                <div className="text-center mb-16">


                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

                        <ShieldCheck size={18} />

                        35+ Powerful Features

                    </div>


                    <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">

                        Everything Your Business Needs
                        To Communicate Better

                    </h2>


                    <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">

                        One powerful cloud phone system with all the
                        tools your team needs to stay connected.

                    </p>


                </div>




                <div className="grid md:grid-cols-3 gap-8">


                    {categories.map((category, index) => {


                        const Icon = category.icon;


                        return (

                            <motion.div

                                key={category.title}

                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    duration: .5,
                                    delay: index * .1
                                }}

                                viewport={{
                                    once: true
                                }}

                                className="border rounded-3xl p-8 hover:shadow-xl transition bg-white"

                            >


                                <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center">

                                    <Icon size={28} />

                                </div>



                                <h3 className="text-xl font-bold mt-6 text-gray-800">

                                    {category.title}

                                </h3>



                                <div className="mt-6 space-y-4">


                                    {category.features.map(feature => (

                                        <div

                                            key={feature}

                                            className="flex items-center gap-3"

                                        >


                                            <div className="bg-green-100 text-green-600 rounded-full p-1">

                                                <Check size={14} />

                                            </div>


                                            <p className="text-gray-600 text-sm">

                                                {feature}

                                            </p>


                                        </div>

                                    ))}


                                </div>


                            </motion.div>

                        )

                    })}


                </div>


            </div>


        </section>

    )

}