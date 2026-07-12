"use client";

import {
    Phone,
    Users,
    Activity,
    Clock
} from "lucide-react";

import DashboardCard from "@/components/ui/DashboardCard";
import StatCard from "@/components/ui/StatCard";

export default function Dashboard() {

    return (

        <DashboardCard className="relative p-8 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-70" />

            <div className="relative">

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-2xl font-bold text-gray-800">

                            LinkFinity Cloud Platform

                        </h2>

                        <p className="text-slate-500 mt-1">

                            Live Business Communication Dashboard

                        </p>

                    </div>

                    <div className="flex items-center gap-2">

                        <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

                        <span className="text-green-700 font-medium">

                            System Online

                        </span>

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-5 mt-8">

                    <StatCard
                        icon={<Phone size={24} />}
                        label="Today's Calls"
                        value="486"
                    />

                    <StatCard
                        icon={<Users size={24} />}
                        label="Active Extensions"
                        value="124"
                    />

                    <StatCard
                        icon={<Activity size={24} />}
                        label="Answer Rate"
                        value="98.7%"
                    />

                    <StatCard
                        icon={<Clock size={24} />}
                        label="Average Wait"
                        value="11 sec"
                    />

                </div>

                <div className="mt-8 rounded-2xl border bg-slate-50 p-6">

                    <div className="flex justify-between">

                        <h3 className="font-bold text-gray-800">

                            Sales Queue

                        </h3>

                        <span className="text-blue-600">

                            Healthy

                        </span>

                    </div>

                    <div className="mt-5 h-3 rounded-full bg-slate-200 overflow-hidden">

                        <div className="h-full w-[92%] rounded-full bg-blue-600" />

                    </div>

                    <div className="mt-3 flex justify-between text-sm text-slate-500">

                        <span>

                            92% Answer Rate

                        </span>

                        <span>

                            Avg Wait 11 sec

                        </span>

                    </div>

                </div>

                <div className="mt-8 rounded-2xl border p-6">

                    <h3 className="font-bold text-gray-800">

                        Recent Activity

                    </h3>

                    <div className="mt-5 space-y-4">

                        <ActivityItem
                            text="John answered +1 (215) 555-1234"
                        />

                        <ActivityItem
                            text="New voicemail received"
                        />

                        <ActivityItem
                            text="Support queue callback completed"
                        />

                        <ActivityItem
                            text="Auto Attendant switched to Business Hours"
                        />

                    </div>

                </div>

            </div>

        </DashboardCard>

    );

}

function ActivityItem({
    text,
}: {
    text: string
}) {

    return (

        <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <p className="text-slate-600">

                {text}

            </p>

        </div>

    )

}