"use client"
import React from 'react';

import ReactApexChart from 'react-apexcharts';

export default function Admin() {

    const state = {
        series: [
            {
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100],
            },

        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z',
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
            grid: {
                row: {
                    colors: ['transparent'],
                    opacity: 0.5,
                },
                show: false,
            },
            toolbar: {
                show: false, // Set toolbar to false to hide it
            },
        },
    };

    return (
        <div>
            {/* Header */}
            <div className="navbar bg-primary-focus mb-5">
                <div className="flex-1">
                    <a className="normal-case text-xl">FootBall Live Admin Panel</a>
                </div>
                <div>
                    <button className='mr-3'>Setting</button>
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://i.ibb.co/5c0LHJd/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image-5809521.png" alt="Avatar" />
                    </div>
                </label>
            </div>

            {/* Chart */}
            <div className='grid md:grid-cols-2 gap-5 px-2'>

                <div className="card  bg-white text-primary-content">
                    <h1 className='text-black text-2xl text-center my-5  '> Matches</h1>
                    <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
                </div>
                <div className="card  bg-white text-primary-content">
                    <h1 className='text-black text-2xl text-center my-5  '>Leagues</h1>
                    <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
                </div>
                <div className="card  bg-white text-primary-content">
                    <h1 className='text-black text-2xl text-center my-5  '> TV</h1>
                    <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
                </div>
                <div className="card  bg-white text-primary-content">
                    <h1 className='text-black text-2xl text-center my-5  '> Team</h1>
                    <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
                </div>


            </div>
        </div>
    );
}
