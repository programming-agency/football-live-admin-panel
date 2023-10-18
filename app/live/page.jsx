"use client"

import TVPlayer from "@/Components/TVPlayer"
import { useState } from "react"

async function getData() {
    const res = await fetch('http://139.59.8.82/zahirfot/api.php?get_all_channels')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {

    const [currentTv, setCurrentTv] = useState("")

    const data = await getData()
    console.log(data.LIVETV);
    return <main>

        <TVPlayer channel_url={currentTv} />

        <div className="grid grid-cols-2 gap-2 pt-10">
            {
                data.LIVETV.map((item, index) => (

                    <div onClick={() => setCurrentTv(item.channel_url)} key={index}>
                        <div className="flex flex-col justify-center items-center">
                            <div> <img src={item.category_image} alt="" /></div>
                            <div>  {item.channel_title}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </main>
}