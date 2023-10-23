"use client"
import MatchesCard from '@/Components/MatchesCard';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Single({ params }) {
  const id = params.id
  console.log(params)
  console.log(id);

  const [match, setMatch] = useState([]);


  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
  const day = currentDate.getDate();

  useEffect(() => {

    var config = {
      method: 'get',
      url: `https://v3.football.api-sports.io/fixtures?season=${year}&league=${id}`,
      headers: {
        'x-rapidapi-key': '9934587b22930a733e2774cb3b1f3e1d',
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    };

    axios(config)
      .then(function (result) {
        setMatch(result.data.response);
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  console.log(match);

  return (
    <div className='h-screen overflow-y-scroll bg-black space-y-[1px]'>
      {
        match.map((item, index) => (
          <div key={index}>
            {/* {item.fixture.id} */}
            <Link href={`/leagues/${id}/${item.fixture.id}`}>
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
  )
}
