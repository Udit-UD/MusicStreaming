import React from 'react';
import "./Css/Navbar.css";

export default function Navbar() {
  return (
    <>
        <div className="navbar-container">
            <input
            type="text"
            placeholder="Search Your Taste"
            className="search-input"
          />
            <div className="logo-heading-container">
                <div className="logo-heading">
                    WebWizardry.mp3
                </div>
            </div>
        </div>
    </>
  )
}
