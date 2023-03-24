import React from "react";
import "./Content.css"

export default function Navbar() {
  return (

    <section className="navbar">

      <div className="left-side-navbar">
        <img
          style={{ height: '31px' }}
          src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png" />
        <input className="search-box" type="text" placeholder="Search a blog"></input>
      </div>
{/* 
      <div className="right-side-navbar">
        <img
          style={{ marginLeft: '10px', marginRight: '10px' }} src="https://cdn-icons-png.flaticon.com/512/3597/3597089.png" />

        <img
          style={{ marginLeft: '10px', marginRight: '10px' }} src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png" />

        <img
          style={{ marginLeft: '10px', marginRight: '10px' }} src="https://cdn-icons-png.flaticon.com/512/10131/10131559.png" />

        <img style={
          {
            height: '10px',
          }
        } src="https://cdn-icons-png.flaticon.com/512/892/892498.png" />
      </div> */}

    </section>
  )
}