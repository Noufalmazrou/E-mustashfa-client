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

        <Menu secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='About us'
            active={activeItem === 'About us'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Appointments'
            active={activeItem === 'Appointments'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='Signin'
              active={activeItem === 'Signin'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name='Signup'
              active={activeItem === 'Signup'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
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
