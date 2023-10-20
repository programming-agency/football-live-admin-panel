"use client"
import React from 'react'
// import { useRouter } from 'next/router';

export default function SingleMatch({ params }) {
    const id = params.id
    console.log(params)
    console.log(id);
    return (

        <div className='bg-[#1F2025] h-screen'>
            <div id="wg-api-football-game"
                data-host="v3.football.api-sports.io"
                data-key="9934587b22930a733e2774cb3b1f3e1d"
                data-id={id}
                data-theme="dark"
                data-refresh="15"
                data-show-errors="false"
                data-show-logos="true">
            </div>
            <script
                type="module"
                src="https://widgets.api-sports.io/2.0.3/widgets.js" defer >
            </script>
        </div>
    )
}


