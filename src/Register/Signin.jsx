import React, { Component } from 'react'
import { Divider, Form, Label } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'

export default class Signin extends Component {
  state ={}
  onChange = (e)=>{
  this.setState({
    [e.target.name] : e.target.value
  })
  }
  submit = (e)=>{
  
    e.preventDefault()
    
  axios.post('' , this.state)
  .then(res =>{
    console.log(res.data)
    if (res.data.msg == "Password is not currect"){
  
  this.setState({wrong : true})
    }else if (res.data.msg == "email is not found"){
  
      this.setState({wrong : true})
    }else {
  
  localStorage.setItem('usertoken' , res.data)
  this.props.isLogin()
      
      
      this.setState({ show: true })
    }
  
  })
    
    
  .catch(err => console.log(err))
  }
  render() {
    console.log(this.state)
    return (
<div>
     
       
  <Form onSubmit = {this.submit}>
    <Form.Field>
      <input type='text' placeholder='First name' onChange={this.onChange} />
      <Label pointing>Please enter your First name</Label>
    </Form.Field>
    <Divider />

    <Form.Field>
      <Label pointing='below'>Please enter your Last name</Label>
      <input type='text' placeholder='Last Name' onChange={this.onChange} />
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type='text' placeholder='Username' onChange={this.onChange} />
      <Label pointing='left'>That name is taken!</Label>
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <Label pointing='right'>Your password must be 6 characters or more</Label>
      <input type='password' placeholder='Password' onChange={this.onChange} />
    </Form.Field>
  </Form>

      </div>
    )
  }
}
