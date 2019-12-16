import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"

export default class Changepass extends Component {
    render() {
        return (
           
                    <>
<div className = "formSing">
 

  
          <Form onSubmit = {this.submit} action={`http://localhost:5100/users/changepassword/${localStorage.usertoken}`} method="post">
    
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  name="newPassword" onChange={this.onChange}/>
          </Form.Group>
        
          <Form.Button>Submit</Form.Button>
        </Form>
        </div>
        </>
          
        )
    }
}
