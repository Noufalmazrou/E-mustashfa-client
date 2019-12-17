import React, { Component } from 'react'
import { Divider, Form, Label } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Drugs extends Component {
    state = {
        startDate: new Date(),
        
      };
    
      updateSearch =({target:{value , name}})=>{
    
        this.setState({[name]: value});
       
      }
      handleChange = date => {
        this.setState({
          startDate: date,
          endDate: date
        });
      };
    render() {
        console.log(this.state);
        
        return (
            <div>
    <div>
    <h6>How long have you been taking this drug</h6>
  <DatePicker name= "From" onChange={this.updateSearch}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
To
<DatePicker name= "To" onChange={this.updateSearch}
        selected={this.state.endDate}
        onChange={this.handleChange}
      />
      </div>
      <br/>
                <Form>
    <Form.Field>
      <input type='text' placeholder='Drug name'  name= "Drug name" onChange={this.updateSearch}/>
    </Form.Field>
    <Divider />

    <Form.Field>
      <input type='text' placeholder='Duration' name= "Duration" onChange={this.updateSearch} />
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type='text' placeholder='Dose' name= "Dose" onChange={this.updateSearch} />
    </Form.Field>
    <Divider />
  </Form>

  
    

            </div>
        )
    }
}

export default Drugs

