import React from 'react'

function Primary_button({children}) {
  return (
    <button className="px-8 py-3 bg-green-500 text-white rounded-sm flex items-center justify-center gap-2  hover:bg-green-600 transition font-medium">
     {children}
    </button>
  )
}

export default Primary_button