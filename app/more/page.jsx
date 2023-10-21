import React from 'react'
import { MdInfoOutline, MdOutlineChevronRight,   MdOutlineShare,MdOutlineStarBorderPurple500, MdPrivacyTip } from "react-icons/md";

export default function More() {
    return (
        <div className='bg-[#1F2025] flex pt-5 flex-col gap-3  '>
            <div className='flex justify-between px-3 rounded-sm mx-3 py-3 bg-[#090A0C]'>
                <div className='flex justify-center items-center gap-3 '>
                    <div>
                        <MdInfoOutline className='text-2xl' />
                    </div>
                    <div> Abour us</div>
                </div>
                <div>
                    <MdOutlineChevronRight className='text-2xl'  />
                </div>
            </div>
            <div className='flex justify-between px-3 rounded-sm mx-3 py-3  bg-[#090A0C]'>
                <div className='flex justify-center items-center gap-3 '>
                    <div>
                        <MdOutlineShare className='text-2xl' />
                    </div>
                    <div> Share</div>
                </div>
                <div>
                    <MdOutlineChevronRight className='text-2xl' />
                </div>
            </div>
            <div className='flex justify-between px-3 rounded-sm mx-3 py-3  bg-[#090A0C]'>
                <div className='flex justify-center items-center gap-3 '>
                    <div>
                        <MdOutlineStarBorderPurple500 className='text-2xl' />
                    </div>
                    <div>  Rate Me</div>
                </div>
                <div>
                    <MdOutlineChevronRight className='text-2xl' />
                </div>
            </div>
            <div className='flex justify-between px-3 rounded-sm mx-3 py-3  bg-[#090A0C]'>
                <div className='flex justify-center items-center gap-3 '>
                    <div>
                        <MdPrivacyTip className='text-2xl' />
                    </div>
                    <div> Privacy Policy</div>
                </div>
                <div>
                    <MdOutlineChevronRight className='text-2xl' />
                </div>
            </div>
        </div>
    )
}
