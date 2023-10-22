import React from 'react'

export default function ImageCard({ image }) {
    return (
        <div>
            <img className="h-16" src={image} alt="" />
        </div>
    )
}
