import React, { Component } from 'react'
import { Form, Input, Label, Divider } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import jwt from 'jsonwebtoken'
import axios from 'axios'

export default class Changepass extends Component {
  state ={
rightPass : null,

  }

  componentDidMount(){

var decoded = jwt.verify(localStorage.usertoken , "secret")
this.setState({
  email : decoded.user.email
})
  }
  onChange = (e)=>{

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
    }
    }

    onSunmit =()=>{
      console.log("uu");
      
      axios.post('http://localhost:4000/user/check' , {
        email : this.state.email,
        oldPassword : this.state.oldPassword,
        newPassword : this.state.newPassword
      })
      .then(res => this.setState({rightPass : res.data}))


    }
  render() {
    console.log(this.state);
    
    return (

      <div className="formSing" >
     
       
      <Form 
      onSubmit = {this.onSunmit} >
    
        <Form.Field inline style={{backgroundColor:'#B0C4DE'}}>
          <input type='text' placeholder='oldPassword' name = "oldPassword" onChange={this.onChange} />
          {!this.state.passwordLable &&<Label pointing='left'>worng password</Label>}
        </Form.Field>
        <Divider />
    
       {this.state.rightPass && <Form.Field inline style={{backgroundColor:'#B0C4DE'}}>
          {this.state.passwordLable &&<Label pointing='right'>Your password must be 6 characters or more</Label>}
          <input type='password' placeholder='newPaswword' name= "newPaswword" onChange={this.onChange} />
        </Form.Field>}
        <Form.Button >check</Form.Button>
      </Form>
    
          </div>
    )
  }
}
