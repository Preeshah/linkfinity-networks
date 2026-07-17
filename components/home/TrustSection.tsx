"use client";

import { assetPath } from "@/lib/assetPath";

export default function TrustSection() {


    const trustCards = [
        {
            image: assetPath("/images/trust/trusted-business.png"),
            title: "Trusted Business Communication",
            description:
                "Reliable cloud phone systems helping businesses stay connected with customers every day."
        },

        {
            image: assetPath("/images/trust/professional-office.png"),
            title: "Built For Professional Offices",
            description:
                "Secure communication solutions designed for medical offices, clinics, and professional businesses."
        },

        {
            image: assetPath("/images/trust/work-anywhere.png"),
            title: "Work From Anywhere",
            description:
                "Connect desk phones, smartphones, and computers with one powerful cloud communication platform."
        }
    ];

    const stats = [
        {
            image: assetPath("/images/trust/uptime.png"),
            number: "99.99%",
            title: "Reliable Uptime",
            description:
                "Enterprise-grade cloud phone reliability"
        },

        {
            image: assetPath("/images/trust/features.png"),
            number: "35+",
            title: "Business Features",
            description:
                "Everything your team needs to communicate"
        },

        {
            image: assetPath("/images/trust/free-trial.png"),
            number: "15 Days",
            title: "Free Trial",
            description:
                "Experience our platform risk-free"
        },

        {
            image: assetPath("/images/trust/secure-cloud.png"),
            number: "Secure",
            title: "Cloud Platform",
            description:
                "Built for modern business needs"
        }
    ];


    return (

        <section className="py-20 bg-gray-50">


            <div className="max-w-7xl mx-auto px-6">



                <div className="text-center mb-14">


                    <h2 className="
                    text-3xl
                    md:text-4xl
                    font-extrabold
                    text-gray-900
                    ">

                        Trusted Cloud Communication For Modern Businesses

                    </h2>



                    <p className="
                    mt-4
                    max-w-3xl
                    mx-auto
                    text-gray-600
                    text-lg
                    ">

                        LinkFinity Networks helps businesses communicate smarter
                        with reliable cloud phone solutions, advanced features,
                        and secure technology.

                    </p>


                </div>





                {/* Trust Images */}


                <div className="
                grid
                md:grid-cols-3
                gap-8
                mb-16
                ">


                    {trustCards.map((item, index) => (


                        <div

                            key={index}

                            className="
                            bg-white
                            rounded-3xl
                            overflow-hidden
                            border
                            border-gray-100
                            shadow-lg
                            hover:shadow-2xl
                            transition-all
                            duration-300
                            group
                            "

                        >


                            <div className="h-56 overflow-hidden">


                                <img

                                    src={item.image}

                                    alt={item.title}

                                    className="
                                    w-full
                                    h-full
                                    object-cover
                                    group-hover:scale-110
                                    transition-transform
                                    duration-500
                                    "

                                />


                            </div>



                            <div className="p-6">


                                <h3 className="
                                text-xl
                                font-bold
                                text-gray-900
                                ">

                                    {item.title}

                                </h3>



                                <p className="
                                mt-3
                                text-gray-600
                                leading-7
                                ">

                                    {item.description}

                                </p>


                            </div>


                        </div>


                    ))}


                </div>







                {/* Trust Stats */}



                <div className="
                grid
                sm:grid-cols-2
                lg:grid-cols-4
                gap-8
                ">


                    {stats.map((item, index) => (


                        <div

                            key={index}

                            className="
                            bg-white
                            rounded-3xl
                            overflow-hidden
                            border
                            border-gray-100
                            shadow-lg
                            hover:shadow-2xl
                            transition-all
                            duration-300
                            group
                            "

                        >


                            <div className="h-40 overflow-hidden">


                                <img

                                    src={item.image}

                                    alt={item.title}

                                    className="
                                    w-full
                                    h-full
                                    object-cover
                                    group-hover:scale-110
                                    transition-transform
                                    duration-500
                                    "

                                />


                            </div>





                            <div className="p-6 text-center">


                                <h3 className="
                                text-3xl
                                font-extrabold
                                text-blue-600
                                ">

                                    {item.number}

                                </h3>



                                <h4 className="
                                mt-2
                                text-lg
                                font-bold
                                text-gray-900
                                ">

                                    {item.title}

                                </h4>



                                <p className="
                                mt-2
                                text-sm
                                text-gray-600
                                ">

                                    {item.description}

                                </p>


                            </div>


                        </div>


                    ))}


                </div>



            </div>


        </section>


    );

}