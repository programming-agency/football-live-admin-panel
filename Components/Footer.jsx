import Link from 'next/link'
import React from 'react'
import { MdOutlineEmojiEvents, MdOutlineHive, MdOutlineOndemandVideo, MdOutlinePeopleAlt, MdReorder } from "react-icons/md";

export const Footer = () => {
  return (
    <div className='bg-black flex justify-between px-5 py-3 '>

      <Link href={"/matches"}>
        <div className='flex flex-col   items-center'>
          <MdOutlineHive className='text-3xl' />
          <div>Matches</div>
        </div>
      </Link>
      <Link href={"/leagues"}>
        <div className='flex flex-col   items-center'>
          <MdOutlineEmojiEvents className='text-3xl' />
          <div>Leagues</div>
        </div>
      </Link>
      <Link href={"/live"}>
        <div className='flex flex-col   items-center'>
          <MdOutlineOndemandVideo className='text-3xl' />
          <div>Live</div>
        </div>        
      </Link>
      <Link href={"/team"}>
        <div className='flex flex-col   items-center'>
          <MdOutlinePeopleAlt className='text-3xl' />
          <div>Team</div>
        </div>      
      </Link>
      <Link href={"/more"}>
        <div className='flex flex-col   items-center'>
          <MdReorder className='text-3xl' />
          <div>More</div>
        </div>
      </Link>


    </div>
  )
}
