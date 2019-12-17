import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'



export default class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    logout =()=>{
      localStorage.removeItem("usertoken");
    }
    render() {
      const { activeItem } = this.state
  
   
        return (
            <div>
                
        <Menu secondary>
          <Menu.Item as ={Link} to ='/home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
          as ={Link} to ='/AboutUs'
            name='About us'
            active={activeItem === 'About us'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
          as ={Link} to ='/Reservations'

            name='Services'
            active={activeItem === 'Services'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            {!localStorage.usertoken? <>
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
            </>
            : <>   <Menu.Item
             
              name='Logout'
              active={activeItem === 'Logout'}
              onClick={this.logout}
            />

            <Menu.Item
            as ={Link} to ='/changePassword'
              name='Change password'
              active={activeItem === 'Change password'}
              onClick={this.handleItemClick}
            /></>}
          </Menu.Menu>
            
        </Menu>
            </div>
        )
    }
}
