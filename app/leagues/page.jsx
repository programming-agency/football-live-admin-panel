"use client"
import LeaguesCard from '@/Components/LeaguesCard'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Leagues() {
  const [match, setMatch] = useState([]);


  const currentDate = new Date();
  const year = currentDate.getFullYear();
  console.log(year);

  const getMatch = (matchId) => {
    console.log(matchId);
  }

  useEffect(() => {
    getMatch()
  }, [])



  useEffect(() => {
    var config = {
      method: 'get',
      url: `https://v3.football.api-sports.io/leagues?season=${year}`,
      headers: {
        'x-rapidapi-key': '9934587b22930a733e2774cb3b1f3e1d',
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    };
    axios(config)
      .then(function (result) {
        setMatch(result.data.response);
        // console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  console.log(match);

  const handleSearch = (e) => {
    const inputValue = e.target.value;

    console.log(inputValue);

  };

  return (
    <div className='bg-[#1F2025]'>

      <div className='pt-3 px-3'>
        <input type="text"
          placeholder="Search Leagues "
          className="input bg-black border-white w-full"
          onChange={handleSearch}
        />
      </div>

      {/* League card */}

      <div className='grid grid-cols-3 gap-1'>
        {
          match.map((item, index) => (

            <Link key={index} href={`/leagues/${item.league.id}`}>
              <div onClick={() => getMatch(item.league.id)}>

                <LeaguesCard name={item.league.name} image={item.league?.logo} />
              </div>
            </Link>
          ))
        }
      </div>


      {/* <div className='pt-5 h-screen overflow-y-scroll grid grid-cols-3 gap-1 px-3'>
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
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
        <LeaguesCard name="Premier League" image='https://i.ibb.co/WDCwnxb/image.png' />
      </div> */}
    </div>
  )
}
