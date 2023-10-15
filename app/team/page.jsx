import TeamLeaguesCard from '@/Components/TeamLeaguesCard'
import React from 'react'

export default function Team() {

  return (
    <div className='bg-[#1F2025]'>
      {/* search bar */}
      <div className='mt-3 px-3'>
        <input type="text" placeholder="Search Leagues " className="input bg-black border-white w-full" />
      </div>
      {/* slider leagues */}
      <div className="flex pt-5 overflow-x-scroll">
        <div className="flex">
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />
          <img className="h-14" src="https://i.ibb.co/TDGYCdk/download.png" alt="" />

        </div>
      </div>

      {/*show leagues details  */}
      <div className='mt-5 bg-black h-[400px] overflow-y-scroll space-y-[2px]'>

        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
      </div> 

    </div>
  )
}
