import React, { Component } from 'react'
import { Divider, Form, Label, Button } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'
import Swal from 'sweetalert2'
export default class Signup extends Component {
  state = {}
  onChange = (e) => {
    console.log(e.target.value.length);

    if (e.target.value.length > 0) {
      this.setState({
        [e.target.name]: e.target.value,
        [e.target.name + "lable"]: false
      })
    } else {

      this.setState({
        [e.target.name]: e.target.value,
        [e.target.name + "lable"]: true
      })
    }

  }
  submit = (e) => {
    e.preventDefault()




    axios.post('http://localhost:5100/users/register', this.state)
      .then(res =>
        console.log(res))
      .catch(err => console.log(err))
    Swal.fire('Regster')
    this.props.hestory.push('/home')
  }
  render() {
    console.log(this.state)

    return (
      <div>
        <Form onSubmit={this.submit} action='http://locahost:5100/auth/register' method="post">
          <Form.Field>
            <input type='text' placeholder='First name' name="first_name" onChange={this.onChange} />
            {this.state.first_namelable && <Label pointing>Please enter a value</Label>}
          </Form.Field>
          <Divider />

          <Form.Field>
            {false && <Label pointing='below'>Please enter a value</Label>}
            <input type='text' placeholder='Last Name' name="last_name" onChange={this.onChange} />
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type='text' placeholder='Username' name="Username" onChange={this.onChange} />
            {false && <Label pointing='left'>That name is taken!</Label>}
          </Form.Field>
          <Divider />

          <Form.Field inline>
            {false && <Label pointing='right'>Your password must be 6 characters or more</Label>}
            <input type='password' placeholder='Password' name="password" onChange={this.onChange} />
          </Form.Field>
          <Button type='submit'>Submit</Button>

        </Form>



      </div>
    )
  }
}

