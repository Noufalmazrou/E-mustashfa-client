import React, { Component } from 'react'
import { Button,Divider, Form, Label } from 'semantic-ui-react'
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
    
  axios.post('http://localhost:4000/user/login' , this.state)
  .then(res =>{
    console.log(res.data)

    
    if (res.data.msg == "Password is not currect"){

  
  this.setState({wrong : true})
    }else if (res.data.msg == "email is not found"){
     
      this.setState({wrong : true})
    }else {
  
  localStorage.setItem('usertoken' , res.data)
      
      
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
      <input name='email' type='email' placeholder='email' onChange={this.onChange} />

    </Form.Field>
    <Divider />

    <Form.Field inline>
      <Label pointing='right'>Your password must be 6 characters or more</Label>
      <input name="password" type='password' placeholder='Password' onChange={this.onChange} />
    </Form.Field>

    <Button type='submit'>Submit</Button>
  </Form>

      </div>
    )
  }
}
