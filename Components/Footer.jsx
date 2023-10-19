import Link from 'next/link'
import React from 'react'
import { MdOutlineEmojiEvents, MdOutlineHive, MdOutlineOndemandVideo, MdOutlinePeopleAlt, MdReorder } from "react-icons/md";

export const Footer = () => {
  return (
    <div className='bg-[#18191B] flex justify-between px-5 py-3 '>

      <Link href={"/"}>
        <div className='flex flex-col   items-center'>
          <MdOutlineHive className='text-2xl' />
          <div>Matches</div>
        </div>
      </Link>
      <Link href={"/leagues"}>
        <div className='flex flex-col   items-center'>
          <MdOutlineEmojiEvents className='text-2xl' />
          <div>Leagues</div>
        </div>
      </Link>
      <Link href={"/live"}>
        <div className='flex flex-col   items-center'>
          <MdOutlineOndemandVideo className='text-2xl' />
          <div>Live</div>
        </div>
      </Link>
      <Link href={"/team"}>
        <div className='flex flex-col   items-center'>
          <MdOutlinePeopleAlt className='text-2xl' />
          <div>Team</div>
        </div>
      </Link>
      <Link href={"/more"}>
        <div className='flex flex-col   items-center'>
          <MdReorder className='text-2xl' />
          <div>More</div>
        </div>
      </Link>


    </div>
  )
}
