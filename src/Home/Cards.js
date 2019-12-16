import React from 'react'
import { Card, Grid, Container } from 'semantic-ui-react'
import M1 from '../img/M1.jpg'
import M3 from '../img/M3.jpeg'
import M4 from '../img/M4.jpg'
import M6 from '../img/M6.jpeg'
import M10 from '../img/M10.jpg'

const Cards = () => (
  <Container widht={768} >
 


    <Card.Group  >
      <Grid  className="k">
        <Grid.Row columns={2}>
          <Grid.Column width={8}>
            <Card
              fluid
              image={M10} className="M" 
              href='#card-example-link-card'
              header='Medical Records '
              description='Records of the patients.'
            />

          </Grid.Column >

          <Grid.Column width={8} >

            <Card
              fluid
              image={M4}
              href='#card-example-link-card'
              header='Rays'
              description='Rays of the patient.'
            />

          </Grid.Column >
        </Grid.Row>
        <Grid.Row columns={2}>

          <Grid.Column  >
            <Card
              fluid
              image={M3}
              href='#card-example-link-card'
              header='Tests'
              description='Test.'
            />

          </Grid.Column  >
          <Grid.Column  >
            <Card
              fluid
              image={M6}
              href='#card-example-link-card'
              header='Drugs'
              description='Drugs.'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card.Group>
    {/* </div> */}

  </Container>
)

export default Cards
