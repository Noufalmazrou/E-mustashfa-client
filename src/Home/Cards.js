import React from 'react'
import { Card, Grid, Container } from 'semantic-ui-react'
import M1 from '../img/M1.jpg'
import M3 from '../img/M3.jpeg'
import M4 from '../img/M4.jpg'
import M6 from '../img/M6.jpeg'
import M10 from '../img/M10.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Cards = () => (
  <Container width={768} >
 


    <Card.Group  >
      <Grid  className="k">
        <Grid.Row columns={2}>
          <Grid.Column width={8}>
            <Card
              fluid 
              image={M10} className="M" 
            
              href='#Medical Records'
              header='Medical Records '
              description='Records of the patients.'
              as ={Link} to ='/medicalrecords'

            />

          </Grid.Column >

          <Grid.Column width={8} >

            <Card
            
              fluid
              image={M4}
              href='#Rays'
              header='Rays'
              description='Rays of the patient.'
              as ={Link} to ='/rays'
            />

          </Grid.Column >
        </Grid.Row>
        <Grid.Row columns={2}>

          <Grid.Column  >
            <Card
              fluid
              image={M3}
              href='#Tests'
              header='Tests'
              description='Test.'
              as ={Link} to ='/tests'

            />

          </Grid.Column  >
          <Grid.Column  >
            <Card
              fluid
              image={M6}
              href='#Drugs'
              header='Drugs'
              description='Drugs.'
              as ={Link} to ='/drugs'

            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card.Group>


  </Container>
)

export default Cards
