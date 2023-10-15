import LeaguesCard from '@/Components/LeaguesCard'
import React from 'react'

export default function Leagues() {
  return (
    <div className='bg-[#1F2025]'>

      <div className='mt-3 px-3'>
        <input type="text" placeholder="Search Leagues " className="input bg-black border-white w-full" />
      </div>

      <div className='pt-5 grid grid-cols-3 gap-1 px-3'>
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />     
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />     
      </div>
    </div>
  )
}
