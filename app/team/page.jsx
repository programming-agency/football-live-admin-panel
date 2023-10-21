"use client"

import ImageCard from '@/Components/ImageCard'
import TeamLeaguesCard from '@/Components/TeamLeaguesCard'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Team() {

  // league shows
  const [match, setMatch] = useState([]);
  const [team, setTeams] = useState([]);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  console.log(year);


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
        // console.log(JSON.stringify(response.data));
        setMatch(result.data.response);
        // console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])


  const getLeagueTeams = (leagueID) => {
    console.log(leagueID);
    var config = {
      method: 'get',
      url: `https://v3.football.api-sports.io/teams?season=${year}&league=${leagueID}`,
      headers: {
        'x-rapidapi-key': '9934587b22930a733e2774cb3b1f3e1d',
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    };

    axios(config)
      .then(function (result) {
        // console.log(JSON.stringify(response.data));
        setTeams(result.data.response);
        // console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getLeagueTeams(2)
  }, [])

  console.log(team);

  return (
    <div className='bg-[#1F2025]'>
      {/* search bar */}
      <div className='pt-3 pb-3 px-3'>
        <input type="text" placeholder="Search Leagues " className="input bg-black border-white w-full" />
      </div>

      {/* slider leagues */}
      <div className="carousel w-screen   bg-black carousel-center ">
        <div className="carousel-item p-2 gap-2">
          {
            match.map((item, index) => (
              <div key={index} onClick={() => getLeagueTeams(item.league.id)}>
                < ImageCard image={item.league?.logo} />
              </div>
            ))

          }
        </div>
      </div>
      
      {/*show leagues details  */}
      <div className='bg-black space-y-1'>


        {
          team.map((item, index) => (
            <div key={index} >
              <TeamLeaguesCard
                image={item.team?.logo}
                name={item.team?.name}
                title={item.venue?.name}
                blog={item.team?.country}
                founded={item.team?.founded}
              />
            </div>
          ))

        }
      </div>

    </div>
  )
}
