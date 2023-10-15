// components/TVPlayer.js
import React from 'react';

const TVPlayer = () => {
    return (
        <div className="w-full h-full">
            <video className="w-full h-auto" controls>
                <source src="/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default TVPlayer;
