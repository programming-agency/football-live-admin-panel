import React from 'react'

export default function MatchesCard({ homeName, awayGoals, awayName, homeGoals, short, elapsed, venue, homePhoto, awayPhoto }) {
  return (
    <div className='space-y-2 bg-[#1F2025] p-3'>
      <div className='flex justify-between'>
        <div className='flex gap-5'>
          <div className='w-[80px] text-[#8389a1]'> 16:00 PM</div>
          <div className='flex gap-2'>
            <img className='h-5 ' src={homePhoto} />
            <p> {homeName}</p>
          </div>

        </div>
        <div>{homeGoals}</div>
      </div>
      {/* section 2 */}
      <div className='flex justify-between'>
        <div className='flex gap-5'>
          <div className='text-[red] w-[80px]'> {elapsed} - <span> {short}</span></div>
          <div className='flex gap-2'>
            <img className='h-5  ' src={awayPhoto} alt="" />
            <p>{awayName}</p>
          </div>

        </div>
        <div>{awayGoals}</div>
      </div>
      {/* section -3 */}

      <div className='flex gap-5 pt-[2px]'>
        <div className='text-[#8389a1]'> 2023-10-14</div>
        <div className=' text-[#3069db]'>
          {venue}
        </div>
      </div>


    </div>
  )
}
