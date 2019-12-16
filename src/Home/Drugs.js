import React, { Component } from 'react'
import { Divider, Form, Label } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Drugs extends Component {
    state = {
        startDate: new Date()
      };
    
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    render() {
        return (
            <div>
                <Form>
    <Form.Field>
      <input type='text' placeholder='Drug name' />
    </Form.Field>
    <Divider />

    <Form.Field>
      <input type='text' placeholder='Duration' />
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type='text' placeholder='Dose' />
    </Form.Field>
    <Divider />
  </Form>

  <h6>How long have you been taking this drug</h6>
  <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
To
<DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    

            </div>
        )
    }
}

export default Drugs

