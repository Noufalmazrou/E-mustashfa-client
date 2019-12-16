import React, { Component } from 'react'
import Slidershow from '../Home/Slidershow'
import Cards from './Cards'
import { Input, Menu, Container } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"


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
        <br/>
        <Cards />


      </div>
    )
  }
}
