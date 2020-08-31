import React, { Component } from "react"
import profilepic from "../Images/circle-cropped.png"

class About extends Component {
    render() {

        return(
            <div className="about-container">
                <div className="about-line">

                <h1 className="about-text"> About Me </h1>
                <h3 className="about-subheading"> I'm a resourceful Full Stack developer with a background in Audio/Sound Design, TV Advertising, and Data Analytics. I have a passion for the technology & data we tend to overlook in life. From the sound design of public transit alerts, to the accessibility features on your banking app, I strive to have a deeper insight of the products, people, and processes I am involved with.</h3>
                </div>
                <img className="profile-pic" src={profilepic} alt="Avatar"/>  
               
               

            </div>
        )
    }
}

export default About