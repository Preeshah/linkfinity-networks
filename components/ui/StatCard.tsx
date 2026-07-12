import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function StatCard({
  icon,
  label,
  value,
}: Props) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">

      <div className="flex justify-between items-center">

        <div className="text-blue-600">
          {icon}
        </div>

        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"/>

      </div>

      <p className="mt-4 text-sm text-slate-500">
        {label}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </h3>

    </div>
  );
}