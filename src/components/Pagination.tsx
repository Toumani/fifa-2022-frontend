import React from "react";

interface PaginationProps {
  currentPage: number,
  nbPages: number,
  setCurrentPage: (pageNb: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, nbPages, setCurrentPage }) => {
  const pageIndexes: number[] = [];
  for (let i = 1; i <= nbPages; i++)
    pageIndexes.push(i)
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <span
            className={
              currentPage === 1
              ? "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 cursor-not-allowed"
              : "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            }
            onClick={() => {
              if (currentPage !== 1)
                setCurrentPage(currentPage - 1)
            }}
          >
            Previous
          </span>
        </li>
        {
          pageIndexes.map(index =>
            <li key={index}>
              <span
                className={index === currentPage
                  ? "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white cursor-pointer"
                  : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                }
                onClick={() => {
                  if (currentPage !== index)
                    setCurrentPage(index)
                }}
              >
                { index }
              </span>
            </li>
          )
        }
        <li>
          <span className={
            currentPage === nbPages
              ? "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 cursor-not-allowed"
              : "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            }
            onClick={() => {
              if (currentPage !== nbPages)
                setCurrentPage(currentPage + 1)
            }}
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;