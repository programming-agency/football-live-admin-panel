"use client"
import TVPlayer from '@/Components/TVPlayer';
import React, { useEffect, useState } from 'react';


async function getData() {
    try {
        const res = await fetch('http://139.59.8.82/zahirfot/api.php?get_all_channels');

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (error) {
        throw error; // Rethrow the error to be caught in your component
    }
}

export default function Page() {
    const [datas, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getData();
                // console.log(result.LIVETV.category_name);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <main>
            <div>{result.LIVETV.length} </div>
            <TVPlayer />
            {
                datas.map((data, index) => (
                    <div key={index}>
                        <h1>{data.LIVETV.category_name}</h1>
                        <h1>hashebur</h1>
                    </div>
                ))
            }
        </main>
    );
}
