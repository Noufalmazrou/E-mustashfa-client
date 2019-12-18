import React, { Component } from 'react'
import { Form, Input, Label, Divider } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"

import axios from 'axios'
export default class Changepass extends Component {
  state ={
rightPass : null,
  }

  onChange = (e)=>{
    if (e.target.value.length > 0){
      this.setState({
        [e.target.name] : e.target.value,
        [e.target.name +"Lable"] : false
      })
    }else {
      this.setState({
        [e.target.name] : e.target.value,
        [e.target.name +"Lable"] : true
      })
    }
    }
    onSunmit =()=>{
      console.log("uu");
      
      axios.post('http://localhost:4000/user/changepassword', {
       token: localStorage.usertoken,
        oldPassword : this.state.oldPassword,
        newPassword : this.state.newPassword
      })
      .then(res => console.log(res)
      ).catch(err=>console.log(err)
      )
    }
  render() {
    console.log(this.state);
    
    return (
      <div className="formSing" >
     
       
      <Form 
      onSubmit = {this.onSunmit} >
    
        <Form.Field inline style={{backgroundColor:'#B0C4DE'}}>
          <input type='text' placeholder='old Password' name = "oldPassword" onChange={this.onChange} />
          {!this.state.passwordLable &&<Label pointing='left'>worng password</Label>}
        </Form.Field>
        <Divider />
    
  
   <Form.Field inline style={{backgroundColor:'#B0C4DE'}}>
          {this.state.passwordLable &&<Label pointing='right'>Your password must be 6 characters or more</Label>}
          <input type='password' placeholder='new Paswword' name= "newPaswword" onChange={this.onChange} />
        </Form.Field>
        <button type="submit" class="ui button">Submit</button>
      </Form>
    
          </div>
    )
  }
}
