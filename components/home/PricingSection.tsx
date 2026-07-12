"use client";

import {
    Check,
    Star
} from "lucide-react";

import { motion } from "framer-motion";


const plans = [

    {
        name: "Starter",
        price: "$30",
        subtitle: "For small teams getting started",
        features: [
            "Business Phone Number",
            "HD Voice Calling",
            "Mobile App",
            "Voicemail To Email",
            "Call Forwarding",
            "Auto Attendant",
            "Basic Call Management"
        ]
    },


    {
        name: "Business",
        price: "Custom",
        subtitle: "For growing organizations",
        popular: true,
        features: [
            "Everything in Starter",
            "Call Queues",
            "Advanced IVR",
            "Call Analytics",
            "Department Extensions",
            "Conference Calling",
            "Priority Support"
        ]
    },


    {
        name: "Enterprise",
        price: "Custom",
        subtitle: "For advanced communication needs",
        features: [
            "Multi-location Support",
            "Custom Deployment",
            "Advanced Routing",
            "Dedicated Support",
            "Large Organization Solutions",
            "Custom Integrations",
            "Scalable Infrastructure"
        ]
    }


];


export default function PricingSection() {


    return (

        <section className="py-24 bg-white">


            <div className="max-w-7xl mx-auto px-6">


                <div className="text-center mb-16">


                    <div className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

                        Simple Transparent Pricing

                    </div>


                    <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">

                        Choose The Right Communication Plan

                    </h2>


                    <p className="text-gray-600 mt-5 max-w-3xl mx-auto">

                        Flexible solutions for small businesses,
                        organizations, and growing enterprises.

                    </p>


                </div>




                <div className="grid md:grid-cols-3 gap-8">


                    {plans.map((plan, index) => (


                        <motion.div

                            key={plan.name}

                            initial={{
                                opacity: 0,
                                y: 30
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            viewport={{
                                once: true
                            }}

                            className={`rounded-3xl border p-8 relative ${plan.popular
                                    ?
                                    "border-blue-600 shadow-2xl"
                                    :
                                    ""
                                }`}


                        >


                            {plan.popular && (

                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-2 rounded-full flex items-center gap-2">

                                    <Star size={16} />

                                    Most Popular

                                </div>

                            )}



                            <h3 className="text-2xl font-bold text-gray-900">

                                {plan.name}

                            </h3>


                            <p className="text-gray-600 mt-2">

                                {plan.subtitle}

                            </p>



                            <div className="mt-8 text-4xl font-bold">

                                {plan.price}

                                {plan.price.includes("$") && (

                                    <span className="text-base font-normal text-gray-500">

                                        / user / month

                                    </span>

                                )}

                            </div>



                            <div className="mt-8 space-y-4">


                                {plan.features.map(feature => (


                                    <div
                                        key={feature}
                                        className="flex gap-3 items-center"
                                    >


                                        <Check className="text-green-600" size={18} />

                                        <p className="text-gray-700">

                                            {feature}

                                        </p>


                                    </div>


                                ))}


                            </div>



                            <button className="mt-10 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">

                                Start Free Trial

                            </button>



                        </motion.div>


                    ))}



                </div>




                <div className="mt-12 text-center text-sm text-gray-500">


                    * Pricing starts at $30/user/month with a minimum of 4 lines/extensions.
                    Final pricing depends on users, features, equipment, and service requirements.


                </div>


            </div>


        </section>


    )

}