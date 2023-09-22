import React from 'react';
import "./Css/Artists.css";

export default function Artists({image, name}) {
  return (
    <div className='artist-cont'>
        <div className="artist-img">
            <img src={image} alt="" />
        </div>
        <div className="artist-name">
            {name}
        </div>
    </div>
  )
}
