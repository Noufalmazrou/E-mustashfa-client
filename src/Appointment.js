import React, { Component } from 'react'
import { Divider, Form, Label, Menu, Dropdown } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'
import './Appointment.css'
export default class Appointment extends Component {
    updateSearch =({target:{value , name}})=>{
    
        this.setState({[name]: value});
       
      }
      
  render() {
    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]
      
      const DropdownExampleSimple = () => (
        <Menu compact>
          <Dropdown text='Dropdown' options={options} simple item />
        </Menu>
      )
    console.log(this.state)
    return (
<div className="Appointment" >
  <Form 
  onSubmit = {this.submit}>
    <h6>First Name</h6>
    <Form.Field style={{backgroundColor:'#B0C4DE'}}>
      <input type='text' placeholder='First name' onChange={this.onChange} />
      {/* <Label pointing>Please enter your First name</Label> */}
    </Form.Field>
    <Divider />
    <h6>First Name</h6>
    <Form.Field style={{backgroundColor:'#B0C4DE'}}>
      {/* <Label pointing='below'>Please enter your Last name</Label> */}
      <input type='text' placeholder='Last Name' onChange={this.onChange} />
    </Form.Field>
    <Divider />
    <h6>Reason For Visit</h6>
    <Form.Field inline style={{backgroundColor:'#B0C4DE'}}>
      <input type='text' placeholder='Reason For Visit' onChange={this.onChange} />
      {/* <Label pointing='left'>Your Username</Label> */}
    </Form.Field>
    <Divider />
    <h6>First Name</h6>
    <Form.Field inline style={{backgroundColor:'#B0C4DE'}}>
      {/* <Label pointing='right'>Your password must be 6 characters or more</Label> */}
      <input type='text' placeholder='Password' onChange={this.onChange} />
    </Form.Field>
    <Form.Button>Signin!</Form.Button>
  </Form>
      </div>
    )
  }
}