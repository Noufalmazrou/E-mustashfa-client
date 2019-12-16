import React, { Component, Fragment } from 'react'
import { Form, Grid, TextArea  } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
export class Diseases extends Component {
    updateSearch =({target:{value , name}})=>{
    
        this.setState({[name]: value});
       
      }
    render() {
        console.log(this.state);
        
        return (
            <div>
                <Fragment>
        <Grid>
                 <Grid.Column width={8}>
              <Form>
                <TextArea placeholder='Tell us more' name= "Medical" onChange={this.updateSearch} />
              </Form>
            </Grid.Column>
            </Grid>
      </Fragment>
            </div>
        )
    }
}

export default Diseases