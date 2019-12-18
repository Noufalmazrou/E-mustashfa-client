import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import axios from 'axios'

export class CardsForDrugs extends Component {

deleteItem=()=>{
    axios.delete("http://localhost:4000/file/drug", {
    data:{token:localStorage.usertoken, 
    drugId:this.props.drugid}
    })
    window.location.reload();
}

    render() {
        console.log(this.props.drugid);
        
        return (
            <div>
<div className= "drugs">
<Card>
    <Image src='https://cdn2.iconfinder.com/data/icons/healthcare-color-icons/104/11-healthcare-pills-drugs-512.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{this.props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{this.props.date}</span>
      </Card.Meta>
      <Card.Description>
        {this.props.dose} <br/>
        {this.props.duration}
  </Card.Description>
  
    </Card.Content>
  <Button.Group>
    <Button positive>Edit</Button>
    <Button.Or />
    <Button negative onClick={this.deleteItem}>Delete</Button>
  </Button.Group>

  </Card>
  </div>
{/* <Card
    image='https://cdn2.iconfinder.com/data/icons/healthcare-color-icons/104/11-healthcare-pills-drugs-512.png'
    header={this.props.name}
    description={this.props.duration}

  /> */}
        </div>
        )
    }
}

export default CardsForDrugs
