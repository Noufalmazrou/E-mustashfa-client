import React, { Component } from "react";
import './App.css';
import { Route, BrowserRouter, Switch,NavLink} from 'react-router-dom';
import AboutUs from "./about/about";
import Reservations from "./Reservations";
import Signin from "./Register/Signin";
import Signup from "./Register/Signup";
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Patiants from './Form/patiants'
import Nav from './Home/Nav'
import Upload from './uploading/Upload'
import Changepass from './Register/Changepass'




export class App extends Component {
  render() {
    return (
        <BrowserRouter>
     
         <Nav/>
          <Switch>
            <Route path="/Home" component={ ()=> <Home/>} />
            <Route path="/AboutUs" component={ ()=> <AboutUs/>} />
            <Route path="/Reservations" component={ ()=> <Reservations/>} />
            <Route path="/signin" component={ ()=> <Signin />} />
            <Route path="/signup" component={ ()=> <Signup />} />
            <Route path="/patiants" component={ ()=> <Patiants/>} />
            {/* You can delete this VVV */}
            <Route path="/upload" component={ ()=> <Upload/>} /> 
            <Route path="/Changepass" component={ ()=> <Changepass/>} />

          </Switch>
        </BrowserRouter>
    )
  }
}

export default App



