import React from 'react'
import "./Item.css";
import {AiFillPlayCircle} from "react-icons/ai";
export default function Item({name, artists, image}) {
  return (
    <div className='item-container'>
        <div className="item-img">
            <img src={image} alt="" />
            <div className="play-button-overlay">
                <AiFillPlayCircle />
            </div>
        </div>

        <div className="details">
            <div className="title">
                {name}
            </div>
            <div className="description">
                {artists}
            </div>
        </div>
        
    </div>
  )
}
