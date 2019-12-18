import React, { Component } from 'react'
import { Divider, Form, Button } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"
export class EditItem extends Component {
    state={
        userId : '',
        drug:[],
        startDate: new Date(),
        endDate: new Date()  
      }
      onSubmit=()=>{
   
    
        axios.put('http://localhost:4000/file/drug', {
          token:localStorage.usertoken,
          drugId:this.props.match.params.id,
          dose: this.state.Dose,
          name: this.state.Drugname,
          duration: this.state.Duration,
          date: this.state.startDate,
      
        }).then(res =>{
      console.log(res)
        }).catch(err=>console.log(err))
        // window.location.reload();
        alert("nice you have been add the mirgwana")
      }
      updateSearch =({target:{value , name}})=>{
    
        this.setState({[name]: value});
       
      }
      handleChange = date => {
        this.setState({
          startDate: date,
        });
      };
      

    
    render() {
        console.log('this');
        
        console.log(this.props);
        
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
    <Form.Field inline>
      <input type='text' placeholder='Drug name'  name= "Drugname" onChange={this.updateSearch}/>
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type='text' placeholder='Duration' name= "Duration" onChange={this.updateSearch} />
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type='text' placeholder='Dose' name= "Dose" onChange={this.updateSearch} />
    </Form.Field>
  
    <Divider />    
    <Button onClick={this.onSubmit}>submit</Button>
  </Form>
            </div>
        )
    }
}

export default EditItem
