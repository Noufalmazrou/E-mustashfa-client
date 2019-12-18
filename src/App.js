import React, { Component } from "react";
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
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
import Upload from './uploading/Upload'
import Changepass from './Register/Changepass'
import Surgries from './Surgries.js'
import Diseases from './Diseases'
import Medical from './Medical'
import Footer from './Footer'



export class App extends Component {
 

  render() {
    return (


      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/AboutUs" component={() => <AboutUs />} />
          <Route path="/Reservations" component={() => <Reservations />} />
          <Route path="/signin" component={() => <Signin />} />
          <Route path="/signup" component={() => <Signup />} />
          <Route path="/medicalrecords" render={() => <Medicalrecords />} />
          <Route path="/tests" component={() => <Tests />} />
          <Route path="/rays" component={() => <Rays />} />
          <Route path="/drugs" component={() => <Drugs />} />
          <Route path="/patiants" component={() => <Patiants />} />
          {/* You can delete this VVV */}
          <Route path="/upload" component={() => <Upload />} />
          <Route path="/Changepass" component={() => <Changepass />} />
          <Route path="/" component={() => <Home />} />

        </Switch>
        
        <div className='violet'>
        <Footer />
        </div>
        
        
      </BrowserRouter>

      

    )
  }
}
export default App