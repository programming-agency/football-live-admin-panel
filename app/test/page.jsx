import React from 'react'

export default function page() {
    return (
        <div>
            {/* Header */}
            <div className='flex mt-5 justify-between items-center   bg-black'>
                <div>
                    <img className='h-5' src="https://i.ibb.co/TYHXhH8/download.jpg" alt="" />
                    <div className='uppercase text-[12px]'>BRAZIL: SERIE A</div>
                </div>
                <div className='uppercase text-[12px]'> REGULAR SEASON-1</div>


            </div>
            {/* card  */}

            <div>
                <div className='flex pt-5 justify-around '>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='p-[5px] bg-black'>
                            <img className='h-16 ' src="https://i.ibb.co/TYHXhH8/download.jpg" alt="" />
                        </div>
                        <p>Flamego</p>
                    </div>

                    <div className='flex flex-col gap-3 items-center'>
                        <div className='text-[12px]'> 2023-04-17 01:00</div>
                        <div className='text-2xl font-bold'> 3 - 0</div>
                        <div className='text-green-500 text-[12px]'>Match Finished</div>

                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='p-[5px] bg-black'>
                            <img className='h-16 ' src="https://i.ibb.co/TYHXhH8/download.jpg" alt="" />
                        </div>
                        <p>Flamego</p>
                    </div>
                </div>
                <div className='text-center pt-3'>
                    <p className='text-[12px]'>  estadio jarnalita Mario Filho Rio de jenero ,Rio de jenero</p>
                    <p className='text-[12px]' >redrio jeaso Pereira de Lima</p>
                </div>
            </div>

            {/* Event  */}

            <div>
                <div className='bg-black space-y-2'>
                    <div className='uppercase text-[14px]'><span className='px-[2px] py-[3px] text-black bg-[#01D098]'>event</span> Statick lineups players</div>
                    <div className='text-center uppercase font-bold text-[14px] pb-[6px]'> First half (1-0)</div>

                </div>

                <div className='bg-black'>
                    <div className='flex flex-col gap-1' >
                        <div className='bg-[red]'> 12 Ayrton Geson</div>
                        <div className='bg-[red]'> 12 Ayrton Geson</div>
                        <div> 12 Ayrton Geson</div>
                        <div> 12 Ayrton Geson</div>
                        <div> 12 Ayrton Geson</div>
                    </div>
                    <div className='text-center bg-black font-bold uppercase text-[14px] pb-[6px]'> First half (1-0)</div>
                </div>


            </div>

        </div>
    )
}
