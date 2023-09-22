import {useState} from 'react';
import "./Playbar.css"
import { BiMusic, BiPlayCircle, BiShuffle, BiSkipNext, BiSkipPrevious} from "react-icons/bi";
import {RxLoop} from "react-icons/rx";


export default function Playbar({selected}) {
    const [open, setOpen] = useState(false);
    const handleChange = () => {
        setOpen(!open);
    }

 
  return (
    <>
        <div className="playbar-container" onClick={()=>handleChange()} style={{ width: open ? '16%' : '9%' }}>
            <div className="music-cover">
                {selected ? <img src={selected.image} alt="" /> : <BiMusic />}
            </div>

            <div className="song-title" style={{display:open?"block":'none', marginTop:"5px"}}>
                <p style={{fontSize: "1.2rem", marginBottom: "0px"}}>{selected ? selected.title : "Random Title!"}</p>
                <p style={{fontSize: "0.9rem", color: "#d7c4c4", marginTop: "0px"}}>{selected ? selected.artists : " "}</p>
            </div>

            <div className="progress-container"style={{display:open?"block":'none'}}>
            <div className='progress-bar' style={{ width: `40%` }}>
                <div className="left-bar"></div>
                <div className="ball"></div>
            </div>
            </div>


            <div className={open ? "basic-icons-opened" : "basic-icons" }>
                <BiShuffle style={{marginTop: "1em"}} className='play-btns'/>
                <BiSkipPrevious style={{marginTop:"1em"}} className='main-icons' />
                <BiPlayCircle style={{marginTop:"1em"}} className='main-icons' />
                <BiSkipNext style={{marginTop:"1em"}} className='main-icons' />
                <RxLoop style={{marginTop: "1em"}} className='play-btns'/>

            </div>
        </div>
    </>
  )
}
