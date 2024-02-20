import React from 'react'
import ReactDOM from 'react-dom/client'
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import About from "./About"
import Users from './Users';
import Menu from "./Menu"
import Home from './Home';

const Routing =()=>{
    return(
        <Router>
        <div>
          <nav>
            <ul>
            <li>
                <Link to="/">menu</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          </div>
          
          <Switch>
          {/* <Routes> */}
          <Route path="/about">
            <About></About> 
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/">
           <Menu/>
          </Route>
          {/* </Routes> */}
        </Switch>
        
      </Router>
     
    );
}; 

export default Routing;