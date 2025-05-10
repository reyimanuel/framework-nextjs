import type { ReactNode } from "react"

interface StatCardProps {
  title: string
  value: string
  icon: ReactNode
  bgColor: string
  change?: {
    value: string
    isPositive: boolean
  }
}

export default function StatCard({ title, value, icon, bgColor, change }: StatCardProps) {
  return (
    <div
      className={`bg-gradient-to-r ${bgColor} rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
    >
      <div className="px-6 py-6 sm:p-6 relative">
        <div className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 opacity-20">{icon}</div>
        <div className="relative z-10">
          <p className="text-sm font-medium text-gray-300 mb-1">{title}</p>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold text-white">{value}</p>
            {change && (
              <span className={`ml-2 text-sm font-medium ${change.isPositive ? "text-green-400" : "text-red-400"}`}>
                {change.isPositive ? "↑" : "↓"} {change.value}
              </span>
            )}
          </div>
          {change && (
            <p className="text-xs text-gray-300 mt-1">
              {change.isPositive ? "Increased" : "Decreased"} since last month
            </p>
          )}
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <a href="#" className="text-xs text-white/80 hover:text-white transition-colors flex items-center">
            View details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
