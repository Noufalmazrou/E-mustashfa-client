import React from 'react'
import { Card, Icon, Container, Grid } from 'semantic-ui-react'
import D1 from '../img/D1.png'
import Footer from '../Footer'
import Slidershow from '../Home/Slidershow'





const CardExampleCardProps = () => (
  <div>
    <Slidershow />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />





    <Card.Group  >
      <Grid className="S">
        <Grid.Row columns={4}>
          <Grid.Column width={5}>
            <Card
              fluid
          
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
           
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
        </Grid.Row >

        <Grid.Row columns={2}>
          <Grid.Column width={5}>
            <Card
              fluid
              image={D1}
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Card
              fluid
              image={D1}
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
          <Grid.Column width={5}>
            <Card
              fluid
              image={D1}
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={D1}
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
        </Grid.Row >


        <Grid.Row columns={4}>
          <Grid.Column width={5}>
            <Card
              fluid
              image={D1}
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={D1}
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
        </Grid.Row >

      </Grid>
    </Card.Group>


    <Footer />

  </div>



)

export default CardExampleCardProps