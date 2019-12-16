import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleSubcomponentControl extends Component {
  state = {}
  onChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
    }
    submit = (e)=>{
      e.preventDefault()
    axios.post('http://localhost:4000/user/register', this.state)
    .then(res =>
       console.log(res))
    .catch(err => console.log(err))
    }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    console.log(this.state)

    const { value } = this.state
    return (
      <Form onSubmit = {this.submit} action='http://localhost:4000/user/reigester' method="post">
        <Form.Group widths='equal'>
          <Form.Input fluid name='firstname' label='First name' placeholder='First name' onChange={this.onChange} />
          <Form.Input fluid name='lastname' label='Last name' placeholder='Last name' onChange={this.onChange} />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
            onChange={this.onChange}
          /> </Form.Group>
          <Form.Group unstackable widths={2}>

         <Form.Input name='email' label='Email' placeholder='email' onChange={this.onChange} />
         <Form.Input name='password' label='Password' type='password' placeholder='password' onChange={this.onChange} />
      </Form.Group>
          

        <Form.Group unstackable widths={2}>
       <Form.Input name='weight' label='Wieght' placeholder='wieght' onChange={this.onChange} />
       <Form.Input name='height' label='Hight' placeholder='hight' onChange={this.onChange} />
    </Form.Group>

    <Form.Group unstackable widths={2}>
       <Form.Input name='' label='Desises' placeholder='Desises' onChange={this.onChange} />
       <Form.Input name='nationality' label='Nationality' placeholder='Nationality' onChange={this.onChange} />
    </Form.Group>
    <Form>
    <Form.Group inline>
      <Form.Field>
        <label>Phone Number</label>
        <Input name='phoneNumber' placeholder='(xxx)' onChange={this.onChange} />
      </Form.Field>
    </Form.Group>
  </Form>
  <Form>
    <Form.Group inline>
      <Form.Field>
        <label>Emergance Phone Number</label>
        <Input name='emergencyPhone' placeholder='(xxx)' onChange={this.onChange} />
      </Form.Field>
    </Form.Group>
  </Form>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl