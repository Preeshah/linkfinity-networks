"use client";

import { useState } from "react";

import {
    CheckCircle,
    Phone,
    ShieldCheck
} from "lucide-react";


export default function HeroLeadForm() {


    const [submitted, setSubmitted] = useState(false);

    const [loading, setLoading] = useState(false);



    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {


        e.preventDefault();

        setLoading(true);



        const form = e.currentTarget;



        const formData = {


            businessName:
                (form.elements.namedItem("businessName") as HTMLInputElement).value,


            name:
                (form.elements.namedItem("name") as HTMLInputElement).value,


            email:
                (form.elements.namedItem("email") as HTMLInputElement).value,


            phone:
                (form.elements.namedItem("phone") as HTMLInputElement).value,


            lines:
                (form.elements.namedItem("lines") as HTMLInputElement).value,


        };




        try {


            await fetch(


                "https://script.google.com/macros/s/AKfycbwjWUj61tVCEQCn-lYg2WCb6eJkLOzp03Xwxu3mERABlNyDT-2WOQjOAffQDQj_GDSW/exec",


                {


                    method: "POST",


                    mode: "no-cors",


                    headers: {


                        "Content-Type": "application/json",


                    },


                    body: JSON.stringify(formData),


                }


            );



            setSubmitted(true);



        } catch (error) {


            console.error(error);


            alert(
                "Something went wrong. Please try again."
            );


        }



        setLoading(false);


    }





    return (


        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6">



            {!submitted ? (


                <>



                    {/* Form Header */}


                    <div className="flex items-center gap-3 mb-5">



                        <div className="relative bg-blue-100 p-3 rounded-xl">



                            {/* Pulse Ring */}

                            <span className="absolute inset-0 rounded-xl bg-blue-400/30 animate-ping"></span>



                            {/* Ringing Phone */}

                            <Phone

                                className="relative z-10 text-blue-600 animate-ring"

                                size={24}

                            />


                        </div>





                        <div>



                            <h2 className="text-xl font-bold text-gray-900">


                                Start Your Free Trial


                            </h2>



                            <p className="text-sm text-gray-500">


                                15-Day Free Trial • No Obligation


                            </p>



                        </div>




                    </div>








                    <form

                        onSubmit={handleSubmit}

                        className="space-y-3"

                    >





                        <input

                            name="businessName"

                            required

                            placeholder="Business Name"

                            className="text-gray-700 w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-blue-600 focus:outline-none"

                        />





                        <input

                            name="name"

                            required

                            placeholder="Your Name"

                            className="text-gray-700 w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-blue-600 focus:outline-none"

                        />






                        <input

                            name="email"

                            required

                            type="email"

                            placeholder="Business Email"

                            className="text-gray-700 w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-blue-600 focus:outline-none"

                        />






                        <input

                            name="phone"

                            required

                            placeholder="Phone Number"

                            className="text-gray-700 w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-blue-600 focus:outline-none"

                        />







                        <input

                            name="lines"

                            placeholder="Number of Lines Needed"

                            className="text-gray-700 w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-blue-600 focus:outline-none"

                        />









                        <button


                            disabled={loading}


                            type="submit"


                            className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition-all hover:shadow-lg"


                        >



                            {loading

                                ? "Submitting..."

                                : "Get Started Free"

                            }



                        </button>





                    </form>




                </>



            ) : (




                <div className="text-center py-8">



                    <CheckCircle

                        size={65}

                        className="mx-auto text-green-600"

                    />





                    <h2 className="mt-5 text-2xl font-bold text-gray-900">


                        Thank You!


                    </h2>





                    <p className="mt-3 text-gray-600 leading-7">


                        Your request has been submitted successfully.


                        <br />


                        Someone from our team will reach out shortly
                        to help you start your free trial or answer any questions.


                    </p>



                </div>




            )}








            {/* Trust Section */}



            <div className="mt-5 border-t pt-5 space-y-2">





                <div className="flex items-center gap-2 text-sm text-gray-600">


                    <CheckCircle

                        size={16}

                        className="text-green-600"

                    />


                    15-Day Free Trial


                </div>






                <div className="flex items-center gap-2 text-sm text-gray-600">


                    <CheckCircle

                        size={16}

                        className="text-green-600"

                    />


                    35+ Business Features


                </div>







                <div className="flex items-center gap-2 text-sm text-gray-600">


                    <ShieldCheck

                        size={16}

                        className="text-blue-600"

                    />


                    Secure Cloud Communications


                </div>




            </div>




        </div>


    );

}