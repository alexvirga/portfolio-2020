import React, { useEffect } from "react";
import M from "materialize-css";

function Projects() {
    useEffect ( () => {
        let elems = document.querySelectorAll(".carousel");
        M.Carousel.init(elems, {})
    
      })


  return (
    <div className="projects">
      <h1 className="projects-header"> Check out my latest projects.</h1>
      <hr className="horizontal-line" />
      <div className="projects-container">


        <div className="project-1">
        <div className="project-info">
           <a href="https://exempla.io/" target="_blank"> 
           <div className="title-logo">
               <img className="exempla-logo"src={require("../Images/exempla/exempla-logo.png")}/> 
               <h1 className="project-title"> exempla.io </h1> 
               </div> 
               </a>
              <h4 className="project-description"> Exempla is a two-sided marketplace for recruiters and candidates that focuses on the most important part of the job application screening and preparation process: the code challenge. </h4>

          </div>
          <div className="carousel">
            <a class="carousel-item"><img  className="carousel-img" src={require('../Images/exempla/exempla-gif.gif')} ></img></a>
            <a className="carousel-item"><img  className="carousel-img" src={require('../Images/exempla/exempla-gif2.gif')} ></img></a>
            <a className="carousel-item"><img  className="carousel-img" src={require('../Images/exempla/exempla-events.jpg')} ></img></a>
            <a className="carousel-item"><img  className="carousel-img" src={require('../Images/exempla/exempla-profile.png')} ></img></a>
            <a className="carousel-item"><img  className="carousel-img" src={require('../Images/exempla/exempla-dashboard.jpg')} ></img></a>
            <a className="carousel-item"><img  className="carousel-img" src={require('../Images/exempla/exempla-assignment.jpg')} ></img></a>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Projects;
