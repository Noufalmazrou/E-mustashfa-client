import React from 'react'
import { Card } from 'semantic-ui-react'
import M1 from '../img/M1.jpg'
import M3 from '../img/M3.jpeg'
import M4 from '../img/M4.jpg'
import M6 from '../img/M6.jpeg'

const Cards = () => (
  <Card.Group className="C" style ={{justifyContent:"center"}}>
 

    <Card
    image ={M1}
    href='#card-example-link-card'
    header='Medical Records '
    description='Records of the patients.'
  />



<Card
 image ={M4}
    href='#card-example-link-card'
    header='Rays'
    description='Rays of the patient.'
  />


<Card
 image ={M3}
    href='#card-example-link-card'
    header='Tests'
    description='Test.'
  />



<Card
 image ={M6}
    href='#card-example-link-card'
    header='Drugs'
    description='Drugs.'
  />

  </Card.Group>
)

export default Cards
