"use client";

import {
    HeartPulse,
    Hotel,
    Building2,
    Factory,
    HardHat,
    Scale,
    GraduationCap,
    Home,
    ShoppingBag,
    Utensils,
    Users,
    Car
} from "lucide-react";

import { motion } from "framer-motion";


const industries = [

    {
        icon: HeartPulse,
        title: "Healthcare & Medical",
        description: "Reliable communication solutions for clinics, doctors offices, and healthcare organizations."
    },


    {
        icon: Hotel,
        title: "Hotels & Motels",
        description: "Professional guest communication, front desk calling, extensions, and reservation support."
    },


    {
        icon: Building2,
        title: "Businesses & Offices",
        description: "Powerful phone systems for companies of all sizes."
    },


    {
        icon: Factory,
        title: "Warehouses & Distribution",
        description: "Keep teams connected across locations, departments, and operations."
    },


    {
        icon: HardHat,
        title: "Construction",
        description: "Stay connected between offices, job sites, and mobile teams."
    },


    {
        icon: Scale,
        title: "Law Firms",
        description: "Professional communication for client-focused legal teams."
    },


    {
        icon: GraduationCap,
        title: "Schools & Organizations",
        description: "Reliable communication for educational and community organizations."
    },


    {
        icon: Home,
        title: "Residential & Home Offices",
        description: "A professional phone system for remote workers and home-based businesses."
    },


    {
        icon: ShoppingBag,
        title: "Retail",
        description: "Improve customer service with smart call handling."
    },


    {
        icon: Utensils,
        title: "Restaurants & Hospitality",
        description: "Manage reservations, customer calls, and staff communication."
    },


    {
        icon: Users,
        title: "Non-Profit Organizations",
        description: "Affordable communication tools for mission-driven teams."
    },


    {
        icon: Car,
        title: "Automotive Businesses",
        description: "Connect customers with service departments quickly."
    }


];


export default function IndustriesSection() {


    return (

        <section id="industries-section" className="py-24 bg-gray-50">


            <div className="max-w-7xl mx-auto px-6">


                <div className="text-center mb-16">


                    <div className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

                        Solutions For Every Organization

                    </div>


                    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">

                        Built For Businesses Of Every Size

                    </h2>


                    <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">

                        From small offices and home businesses to hotels,
                        warehouses, and large organizations,
                        LinkFinity Networks helps everyone stay connected.

                    </p>


                </div>




                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


                    {industries.map((industry, index) => {


                        const Icon = industry.icon;


                        return (

                            <motion.div

                                key={industry.title}

                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    duration: .4,
                                    delay: index * .05
                                }}

                                viewport={{
                                    once: true
                                }}

                                className="bg-white rounded-2xl border p-6 hover:shadow-xl transition"


                            >


                                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">

                                    <Icon size={24} />

                                </div>



                                <h3 className="font-bold text-lg mt-5 text-gray-800">

                                    {industry.title}

                                </h3>



                                <p className="text-gray-600 text-sm mt-3">

                                    {industry.description}

                                </p>


                            </motion.div>

                        )


                    })}


                </div>



            </div>


        </section>


    )

}