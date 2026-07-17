"use client";

import { useEffect, useState } from "react";

import {
    CheckCircle,
    Phone,
    ShieldCheck
} from "lucide-react";


const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwjWUj61tVCEQCn-lYg2WCb6eJkLOzp03Xwxu3mERABlNyDT-2WOQjOAffQDQj_GDSW/exec";


type FormErrors = {
    businessName?: string;
    name?: string;
    email?: string;
    phone?: string;
    lines?: string;
};


export default function HeroLeadForm() {


    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const focusFirstField = () => {
            if (window.location.hash !== "#hero-lead-form") {
                return;
            }

            window.setTimeout(() => {
                const formSection = document.getElementById("hero-lead-form");
                const firstInput = formSection?.querySelector<HTMLInputElement>(
                    'input[name="businessName"]'
                );

                if (!formSection || !firstInput) {
                    return;
                }

                const navbar = document.querySelector("nav");
                const navbarHeight = navbar?.getBoundingClientRect().height ?? 80;
                const topOffset = formSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

                window.scrollTo({
                    top: topOffset,
                    behavior: "smooth"
                });

                firstInput.focus({ preventScroll: true });
            }, 120);
        };

        focusFirstField();
        window.addEventListener("hashchange", focusFirstField);

        return () => window.removeEventListener("hashchange", focusFirstField);
    }, []);

    const [loading, setLoading] = useState(false);


    const [errors, setErrors] = useState<FormErrors>({});



    function validate(formData: {
        businessName: string;
        name: string;
        email: string;
        phone: string;
        lines: string;
    }) {


        const newErrors: FormErrors = {};



        if (!formData.businessName.trim()) {

            newErrors.businessName =
                "Business name is required.";

        }



        if (!formData.name.trim()) {

            newErrors.name =
                "Your name is required.";

        }



        if (!formData.email.trim()) {

            newErrors.email =
                "Email is required.";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email
            )
        ) {

            newErrors.email =
                "Enter a valid email address.";

        }



        const cleanPhone =
            formData.phone.replace(/\D/g, "");



        if (!cleanPhone) {

            newErrors.phone =
                "Phone number is required.";

        } else if (
            cleanPhone.length !== 10
        ) {

            newErrors.phone =
                "Enter a valid 10 digit phone number.";

        }



        if (formData.lines) {

            const lineNumber =
                Number(formData.lines);



            if (
                !Number.isInteger(lineNumber) ||
                lineNumber < 1 ||
                lineNumber > 1000
            ) {

                newErrors.lines =
                    "Enter a valid number of lines.";

            }

        }



        return newErrors;

    }





    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {


        e.preventDefault();



        const form = e.currentTarget;



        const formData = {


            businessName:
                (
                    form.elements.namedItem(
                        "businessName"
                    ) as HTMLInputElement
                ).value.trim(),



            name:
                (
                    form.elements.namedItem(
                        "name"
                    ) as HTMLInputElement
                ).value.trim(),



            email:
                (
                    form.elements.namedItem(
                        "email"
                    ) as HTMLInputElement
                ).value.trim(),



            phone:
                (
                    form.elements.namedItem(
                        "phone"
                    ) as HTMLInputElement
                ).value.trim(),



            lines:
                (
                    form.elements.namedItem(
                        "lines"
                    ) as HTMLInputElement
                ).value.trim(),


        };



        const validationErrors =
            validate(formData);



        setErrors(validationErrors);



        if (
            Object.keys(validationErrors).length > 0
        ) {

            return;

        }




        setLoading(true);




        try {


            await fetch(

                GOOGLE_SCRIPT_URL,

                {


                    method: "POST",


                    mode: "no-cors",


                    headers: {

                        "Content-Type":
                            "application/json",

                    },


                    body:
                        JSON.stringify({

                            ...formData,

                            phone:
                                formData.phone.replace(
                                    /\D/g,
                                    ""
                                ),

                        }),


                }

            );




            setSubmitted(true);



        } catch (error) {


            console.error(error);


            alert(
                "Something went wrong. Please try again."
            );


        } finally {


            setLoading(false);


        }


    }





    return (

        <div id="hero-lead-form" className="scroll-mt-24 md:scroll-mt-32 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6">


            {!submitted ? (


                <>


                    <div className="flex items-center gap-3 mb-5">


                        <div className="relative bg-blue-100 p-3 rounded-xl">


                            <span className="absolute inset-0 rounded-xl bg-blue-400/30 animate-ping"></span>


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



                        {[
                            {
                                name: "businessName",
                                placeholder: "Business Name"
                            },
                            {
                                name: "name",
                                placeholder: "Your Name"
                            },
                            {
                                name: "email",
                                placeholder: "Business Email",
                                type: "email"
                            },
                            {
                                name: "phone",
                                placeholder: "Phone Number"
                            },
                            {
                                name: "lines",
                                placeholder: "Number of Lines Needed"
                            }

                        ].map((field) => (


                            <div key={field.name}>


                                <input

                                    name={field.name}

                                    type={field.type || "text"}

                                    placeholder={field.placeholder}

                                    className="text-gray-700 w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-blue-600 focus:outline-none"

                                />


                                {errors[field.name as keyof FormErrors] && (

                                    <p className="text-red-500 text-xs mt-1">

                                        {errors[field.name as keyof FormErrors]}

                                    </p>

                                )}


                            </div>


                        ))}






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






            <div className="mt-5 border-t pt-5 space-y-2">



                <div className="flex items-center gap-2 text-sm text-gray-600">

                    <CheckCircle size={16} className="text-green-600" />

                    15-Day Free Trial

                </div>



                <div className="flex items-center gap-2 text-sm text-gray-600">

                    <CheckCircle size={16} className="text-green-600" />

                    35+ Business Features

                </div>



                <div className="flex items-center gap-2 text-sm text-gray-600">

                    <ShieldCheck size={16} className="text-blue-600" />

                    Secure Cloud Communications

                </div>



            </div>



        </div>


    );


}