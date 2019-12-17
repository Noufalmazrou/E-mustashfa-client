import React, { Component,Fragment } from 'react'
import { Menu, Form, Grid, Header, TextArea  } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export class Medicalrecords extends Component {
  state={
    type:null
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
              <Header icon="user" attached inverted color="black" content="Select One" />
              <Menu.Item onCLick={()=>this.chioce('Previous Surgries')}>Previous Surgries</Menu.Item>
              <Menu.Item onCLick={()=>this.chioce('long Diseases')}>long Diseases</Menu.Item>
              <Menu.Item onCLick={()=>this.chioce('Medical State')}>Medical State</Menu.Item>
            </Menu>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form>
                <TextArea placeholder='Tell us more' name= "Medical" onChange={this.updateSearch} />
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

