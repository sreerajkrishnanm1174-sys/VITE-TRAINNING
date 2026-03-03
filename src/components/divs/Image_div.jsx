import React from 'react'
import Read_more from '../button/Read_more'

function Image_div({img,descr}) {
  return (
    <div className=" relative bg-bl-200 text-center w-fit  h-fit">
        <img
        src={img}
        alt="image"
        className="w-130 h-100"
        
        />

        <div className=" absolute z-50 bg-white shadow-md h-50 w-110 -bottom-20 left-1/2 -translate-x-1/2 text-center rounded-lg p-6 ">

            <p className="text-3xl text-gray-600 font-semibold">
                {descr}
            </p>

            <Read_more/>

        </div>
    </div>
  )
}

export default Image_div