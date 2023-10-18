import ImageCard from '@/Components/ImageCard'
import TeamLeaguesCard from '@/Components/TeamLeaguesCard'
import React from 'react'

export default function Team() {

  return (
    <div className='bg-[#1F2025]'>
      {/* search bar */}
      <div className='pt-3 pb-3 px-3'>
        <input type="text" placeholder="Search Leagues " className="input bg-black border-white w-full" />
      </div>
      {/* slider leagues */}
      <div className="carousel carousel-center max-w-md  p-2 bg-black  space-x-2">
        <div className="carousel-item">
          
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
        <div className="carousel-item">
          <ImageCard image="https://i.ibb.co/TDGYCdk/download.png" />
        </div>
      </div>

      {/*show leagues details  */}
      <div className='h-[100vh] overflow-y-scroll'>

        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
        <TeamLeaguesCard image={"https://i.ibb.co/TDGYCdk/download.png"} name={" Manchester United"} title="Old Trafford" blog='England - 1881' />
      </div>

    </div>
  )
}
