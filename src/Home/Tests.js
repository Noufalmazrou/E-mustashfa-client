import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Tests extends React.Component {
    state = {
        date: new Date(),
        
      };
    
      updateSearch =({target:{value , name}})=>{
    
        this.setState({[name]: value});
       
      }
      handleChange = date => {
        this.setState({
          date: date,
        });
      };

  render() {
      console.log(this.state);
      
    return (
      <DatePicker name= "Date" onChange={this.updateSearch}
        selected={this.state.date}
        onChange={this.handleChange}
      />
    );
  }
}
export default Tests

