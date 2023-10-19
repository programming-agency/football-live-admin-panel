import React from 'react'

export default function ImageCard({image}) {
    return (
        <div>
            <img className="h-20 w-20 " src={image} alt="" />
        </div>
    )
}
 