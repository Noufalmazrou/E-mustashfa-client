import React, { Component } from 'react'
import { Divider, Form, Label } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'

export default class Signup extends Component {
  state ={}
  onChange = (e)=>{
  this.setState({
    [e.target.name] : e.target.value
  })
  }
  submit = (e)=>{
    e.preventDefault()
  axios.post('http://localhost:5100/users/register', this.state)
  .then(res =>
     console.log(res))
  .catch(err => console.log(err))
  }
      render() {
        console.log(this.state)

    return (
      <div>
        <Form onSubmit = {this.submit} action='http://locahost:5100/auth/register' method="post">
    <Form.Field>
      <input type='text' placeholder='First name' onChange={this.onChange} />
      <Label pointing>Please enter a value</Label>
    </Form.Field>
    <Divider />

    <Form.Field>
      <Label pointing='below'>Please enter a value</Label>
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

