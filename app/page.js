"use client"

import Header from '@/Components/Header'
import ImageCard from '@/Components/ImageCard'
import MatchesCard from '@/Components/MatchesCard'
import SubHeader from '@/Components/SubHeader'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Link from 'next/link'

export default function Matches() {
  const [match, setMatch] = useState([]);


  var config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/fixtures?date=2023-10-21',
    headers: {
      'x-rapidapi-key': '9934587b22930a733e2774cb3b1f3e1d',
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };

  axios(config)
    .then(function (result) {
      // console.log(JSON.stringify(response.data));
      setMatch(result.data.response);
      // console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });

  // useEffect(() => {


  // }, [match])
  // console.log(match);

  return (
    <div className=''>
      <div className='p-3'>
        <Header />
      </div>
      <div className='py-3'>
        <SubHeader />
      </div>


      {/* carousel item */}
      <div className="carousel   bg-black carousel-center ">
        <div className="carousel-item p-2 gap-2">
          {
            match.map((item, index) => (
              <div key={index}>
                < ImageCard image={item.league?.logo} />
              </div>
            ))

          }
        </div>
      </div>

      {/* Matches view  */}
      <div className='h-screen overflow-y-scroll bg-black space-y-[1px]'>
        {
          match.map((item, index) => (
            <div key={index}>
              {/* {item.fixture.id} */}
              <Link href={`/matches/${item.fixture.id}`}>
                <MatchesCard short={item.fixture.status?.short}
                  elapsed={item.fixture.status?.elapsed}
                  homeName={item.teams?.home?.name}
                  homePhoto={item.teams?.home?.logo}
                  awayName={item.teams?.away?.name}
                  awayPhoto={item.teams?.away?.logo}
                  homeGoals={item.goals?.home}
                  awayGoals={item.goals?.away}
                  venue={item.fixture?.venue.name}
                />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
