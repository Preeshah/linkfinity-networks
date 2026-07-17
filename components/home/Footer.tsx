"use client";

import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

export default function Footer() {

    return (

        <footer id="footer-section" className="bg-slate-950 text-white">


            <div className="max-w-7xl mx-auto px-6 py-16">


                <div className="
                    grid
                    gap-10
                    md:grid-cols-2
                    lg:grid-cols-4
                ">


                    {/* Company */}


                    <div>


                        <div className="flex items-center gap-3 mb-5">


                            <img

                                src={assetPath("/logo.png")}

                                alt="LinkFinity Networks"

                                className="h-12 w-auto"

                            />


                            <div>

                                <h2 className="font-bold text-lg">
                                    LINKFINITY
                                </h2>

                                <p className="text-xs text-gray-400">
                                    NETWORKS
                                </p>

                            </div>


                        </div>



                        <p className="text-gray-400 leading-7 text-sm">


                            Modern cloud communication solutions helping
                            businesses stay connected with customers,
                            teams, and communities.


                        </p>



                        <div className="
                            flex
                            items-center
                            gap-2
                            mt-5
                            text-sm
                            text-gray-300
                        ">


                            <ShieldCheck
                                size={18}
                                className="text-blue-400"
                            />

                            Secure Cloud Communications


                        </div>


                    </div>







                    {/* Solutions */}


                    <div>


                        <h3 className="
                            font-bold
                            text-lg
                            mb-5
                        ">

                            Solutions

                        </h3>



                        <ul className="
                            space-y-3
                            text-gray-400
                            text-sm
                        ">


                            <li>
                                Cloud Phone Systems
                            </li>


                            <li>
                                Business VoIP
                            </li>


                            <li>
                                Virtual Receptionist
                            </li>


                            <li>
                                Call Routing
                            </li>


                            <li>
                                Mobile Softphone Apps
                            </li>


                        </ul>


                    </div>







                    {/* Features */}


                    <div>


                        <h3 className="
                            font-bold
                            text-lg
                            mb-5
                        ">

                            Features

                        </h3>



                        <ul className="
                            space-y-3
                            text-gray-400
                            text-sm
                        ">


                            <li>
                                35+ Business Features
                            </li>


                            <li>
                                IVR & Auto Attendant
                            </li>


                            <li>
                                Call Recording
                            </li>


                            <li>
                                Voicemail To Email
                            </li>


                            <li>
                                Call Analytics
                            </li>


                        </ul>


                    </div>









                    {/* Contact */}


                    <div>


                        <h3 className="
                            font-bold
                            text-lg
                            mb-5
                        ">

                            Contact Us

                        </h3>



                        <div className="
                            space-y-4
                            text-sm
                            text-gray-400
                        ">


                            <div className="flex gap-3">


                                <Phone
                                    size={18}
                                    className="text-blue-400"
                                />


                                <span>
                                    445-242-8485
                                </span>


                            </div>





                            <div className="flex gap-3">


                                <Mail
                                    size={18}
                                    className="text-blue-400"
                                />


                                <span>
                                    info@linkfinitynetworks.com
                                </span>


                            </div>





                            <div className="flex gap-3">


                                <MapPin
                                    size={18}
                                    className="text-blue-400"
                                />


                                <span>
                                    Pennsylvania, USA
                                </span>


                            </div>



                        </div>



                    </div>



                </div>






                {/* Bottom */}


                <div className="
                    border-t
                    border-gray-800
                    mt-12
                    pt-8
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    gap-4
                    text-sm
                    text-gray-500
                ">


                    <p>

                        © {new Date().getFullYear()} LinkFinity Networks.
                        All rights reserved.

                    </p>



                    <div className="flex gap-6">

                        <a
                            href={assetPath("/privacy-policy/")}
                            className="hover:text-white transition"
                        >
                            Privacy Policy
                        </a>


                        <a
                            href={assetPath("/terms-and-conditions/")}
                            className="hover:text-white transition"
                        >
                            Terms & Conditions
                        </a>


                    </div>


                </div>



            </div>


        </footer>


    );

}