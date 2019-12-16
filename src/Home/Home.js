import React, { Component } from 'react'
import Slidershow from '../Home/Slidershow'
import Cards from './Cards'
import { Input, Menu, Container, Grid } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import Footer from '../Footer'
import Hospita from '../Appointments/Hospital'
import Sections from '../Appointments/Sections'
import Doctors from '../Appointments/Doctors'


export default class Home extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>

        <Slidershow />

        <br />
        <br />
        <br />
        <br />
        <Cards />
 
        <Footer />
    


      </div>
    )
  }
}
