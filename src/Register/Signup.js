import React, { Component } from 'react'
import { Divider, Form, Label, Button, Input } from 'semantic-ui-react' 
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'
import Swal from 'sweetalert2'
import './Signup.css'



const options = [
    { key: 'm', text: 'Male', value: 'male' ,   id : "male"},
    { key: 'f', text: 'Female', value: 'female' , id : "female" },
    { key: 'o', text: 'Other', value: 'other'  , id :"other"},
  ]
  
export default class Signup extends Component {
   state = {}
    onChange = (e) => {
      console.log(e.target.value.length);
  
      if (e.target.value.length > 0) {
        this.setState({
          [e.target.name]: e.target.value,
          [e.target.name + "lable"]: false
        })
        
      } else {
  
        this.setState({
          [e.target.name]: e.target.value,
          [e.target.name + "lable"]: true
        })
      }
    }
  submit = (e) => {
    if(this.state.password == this.state.verifyPassword){
    e.preventDefault()

    axios.post('http://localhost:4000/user/register', this.state)
      .then(res =>
        console.log(res))
      .catch(err => console.log(err))

    Swal.fire('Successfuly')
    Swal.fire('Regster')
     this.props.history.push('/home')


  }else{console.log('you are an idiot just do it good ');
  }}
  render() {
    console.log(this.state)
const { value } = this.state
    return (


      
      <Container className="signup" >
        <Form onSubmit={this.submit} action='http://locahost:5100/auth/register' method="post">
          <Form.Field>
            <input type='text' placeholder='First name' name="first_name" onChange={this.onChange} />
            {this.state.first_namelable && <Label pointing>Please enter a value</Label>}
          </Form.Field>
          <Divider />

      <div className="formup">
         <Form onSubmit = {this.submit} action='http://localhost:4000/user/register' method="post">
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' onChange={this.onChange} />
          <Form.Input fluid label='Last name'  placeholder='Last name' onChange={this.onChange} />
          <Form.Select
            fluid
            name ="Gender"
            label='Gender'
            options={options}
            placeholder='Gender'
            onChange={(e)=>  this.setState({"Gander": e.target.id})}
          />
          
        </Form.Group>
 <Form.Field inline style={{backgroundColor:'#B0C4DE'}}>
      <input type='text' placeholder='email' name = "email" onChange={this.onChange} />
      {this.state.UsernameLable &&<Label pointing='left'>Your Email</Label>}
    </Form.Field>
        <Form.Group unstackable widths={2}>
       <Form.Input label='Wieght' placeholder='wieght' onChange={this.onChange} />
       <Form.Input label='Hight' placeholder='hight' onChange={this.onChange} />
    </Form.Group>

    <Form.Group unstackable widths={2}>
       <Form.Input label='Desises' placeholder='Desises' onChange={this.onChange} />
       <Form.Input label='Nationality' placeholder='Nationality' onChange={this.onChange} />
    </Form.Group>
    <Form>
    <Form.Group unstackable widths={1}>
      <Form.Field>
      {false && <label>Phone Number</label>}
        <Input placeholder='(xxx)'  placeholder="Phone Number" onChange={this.onChange} />
  {false && <label>Emergance Phone Number</label> }
        <Input placeholder='(xxx)'  placeholder="Emergance Phone Number" onChange={this.onChange} />
      </Form.Field>
    </Form.Group>
  </Form>




          <Form.Field inline>
            {false && <Label pointing='right'>Your password must be 6 characters or more</Label>}
            <input type='password' placeholder='Password' name="password" onChange={this.onChange}    
 />         
          </Form.Field>
          <Form.Field inline>
            {false && <Label pointing='right'>Your password must be 6 characters or more</Label>}
            <input type='password' placeholder='Verify password' name="verifyPassword" onChange={this.onChange}  />
          </Form.Field>



          <Button type='submit'>Submit</Button>




        </Form>





      </Container>

           <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Sign up!</Form.Button>
        or 
        <br />
        <Form.Button as ={Link} to ='/doctorss'>Click here if you are a doctors</Form.Button>
      </Form>
        
      </div>

    )
  }
}

