import React from 'react'
import { MdOutlineInsertInvitation, MdOutlineStarBorderPurple500, MdMoreHoriz, MdMargin, MdSearch } from "react-icons/md";

export default function Header() {
    return (
        <div className='flex  justify-between'>
            <div className='flex gap-3'>
                <div className='text-2xl'> <MdSearch/></div>
                <div className='text-2xl'> <MdOutlineStarBorderPurple500 /></div>
            </div>
            <div>October</div>
            <div className='flex gap-3'>
                <div className='text-2xl'> <MdOutlineInsertInvitation /></div>
                <div className='text-2xl'> <MdMoreHoriz /></div>
            </div>

        </div>
    )
}
