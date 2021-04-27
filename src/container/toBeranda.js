import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Redirect } from 'react-router'

class toBeranda extends Component {
    render() {
        return(
            <Redirect to="/id/"/>
        );
    }
}

export default toBeranda;