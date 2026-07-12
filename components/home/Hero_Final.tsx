"use client";

import {
    ArrowRight,
    ShieldCheck,
    Smartphone,
    Zap
} from "lucide-react";

import { motion } from "framer-motion";
import HeroLeadForm from "./HeroLeadForm";


export default function Hero() {

    return (

        <section className="relative overflow-hidden pt-40 pb-24 bg-gradient-to-b from-white via-blue-50 to-white">


            {/* Background Glow */}

            <div className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[140px]" />

            <div className="absolute bottom-0 -left-32 h-[350px] w-[350px] rounded-full bg-sky-200/30 blur-[120px]" />


            <div className="relative max-w-7xl mx-auto px-6">


                <div className="grid items-center gap-16 lg:grid-cols-2">



                    {/* LEFT SIDE */}

                    <motion.div

                        initial={{ opacity: 0, y: 30 }}

                        animate={{ opacity: 1, y: 0 }}

                        transition={{ duration: 0.6 }}

                    >


                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-medium">

                            <ShieldCheck size={18} />

                            Enterprise Cloud Communications

                        </div>




                        <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">


                            Communication

                            <br />

                            Without Limits.


                        </h1>




                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">


                            Power Every Conversation. Anywhere.


                            Cloud VoIP, mobile apps, smart call routing,

                            and 35+ professional business features.


                        </p>





                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">


                            <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">


                                Start Your 15-Day Free Trial

                                <ArrowRight size={18} />


                            </button>




                            <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600">


                                Schedule Demo


                            </button>


                        </div>






                        <div className="mt-10 grid grid-cols-2 gap-6">



                            <div className="flex items-center gap-3">


                                <div className="rounded-xl bg-blue-100 p-3">

                                    <Zap className="text-blue-600" />

                                </div>


                                <p className="font-semibold text-gray-700">

                                    35+ Features

                                </p>


                            </div>





                            <div className="flex items-center gap-3">


                                <div className="rounded-xl bg-blue-100 p-3">

                                    <Smartphone className="text-blue-600" />

                                </div>


                                <p className="font-semibold text-gray-700">

                                    Mobile Ready

                                </p>


                            </div>


                        </div>



                    </motion.div>







                    {/* RIGHT SIDE FORM */}



                    <motion.div

                        initial={{ opacity: 0, scale: 0.95 }}

                        animate={{ opacity: 1, scale: 1 }}

                        transition={{ duration: 0.7 }}

                        className="relative"

                    >



                        <div className="absolute -inset-10 bg-blue-400/20 blur-3xl rounded-full" />



                        <div className="relative">


                            <HeroLeadForm />


                        </div>



                    </motion.div>




                </div>


            </div>


        </section>

    );

}