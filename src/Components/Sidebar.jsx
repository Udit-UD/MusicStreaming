import React from 'react';
import {AiOutlineHome, AiOutlineHeart, AiOutlineFire, AiOutlinePlus} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import {PiPlaylist} from "react-icons/pi";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
        <div className="sidebar-container">
            <div className="logo-heading">
                <GiHamburgerMenu style={{fontSize: "1.5rem", marginLeft:"-0.5em"}}/>
            </div>

            <div className="sidebar-items">
                <button className='sidebar-buttons'> <AiOutlineHome /> {"   "} Home </button>
                <button className='sidebar-buttons'> <PiPlaylist /> {"   "} Local Music </button>
                <button className='sidebar-buttons'> <AiOutlineHeart /> {"   "} Premium </button>
                <button className='sidebar-buttons'> <AiOutlineFire /> {"   "} Trending </button>
            </div>

            <hr className='horizontal-bar'/>

            <div className="sidebar-new">
                <button className='sidebar-buttons'> <AiOutlinePlus /> {"   "} Create Playlist</button>
            </div>
            
        </div>
    </>
  )
}

export default Sidebar;