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
              header='King Fahad Medical City'
      

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={UD}
              header='United Doctors Hospital'
       

            />
          </Grid.Column>
        </Grid.Row >

        <Grid.Row columns={2}>
          <Grid.Column width={5}>
            <Card
              fluid
              image={Ho2}
              header='king abdullah medical complex'
       

            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Card
              fluid
              image={Kfr}
              header='king faisal hospital'
             

            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
          <Grid.Column width={5}>
            <Card
              fluid
              image={SFH}
              header='Dr. Soliman Fakeeh Hospital'


            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={Ka}
              header='Hing Abdulaziz Hospital '
            

            />
          </Grid.Column>
        </Grid.Row >


        <Grid.Row columns={4}>
          <Grid.Column width={5}>
            <Card
              fluid
              image={HG}
              header='Ghassan Najeeb Pharaon Hospital'
  

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={SG}
              header='Saudi German Hospital'
        

            />
          </Grid.Column>
        </Grid.Row >

      </Grid>
    </Card.Group>


    <Footer />

  </div>



)

export default CardExampleCardProps