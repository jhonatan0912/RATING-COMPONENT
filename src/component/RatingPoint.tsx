import React from 'react'

const RatingPoint = ({ number }: { number: string }) => {
  return (
    <button
      className='bg-gray-700 rounded-full w-12 h-12 flex justify-center items-center text-lg text-[#959eac] font-semibold'>
      {number}
    </button>
  )
}

export default RatingPoint