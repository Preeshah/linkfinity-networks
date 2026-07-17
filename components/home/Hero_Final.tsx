"use client";

import {
    ShieldCheck,
    Smartphone,
    Zap,
    CheckCircle
} from "lucide-react";

import { motion } from "framer-motion";
import HeroLeadForm from "./HeroLeadForm";
import { assetPath } from "@/lib/assetPath";

export default function Hero() {


    return (

        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white pt-24 pb-8">


            {/* Background Glow */}

            <div className="absolute -top-40 -right-32 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[120px]" />

            <div className="absolute bottom-0 -left-32 h-[280px] w-[280px] rounded-full bg-sky-200/30 blur-[100px]" />



            <div className="relative max-w-7xl mx-auto px-6">


                <div className="grid items-center gap-8 md:gap-10 md:grid-cols-2">





                    {/* LEFT SIDE */}


                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 30
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.6
                        }}

                    >




                        {/* Badge */}

                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">


                            <ShieldCheck size={16} />


                            Enterprise Cloud Communications


                        </div>






                        {/* Main Heading */}

                        <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">


                            Communication

                            <br />

                            Without Limits.


                        </h1>







                        {/* Supporting Text */}

                        <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">


                            Modern cloud phone solutions built for Anyone and Everyone.
                            <br />

                            Get 35+ professional features, mobile apps,
                            smart call routing, and reliable communication.


                        </p>







                        {/* Hero Image */}


                        <motion.div

                            initial={{
                                opacity: 0,
                                scale: 0.95
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1
                            }}

                            transition={{
                                duration: 0.6,
                                delay: 0.2
                            }}

                            className="mt-6 -ml-2"

                        >


                            <img

                                src={`${assetPath("/hero-image.png")}`}

                                alt="LinkFinity Networks cloud phone system"

                                className="w-full max-w-xl rounded-3xl shadow-2xl border border-gray-100"

                            />


                        </motion.div>







                        {/* Feature Highlights */}


                        <div className="mt-5 grid grid-cols-2 gap-3">


                            <Feature

                                icon={<Zap className="text-blue-600" size={17} />}

                                title="35+ Features"

                            />



                            <Feature

                                icon={<Smartphone className="text-blue-600" size={17} />}

                                title="Mobile Apps"

                            />



                            <Feature

                                icon={<CheckCircle className="text-blue-600" size={17} />}

                                title="Keep Numbers"

                            />



                            <Feature

                                icon={<ShieldCheck className="text-blue-600" size={17} />}

                                title="US Support"

                            />



                        </div>




                    </motion.div>









                    {/* RIGHT SIDE FORM */}



                    <motion.div


                        initial={{
                            opacity: 0,
                            scale: 0.95
                        }}


                        animate={{
                            opacity: 1,
                            scale: 1
                        }}


                        transition={{
                            duration: 0.7
                        }}


                        className="relative flex justify-center md:justify-end"


                    >



                        {/* Form Glow */}

                        <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[110px]" />





                        <div className="relative w-full max-w-lg">


                            <HeroLeadForm />


                        </div>





                    </motion.div>





                </div>


            </div>



        </section>

    );

}







function Feature({

    icon,

    title,

}: {

    icon: React.ReactNode;

    title: string;

}) {


    return (

        <div className="flex items-center gap-2">


            <div className="rounded-lg bg-blue-100 p-1.5">


                {icon}


            </div>


            <p className="text-sm font-semibold text-slate-800">


                {title}


            </p>


        </div>


    );

}