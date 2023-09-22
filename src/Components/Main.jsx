import { useState } from "react";
import "./Css/Main.css";
import Navbar from "./Navbar";
import Profile from "../assets/Images/profile.png";
import Item from "./Item";
import tredingMusic from "./data";
import { topArtists } from "./data";
import Artists from "./Artists";
import { dhh } from "./data";
import Playbar from "./Playbar";
import Namastute from "../assets/Images/namastute.jpg";

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selected = {
    title: "Namastute",
    image: Namastute,
    artists: "Seedhe Maut"
  }

  const handleClick = (direction) => {
    if (direction === "left") {
      // Move to the previous item
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (direction === "right") {
      const nextIndex = (currentIndex + 1) % tredingMusic.length;
      setCurrentIndex((prevIndex) => (prevIndex < 5 ? prevIndex + 1 : 0));
    }
  };

  return (
    <div className="background">
      <div className="flare"></div>
      <Navbar />
      <div className="flex-container">
        <div className="main-container" style={{flex: "90%"}}>
          <div className="greeting-container">
            <div className="profile-container">
              <img
                src={Profile}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="greeting">
              <h3 className="greeting-primary">Welcome Mate'</h3>
              <p style={{ margin: "-10px 5px" }}>
                It's time to listen some good music
              </p>
            </div>
          </div>

          <div className="carousel-container">
            <div className="navigation-btn">
              <button className="left-btn" onClick={() => handleClick("left")}>
                {" "}
                {" < "}
              </button>
            </div>
            {tredingMusic.slice(currentIndex, currentIndex + 5).map((item) => (
              <Item
                key={item.id}
                name={item.name}
                artists={item.artists}
                image={item.image}
              />
            ))}

            <div className="navigation-btn">
              <button
                className="right-btn"
                onClick={() => handleClick("right")}
              >
                {" "}
                {" > "}
              </button>
            </div>
          </div>

          <h1 className="heading">Top Artists</h1>
          <div className="artist-container">
            {topArtists.map((item) => (
              <Artists name={item.name} image={item.image} key={item.id} />
            ))}
          </div>

          <h1 className="heading">Hardcore DHH</h1>

          <div className="carousel-container" id="trending">
            {dhh.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                artists={item.artists}
                image={item.image}
              />
            ))}
          </div>
          <h1 className="heading">Recommended Artists</h1>

          <div className="carousel-container" id="trending">
            {topArtists.map((item) => (
              <Artists
                key={item.id}
                name={item.name}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <Playbar selected = {selected} style={{flex: "10%"}}/>
      </div>
    </div>
  );
}
