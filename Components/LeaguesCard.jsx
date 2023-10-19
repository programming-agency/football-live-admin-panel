import React from 'react'

export default function LeaguesCard({ image, name }) {
  return (
    <div className=' flex flex-col justify-center items-center rounded-sm bg-black px-4 py-2'>
      <img className='h-20' src={image} alt="" />
      <p className='mt-3 text-xs'>{name}</p>
    </div>
  )
}
