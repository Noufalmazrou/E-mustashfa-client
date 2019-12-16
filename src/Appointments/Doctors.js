import React from 'react'
import { Card, Icon, Container, Grid } from 'semantic-ui-react'
import Footer from '../Footer'
import Slidershow from '../Home/Slidershow'
import Ka from '../img/Ka.jpg'
import KFM from '../img/KFM.jpg'
import Kfr from '../img/Kfr.png'
import SFH from '../img/SFH.png'
import SG from '../img/SG.jpg'
import HG from '../img/HG.jfif'
import Ho2 from '../img/Ho2.jpg'
import UD from '../img/UD.jpg'






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
      <Grid className="D">
        <Grid.Row columns={4}>
          <Grid.Column width={5}>
            <Card
              fluid
              image={KFM}
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={UD}
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
              image={Ho2}
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Card
              fluid
              image={Kfr}
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
              image={SFH}
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={Ka}
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
              image={HG}
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={SG}
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