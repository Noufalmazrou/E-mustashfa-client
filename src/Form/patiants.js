import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
          
        </Form.Group>
        <Form.Group unstackable widths={2}>
       <Form.Input label='Wieght' placeholder='wieght' />
       <Form.Input label='Hight' placeholder='hight' />
    </Form.Group>

    <Form.Group unstackable widths={2}>
       <Form.Input label='Desises' placeholder='Desises' />
       <Form.Input label='Nationality' placeholder='Nationality' />
    </Form.Group>
    <Form>
    <Form.Group inline>
      <Form.Field>
        <label>Phone Number</label>
        <Input placeholder='(xxx)' />
      </Form.Field>
      <Form.Field>
        <Input placeholder='xxx' />
      </Form.Field>
      <Form.Field>
        <Input placeholder='xxxx' />
      </Form.Field>
    </Form.Group>
  </Form>
  <Form>
    <Form.Group inline>
      <Form.Field>
        <label>Emergance Phone Number</label>
        <Input placeholder='(xxx)' />
      </Form.Field>
      <Form.Field>
        <Input placeholder='xxx' />
      </Form.Field>
      <Form.Field>
        <Input placeholder='xxxx' />
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