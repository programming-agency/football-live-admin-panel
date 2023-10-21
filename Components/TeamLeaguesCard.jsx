import React from 'react'

export default function TeamLeaguesCard({ image, name, title, blog, founded }) {
    return (
        <div className='flex gap-5 items-center bg-[#1F2025] py-5 px-5'>
            <div>
                <img className="h-14" src={image} />
            </div>
            <div className='-space-y-1'>
                <p className='text-lg'>{name}</p>
                <p className='text-base text-[#3069db] pt-1'>{title}</p>
                <div className='flex gap-2'>
                    <p className='text-[#8389a1]'>{blog}</p>
                    <p className='text-[#8389a1]'>{founded}</p>
                </div>
            </div>
        </div>
    )
}
