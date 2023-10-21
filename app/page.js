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
  const [favoriteLeague, setFavoriteLeague] = useState([]);


  // date formate
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
  const day = currentDate.getDate();

  // const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  // console.log(formattedDate);

  const getMatch = (matchId) => {
    console.log(matchId);
    var config = {
      method: 'get',
      url: `https://v3.football.api-sports.io/fixtures?season=${year}&league=${matchId}`,
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

  }

  useEffect(() => {
    fetch('/favoriteLeague.json')
      .then(res => res.json())
      .then(data => setFavoriteLeague(data))
  }, [])




  useEffect(() => {

    getMatch(39)
  }, [])
  console.log(match);

  return (
    <div className=''>
      <div className='p-3'>
        <Header />
      </div>
      <div className='py-3'>
        <div className=' flex gap-10 overflow-x-scroll'>

          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
        </div>
      </div>


      {/* carousel item */}
      <div className="carousel w-screen bg-black carousel-center ">
        <div className="carousel-item p-2 gap-2">
          {
            favoriteLeague.map((item, index) => (
              <div key={index} onClick={() => getMatch(item.id)}>
                < ImageCard image={item.image} />
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
