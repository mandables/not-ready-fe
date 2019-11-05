import React, { Component } from 'react'


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul className="nav-links">
                        <li onClick={() => this.props.clickHome()}>Home</li>
                        <li onClick={() => this.props.clickAbout()}>About</li>
                    </ul>
                </div>
            </div>
        )
    }
}
