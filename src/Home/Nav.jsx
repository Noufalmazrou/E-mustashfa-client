import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import '../App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'



export default class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
   
        return (
            <div>
        <Container className="n1">
                
        <Menu secondary size='huge'>
          <Menu.Item as ={Link} to ='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
          as ={Link} to ='/AboutUs'
            name='About us'
            active={activeItem === 'About us'}home
            onClick={this.handleItemClick}
          />
          <Menu.Item
          as ={Link} to ='/Reservations'

          name=' Medical Services'
          active={activeItem === ' Medical Services'}
          
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right' >
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
             as ={Link} to ='/signin'
              name='Signin'
              active={activeItem === 'Signin'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
            as ={Link} to ='/signup'
              name='Signup'
              active={activeItem === 'Signup'}
              onClick={this.handleItemClick}
            />
            
          </Menu.Menu>
          
        </Menu>
        </Container>
            </div>
        )
    }
}
