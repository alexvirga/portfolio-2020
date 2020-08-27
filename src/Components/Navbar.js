import React, { Component } from "react"
import {Link } from "react-router-dom";


class Navbar extends Component  {
    render() {
        return (
            <div className="navbar">
            <nav>
              <ul>
                <li>
                  <Link to="/">About Me</Link>
                </li>
                <li>
                  <Link to="/about">Experience</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
          </div>
        )
    }
}

export default Navbar