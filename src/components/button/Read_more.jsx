import React from 'react'

function Read_more() {
  return (
    <a
        href="#"
        className="mt-4 text-2xl text-green-500 flex justify-center items-center gap-2 
        whitespace-nowrap font-semibold
        transition-all duration-300 ease-in-out
        hover:text-green-600 hover:gap-3"
    >
        <span>Readmore</span>

        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 mt-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        >
        <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" />
        </svg>

    </a>
  )
}

export default Read_more