import React, { useEffect } from "react";
import M from "materialize-css";

function Projects() {
  useEffect(() => {
    let elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {indicators: true});
  });

  return (
    <div className="projects">
      <h1 className="projects-header"> Check out my latest project: </h1>
      <hr className="horizontal-line" />
      <div className="projects-container">
        <div className="project-1">
          <div className="project-info">
            <a href="https://exempla.io/" target="_blank">
              <div className="title-logo">
                <img
                  className="exempla-logo"
                  src={require("../Images/exempla/exempla-logo.png")}
                />
                <h1 className="project-title"> exempla.io </h1>
              </div>
            </a>
            <h4 className="project-description">
              {" "}
              Exempla is a two-sided marketplace for recruiters and candidates
              that focuses on the most important part of the job application
              screening and preparation process: the code challenge. 
            </h4>
          </div>
          <div className="carousel-1">
            <div className="carousel">
              <a className="carousel-item">
                <img
                  className="carousel-img"
                  src={require("../Images/exempla/exempla-gif.gif")}
                ></img>
              </a>
              <a className="carousel-item">
                <img
                  className="carousel-img"
                  src={require("../Images/exempla/exempla-gif2.gif")}
                ></img>
              </a>
              <a className="carousel-item">
                <img
                  className="carousel-img"
                  src={require("../Images/exempla/exempla-events.jpg")}
                ></img>
              </a>
              <a className="carousel-item">
                <img
                  className="carousel-img"
                  src={require("../Images/exempla/exempla-profile.png")}
                ></img>
              </a>
              <a className="carousel-item">
                <img
                  className="carousel-img"
                  src={require("../Images/exempla/exempla-dashboard.jpg")}
                ></img>
              </a>
              <a className="carousel-item">
                <img
                  className="carousel-img"
                  src={require("../Images/exempla/exempla-assignment.jpg")}
                ></img>
              </a>
            </div>
          </div>

          <span>
            <a className="demo-link-exempla" href="url">
              Website
            </a>

            <a className="github-link-exempla" href="url">
              Github
            </a>
          </span>
          <br />
          <br />
        </div>
        {/* <h1 className="projects-header"> Past Projects: </h1> */}
        {/* <hr className="horizontal-line" /> */}
        {/* <div className="carousel-2">
          <div className="carousel"> */}
            {/*-------- Ourmask --------*/}
            {/* <a className="carousel-item">
              <div className="carousel-img">
                <div className="project-card">
                  <img
                    className="project-image"
                    src={require("../Images/ourmaskgif.gif")}
                  />
                  <div className="card-info">
                    <h1 className="card-title"> Ourmask.org</h1>
                    <p className="card-description">
                      {" "}
                      Share your homemade facemask designs.{" "}
                    </p>
                    <span className="card-links">
                      {" "}
                      <a className="demo-link" href="url">
                        {" "}
                        Website{" "}
                      </a>
                      <a className="github-link" href="url">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </a> */}

            {/*-------- Pipeline Portfolios --------*/}
            {/* <a className="carousel-item">
              <div className="carousel-img">
                <div className="project-card">
                  <img
                    className="project-image"
                    src={require("../Images/pipeline.jpg")}
                  />
                  <div className="card-info">
                    <h1 className="card-title"> Pipeline Portfolios</h1>
                    <p className="card-description">
                      {" "}
                      Real-time stock trading application. Robinhood,{" "}
                      <i>basically. </i>
                    </p>
                    <span className="card-links">
                      {" "}
                      <a className="demo-link" href="url">
                        {" "}
                        Website{" "}
                      </a>
                      <a className="github-link" href="url">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </a> */}

            {/*-------- Color Generator --------*/}
            {/* <a className="carousel-item">
              <div className="carousel-img">
                <div className="project-card">
                  <img
                    className="project-image"
                    src={require("../Images/colorschemes.jpg")}
                  />
                  <div className="card-info">
                    <h1 className="card-title"> Color Palette Generator</h1>
                    <p className="card-description">
                      {" "}
                      Generate color schemes for your designs.
                    </p>
                    <span className="card-links">
                      {" "}
                      <a className="demo-link" href="url">
                        {" "}
                        Website{" "}
                      </a>
                      <a className="github-link" href="url">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </a> */}

            {/*-------- Banter --------*/}
            {/* <a className="carousel-item">
              <div className="carousel-img">
                <div className="project-card">
                  <img
                    className="project-image"
                    src={require("../Images/bantergif.gif")}
                  />
                  <div className="card-info">
                    <h1 className="card-title"> Banter</h1>
                    <p className="card-description">
                      Adjust your share of the bill, including tip, in real
                      time.
                    </p>
                    <span className="card-links">
                      {" "}
                      <a className="demo-link" href="url">
                        {" "}
                        Website{" "}
                      </a>
                      <a className="github-link" href="url">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </a> */}

            {/*-------- Artwork --------*/}
            {/* <a className="carousel-item">
              <div className="carousel-img">
                <div className="project-card">
                  <img
                    className="project-image"
                    src={require("../Images/artwork.jpg")}
                  />
                  <div className="card-info">
                    <h1 className="card-title"> Artwork</h1>
                    <p className="card-description">
                      {" "}
                      Connecting mural-needing businesses and with local artists
                    </p>
                    <span className="card-links">
                      {" "}
                      <a className="demo-link" href="url">
                        {" "}
                        Website{" "}
                      </a>
                      <a className="github-link" href="url">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </a> */}

            {/*-------- Maphunt --------*/}
            {/* <a className="carousel-item">
              <div className="carousel-img">
                <div className="project-card">
                  <img
                    className="project-image"
                    src={require("../Images/maphunt.jpg")}
                  />
                  <div className="card-info">
                    <h1 className="card-title"> Maphunt</h1>
                    <p className="card-description">
                      Search for 4 random generated NYC landmarks using google
                      street view.
                    </p>
                    <span className="card-links">
                      {" "}
                      <a className="demo-link" href="url">
                        {" "}
                        Website{" "}
                      </a>
                      <a className="github-link" href="url">
                        Github
                      </a> */}
                    {/* </span>
                  </div>
                </div>
              </div>
            </a> */}
          {/* </div>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
