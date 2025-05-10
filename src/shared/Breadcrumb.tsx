import Link from "next/link"
import { BsFillHouseDoorFill } from "react-icons/bs"
import { FaChevronCircleRight } from "react-icons/fa"

type BreadcrumbItem = {
  label: string
  href: string
  active?: boolean
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center px-1">
            {index > 0 && ( <FaChevronCircleRight className="w-4 h-4 text-gray-400 mr-1" aria-hidden="true" />)}
            {item.active ? (
              <span className="text-gray-500" aria-current="page">
                {index === 0 && <BsFillHouseDoorFill className="w-4 h-4 mr-1" />}
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                {index === 0 && <BsFillHouseDoorFill className="w-4 h-4 mr-1" />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}