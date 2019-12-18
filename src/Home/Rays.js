import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Upload from '../uploading/Upload'
import Axios from "axios";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
// https://github.com/Hacker0x01/react-datepicker

class Rays extends React.Component {
    state = {
        date: new Date(),
        
      };
    getUrl =( url)=>{
      this.setState({url:url})
      Axios.post('http://localhost:4000/file/rays',{
        fileUrl:url,
        token : localStorage.usertoken,
        date:this.state.date
      }).then(data=>console.log(data)
      ).catch(err => console.log(err)
      )
    }
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
      
    return (<>
      <DatePicker name= "Date" onChange={this.updateSearch}
        selected={this.state.date}
        onChange={this.handleChange}
     style={{margin:"0 auto"}} />
  <Upload getUrl={this.getUrl}/>
      </>
    );
  }
}

export default Rays

