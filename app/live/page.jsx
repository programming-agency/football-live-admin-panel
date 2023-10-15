import TVPlayer from '@/Components/TVPlayer'
import React from 'react'

export default function Live() {
    return (
        <div className='bg-[#1F2025]'>
            <TVPlayer />

            <div className='grid grid-cols-3 gap-5 my-10 px-5'>

                <div className='flex flex-col ' >
                    <img className='h-24 rounded-2xl' src="/tv.jpeg" alt="" />
                    <h1 className='text-center text-xl mt-2'>Live 6</h1>
                </div>
                <div className='flex flex-col ' >
                    <img className='h-24 rounded-2xl' src="/tv.jpeg" alt="" />
                    <h1 className='text-center text-xl mt-2'>Live 5</h1>
                </div>
                <div className='flex flex-col ' >
                    <img className='h-24 rounded-2xl' src="/tv.jpeg" alt="" />
                    <h1 className='text-center text-xl mt-2'>Live 4</h1>
                </div>
                <div className='flex flex-col ' >
                    <img className='h-24 rounded-2xl' src="/tv.jpeg" alt="" />
                    <h1 className='text-center text-xl mt-2'>Live 3</h1>
                </div>
                <div className='flex flex-col ' >
                    <img className='h-24 rounded-2xl' src="/tv.jpeg" alt="" />
                    <h1 className='text-center text-xl mt-2'>Live 2</h1>
                </div>
                <div className='flex flex-col ' >
                    <img className='h-24 rounded-2xl' src="/tv.jpeg" alt="" />
                    <h1 className='text-center text-xl mt-2'>Live 1</h1>
                </div>


            </div>
        </div>

    )
}
