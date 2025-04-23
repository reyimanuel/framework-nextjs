"use client"

import { FaChevronCircleRight } from "react-icons/fa"
import { FaCircleChevronLeft } from "react-icons/fa6"

type EventPaginationProps = {
  totalPages: number
  currentPage: number
  onPageChange?: (page: number) => void
}

export default function EventPagination({ totalPages, currentPage, onPageChange }: EventPaginationProps) {
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page)
    }
  }

  // Generate page numbers
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="mt-10 flex justify-center">
      <nav aria-label="Pagination">
        <ul className="inline-flex items-center -space-x-px">
          {/* Previous button */}
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Previous</span>
              <FaCircleChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
          </li>

          {/* Page numbers */}
          {pageNumbers.map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
                aria-current={currentPage === page ? "page" : undefined}
                className={`px-3 py-2 leading-tight border border-gray-300 ${
                  currentPage === page
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {page}
              </button>
            </li>
          ))}

          {/* Next button */}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Next</span>
              <FaChevronCircleRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
