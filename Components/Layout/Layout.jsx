import React from 'react'
import { Footer } from '../Footer'

export default function Layout({children}) {
  return (
    <div className='h-screen flex flex-col '>
        <div className='flex-grow bg-[#1F2025]  h-screen overflow-y-scroll'>
            {children}
        </div>
        <div className='bg-blue-800 p-0'>
            <Footer/>
        </div>
    </div>
  )
}
