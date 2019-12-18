import React, { Component } from 'react'
import { Divider, Form, Label, ButtonOr, Button } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import jwt from 'jsonwebtoken'
import CardsForDrugs from '../CardsForDrugs';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import EditItem from '../EditItem';
export class Drugs extends Component {


  state={
    userId : '',
    drug:[],
    startDate: new Date(),
    endDate: new Date()  
  }
  componentDidMount(){
    axios.get('http://localhost:4000/file',{
      headers: {
        token:  localStorage.usertoken//the token is a variable which holds the token
      }
     }).then(res =>{
      //  console.log(res)
       console.log("hla")

        this.setState({ drug: res.data.drugs });
        
        console.log(this.state.drug);
      }) //  }).then(data=>console.log(data)
     

     var decoded = jwt.verify(localStorage.usertoken , 'secret')
     this.setState({
      userId  :decoded.user._id
     })
     console.log(decoded.user._id)

  }
  onSubmit=()=>{
   
    
  axios.post('http://localhost:4000/file/drugs', {
    token:localStorage.usertoken,
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
      
    
    //   handleChange = date => {
    //     this.setState({
    //       endDate: date
    //     });
    //   };
    render() {
      console.log(this.state);
      var drugs = this.state.drug.map( item => {
    
        return <CardsForDrugs name={item.name} dose={item.dose} duration={item.duration} date={item.date} drugid={item.id}/>
      
      })
      
        return (
          
            <div>
              <BrowserRouter>
              <Switch>
              {/* <Route path="drugs/:id" render={ (props)=> <EditItem {...props}  drugsData={ this.state.drug.length == 0?   0 : this.state.drug.filter(ele =>{
        return  props.match.params.id == ele.drugid            
          }) }/>} /> */}
          <Route path="/drugs/:id"  component = {EditItem}/>
          {/* <Route path="/drugs/:id"  component={EditItem} /> */}

          </Switch>
          </BrowserRouter>
              
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
  
  <div className= "app">
{drugs}
</div>
 </div>
        )
    }
}

export default Drugs

