import React, { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  bgColor: string;
}

export default function StatCard({ title, value, icon, bgColor }: StatCardProps) {
  return (
    <div className={`bg-gradient-to-r ${bgColor} rounded-lg shadow-lg overflow-hidden`}>
      <div className="px-4 py-5 sm:p-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-300 truncate">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className="p-3 bg-black bg-opacity-20 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
}