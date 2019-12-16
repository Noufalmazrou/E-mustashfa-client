import React, { Component } from "react";
import './App.css';
import { Route, BrowserRouter, Switch,NavLink} from 'react-router-dom';
import AboutUs from "./about/about";
import Reservations from "./Reservations";
import Signin from "./Register/Signin";
import Signup from "./Register/Signup";
import Home from './Home/Home'
import Medicalrecords from './Home/Medicalrecords'
import Tests from './Home/Tests'
import Drugs from './Home/Drugs'
import Rays from './Home/Rays'
import 'bootstrap/dist/css/bootstrap.min.css';
import Patiants from './Form/patiants'
import Nav from './Home/Nav'
<<<<<<< HEAD
import Surgries from './Surgries.js'
import Diseases from './Diseases'
import Medical from './Medical'
=======
import Upload from './uploading/Upload'
import Changepass from './Register/Changepass'
>>>>>>> 5adf0e6d8581e9c1d0ff763dc2d189ef10de8695


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
            <Route path="/medicalrecords" render={ ()=> <Medicalrecords/>} />
            <Route path="/tests" component={ ()=> <Tests/>} />
            <Route path="/rays" component={ ()=> <Rays/>} />
            <Route path="/drugs" component={ ()=> <Drugs/>} />
<<<<<<< HEAD
            <Route path="/surgries" component={ ()=> <Surgries/>} />
            <Route path="/diseases" component={ ()=> <Diseases/>} />
            <Route path="/medical" component={ ()=> <Medical/>} />


=======
            <Route path="/patiants" component={ ()=> <Patiants/>} />
            {/* You can delete this VVV */}
            <Route path="/upload" component={ ()=> <Upload/>} /> 
            <Route path="/Changepass" component={ ()=> <Changepass/>} />
>>>>>>> 5adf0e6d8581e9c1d0ff763dc2d189ef10de8695

          </Switch>
        </BrowserRouter>
    )
  }
}
export default App