import { ReactNode } from "react";
import clsx from "clsx";

interface DashboardCardProps {
    children: ReactNode;
    className?: string;
}

export default function DashboardCard({
    children,
    className,
}: DashboardCardProps) {
    return (
        <div
            className={clsx(
                "rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-xl",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
                className
            )}
        >
            {children}
        </div>
    );
}