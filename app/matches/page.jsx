import Header from '@/Components/Header'
import ImageCard from '@/Components/ImageCard'
import SubHeader from '@/Components/SubHeader'
import React from 'react'

export default function Matches() {
  return (
    <div>
      <div className='p-3'>
        <Header />
      </div>
      <div className='py-3'>
        <SubHeader />
      </div>
       {/* carousel item */}
        <div className="carousel carousel-center max-w-md   space-x-4 bg-neutral rounded-box">
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
      
    </div>
  )
}
