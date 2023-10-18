import Header from '@/Components/Header'
import ImageCard from '@/Components/ImageCard'
import MatchesCard from '@/Components/MatchesCard'
import SubHeader from '@/Components/SubHeader'
import React from 'react'

export default function Matches() {
  return (
    <div className=''>
      <div className='p-3'>
        <Header />
      </div>
      <div className='py-3'>
        <SubHeader />
      </div>
      {/* carousel item */}
      <div className="carousel p-2 bg-black carousel-center     space-x-2 ">
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

      {/* Matches view  */}
      <div className='h-screen overflow-y-scroll bg-black space-y-[1px]'>
        <MatchesCard />
        <MatchesCard />
        <MatchesCard />
        <MatchesCard />
        <MatchesCard />
        <MatchesCard />
        <MatchesCard />
        <MatchesCard />
        <MatchesCard />
        <MatchesCard />
      </div>
    </div>
  )
}
