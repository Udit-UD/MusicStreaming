import React from 'react';
import {AiOutlineHome, AiOutlineHeart, AiOutlineFire, AiOutlinePlus} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import {PiPlaylist} from "react-icons/pi";
import "./Css/Sidebar.css";

const Sidebar = () => {
  return (
    <>
        <div className="sidebar-container">
            <div className="logo-heading">
                <GiHamburgerMenu style={{fontSize: "1.5rem", marginLeft:"-0.5em"}}/>
            </div>

            <div className="sidebar-items">
                <button className='sidebar-buttons'> <AiOutlineHome style={{fontSize: "1.4rem"}}/> {"   "} <p className='sidebar-text'> Home </p> </button>
                <button className='sidebar-buttons'> <PiPlaylist style={{fontSize: "1.4rem"}}/> {"   "} <p className='sidebar-text'> Local Music </p> </button>
                <button className='sidebar-buttons'> <AiOutlineHeart style={{fontSize: "1.4rem"}}/> {"   "} <p className='sidebar-text'> Premium </p> </button>
                <button className='sidebar-buttons'> <AiOutlineFire style={{fontSize: "1.4rem"}}/> {"   "} <p className='sidebar-text'> Trending </p> </button>
            </div>

            <hr className='horizontal-bar'/>

            <div className="sidebar-new">
                <button className='sidebar-buttons'> <AiOutlinePlus style={{fontSize: "1.4rem"}}/> {"   "} <p className='sidebar-text'> Create Music </p></button>
            </div>
            
        </div>
    </>
  )
}

export default Sidebar;