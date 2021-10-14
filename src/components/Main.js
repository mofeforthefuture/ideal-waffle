import React from 'react'
import {Sidebar,Navbar,Profile} from './index'
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

function Main() {
    let { path } = useRouteMatch();

    return (
        <>
        <Sidebar />
        <div style={{width:'100%'}}>
            <Navbar />
            <Switch>
          <Route exact path={`${path}`}>
          <Profile/>
          </Route>
          {/* <Route  path={`${path}`}>
            <Login />
          </Route> */}
        </Switch>
        </div>
        </>
    )
}

export default Main
