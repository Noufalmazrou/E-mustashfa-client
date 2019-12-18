import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import '../App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Nav extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    logout =()=>{
      localStorage.removeItem("usertoken");
      window.location.reload();
    }
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
          <Menu.Item
          as ={Link} to ='/Appointment'
            name='Appointment'
            active={activeItem === 'Appointment'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>

          <Menu.Menu position='right' />

            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            {!localStorage.usertoken? <>

import {scroller} from 'react-scroll';



export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  logout = () => {
    localStorage.removeItem("usertoken");
    window.location.reload();
  }

  scrollTo = () =>{
    scroller.scrollTo('violet', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    const { activeItem } = this.state


    return (
      <div>
        <Container className="n1">
        <Menu secondary size='huge'>
          <Menu.Item as ={Link} to ='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        

           

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
        </Container>
            </div>
        )
    }
}


            {/* <Menu.Item as={Link}  to="#footer" name='Contact Us' active={activeItem === 'Footer'} 
              // onClick={this.handleItemClick} /> */}
              <button className="item" onClick={this.scrollTo}>Contact Us</button>





            <Menu.Menu position='right' >
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              {!localStorage.usertoken ? <>
                <Menu.Item
                  as={Link} to='/signin'
                  name='Signin'
                  active={activeItem === 'Signin'}
                  onClick={this.handleItemClick}
                />

                <Menu.Item
                  as={Link} to='/signup'
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
                    as={Link} to='/changePassword'
                    name='Change password'
                    active={activeItem === 'Change password'}
                    onClick={this.handleItemClick}
                  /></>}
            </Menu.Menu>

          </Menu>
        </Container>
      </div>
    )
  }
}

