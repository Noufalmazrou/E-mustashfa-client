

import React, { Component } from "react";
import './App.css';
import { Route, BrowserRouter, Switch,NavLink} from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Reservations from "./Reservations";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';




export class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navbar   fixed="top" variant="primary" style={{ opacity: '0.8' }}>
          <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
        width="90"
        height="30"
        className="d-inline-block align-top"
      />
      {''}
    </Navbar.Brand>

            <Nav >
            <NavLink className="nav-link" to="/Home" >Home</NavLink>
              <NavLink className="nav-link" to="/AboutUs" >About us</NavLink>
              <NavLink className="nav-link" to="/ContactUs" >Contact us</NavLink>
              <NavLink className="nav-link" to="/Reservations" >Reservations</NavLink>
              <NavLink className="nav-link" to="/Signin" >Sign In</NavLink>
              <NavLink className="nav-link" to="/Signup" >Sign Up</NavLink>


            </Nav>
          </Navbar>
          <Nav >
          </Nav>
          <Switch>
            <Route path="/Home" render={ ()=> <Home/>} />
            <Route path="/AboutUs" render={ ()=> <AboutUs/>} />
            <Route path="/ContactUs" render={ ()=> <ContactUs />} />
            <Route path="/Reservations" render={ ()=> <Reservations/>} />
            <Route path="/Signin" render={ ()=> <Signin/>} />
            <Route path="/Signup" render={ ()=> <Signup/>} />

          </Switch>
        </BrowserRouter>

    )
  }
}

export default App



