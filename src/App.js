import React, { Component } from "react";
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import AboutUs from "./about/about";
import Reservations from "./Reservations";
import Signin from "./Regester/Signin";
import Signup from "./Regester/Signup";
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Patiants from './Form/patiants'
import Nav from './Home/Nav'
import Hospital from './Appointments/Hospital'
import Sections from './Appointments/Sections'
import Doctors from './Appointments/Doctors'
import Physicaltherapy from './Appointments/Physicaltherapy'



export class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Nav />
        <Switch>
          <Route path="/Home" component={() => <Home />} />
          <Route path="/AboutUs" component={() => <AboutUs />} />
          <Route path="/Reservations" component={() => <Reservations />} />
          <Route path="/signin" component={() => <Signin />} />
          <Route path="/signup" component={() => <Signup />} />
          <Route path="/patiants" component={() => <Patiants />} />

          <Route path="/Hospital" component={() => <Hospital />} />
          <Route path="/Sections" component={() => <Sections />} />
          <Route path="/Doctors" component={() => <Doctors />} />
          <Route path="/Physicaltherapy" component={() => <Physicaltherapy />} />

        </Switch>
      </BrowserRouter>
    )
  }
}

export default App



