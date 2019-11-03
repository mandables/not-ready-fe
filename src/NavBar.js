import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import { IconButton } from '@material-ui/core';

export default class NavBar extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        Home
                    </IconButton>

                    <IconButton edge="end" color="inherit" aria-label="menu">
                        About
                    </IconButton>

                </Toolbar>
            </AppBar>
        )
    }
}

// export default NavBar;