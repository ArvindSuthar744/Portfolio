import React, { useState } from 'react'

function Navigation() {
  // const handeleNavbtn = () =>  {
  //   var x = document.querySelector('.nav-list') ;
  //     x.classList.remove("nav-list");
  //     x.classList.add("nav-listadd");
  // }

  return (
    <>
      <section className="navigation">
        <div className="nav">
          <div className="logo-section">
            <h2 id="logo">ArvindK</h2>
          </div>
          <ul className="nav-list">
            <a href="#"><li>Home</li></a>
            <a href="#about" ><li>About</li></a>
            <a href="#skills" ><li>Skills</li></a>
            <a href="#project" ><li>Projects</li></a>
            <a href="#contact" ><li>Contact</li></a>
          </ul>
          <div className="nav-humbar">
            <i className="fa-solid fa-bars" ></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navigation
