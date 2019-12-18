import React, { Component } from 'react'
import { Button, Divider, Form, Label, Container } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'
import { buildExecutionContext } from 'graphql/execution/execute'
import { withRouter} from 'react-router-dom'
import './Signin.css'
import SweetAlert from 'sweetalert2-react';


 class Signin extends Component {
   state = {
    show : false
  }
  componentDidMount(){
    if(localStorage.usertoken){
      window.location.replace("./");
    }
  }
    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  
    if (e.target.value.length > 0){
      this.setState({
        [e.target.name] : e.target.value,
        [e.target.name +"Lable"] : false
      })
    }else {
      this.setState({
        [e.target.name] : e.target.value,
        [e.target.name +"Lable"] : true
      })
    }}

    submit = (e) => {
  
  //     e.preventDefault()
      
    axios.post('http://localhost:4000/user/login' , 
    {email : this.state.email,
      password : this.state.password
    })
    .then(res =>{
      console.log(res)
      if (res.data.msg == "Password is not currect"){
    
    this.setState({wrong : true})
      }else if (res.data.msg == "email is not found"){
    
        this.setState({wrong : true})
      }else {
    console.log("nouf is logged in ");
    
    localStorage.setItem('usertoken' , res.data)
      this.setState({show : true})
        
      }
    
    })
      
      
    .catch(err => console.log(err))
  }
  render() {
    console.log(this.state)
    return (
      // <>{ this.state.wrong &&
      //   ['danger'].map((variant, idx) => (
      //    <Alert key={idx} variant={variant}>
      //     your password or email is wrong 
      //   </Alert>))}
      <>
      <SweetAlert
      show={this.state.show}
      title="Heyyy!"
      text="nice you have been logged in "
      onConfirm={() => {
        this.setState({ show: false })
      this.props.history.push('/home')
      }} />
     
      <Container fluid >
        
      <div fluid>
  
     


       <Form 
  onSubmit = {this.submit}>

    <Form.Field inline style={{backgroundColor:'#B0C4DE'}}>
      <input type='text' placeholder='email' name = "email" onChange={this.onChange} />
      {this.state.UsernameLable &&<Label pointing='left'>Your Email</Label>}
    </Form.Field>
    <Divider />

    <Form.Field inline style={{backgroundColor:'#B0C4DE'}}>
      {this.state.passwordLable &&<Label pointing='right'>Your password must be 6 characters or more</Label>}
      <input type='password' placeholder='Password' name= "password" onChange={this.onChange} />
    </Form.Field>
    <Form.Button>Signin!</Form.Button>
  </Form>
        </div>
        </Container>
     </>
    )
  }
}

export default  withRouter(Signin)
