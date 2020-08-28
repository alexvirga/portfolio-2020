import React, { Component } from "react"
import profilepic from "../Images/circle-cropped.png"

class Intro extends Component {
    render() {

        return(
            <div className="intro-container">
                <div className="intro-line">

                <h1 className="intro-text"> Hi, I'm Alex </h1>
                <h3 className="intro-subheading"> I'm a full-stack web developer.</h3>
                </div>
                <img className="profile-pic" src={profilepic} alt="Avatar"/>  
               
               

            </div>
        )
    }
}

export default Intro