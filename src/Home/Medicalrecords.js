import React, { Component,Fragment } from 'react'
import { Menu, Form, Grid, Header, TextArea  } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export class Medicalrecords extends Component {
  state={
    type:null
  }
  send=()=>{
    //make the axios call here
    // {Medical,type}
  }
  updateSearch =({target:{value , name}})=>{
    
    this.setState({[name]: value});
   
  }
  chioce =(type)=>{
    this.setState({
      type: type
    })
  }
    render() {
        return (
            <div>
         <Fragment>
        <Grid>
          {/* <Grid.Row columns ={2}> */}
          <Grid.Column width={4}>
            <Menu vertical>
              <Header icon="user" attached inverted color="grey" content="Profile" />
              <Menu.Item as={Link} to='/Surgery' >Previous Surgery</Menu.Item>
              <Menu.Item as={Link} to='/Medical' >Mecdical State</Menu.Item>
              <Menu.Item as={Link} to='/Diseases' >Long Diseases</Menu.Item>
            </Menu>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form>
                <TextArea placeholder='Tell us more' />
              </Form>
            </Grid.Column>
            {/* <Grid.Row /> */}
        </Grid>
      </Fragment>
            
                
            </div>
        )
    }
}

export default Medicalrecords

