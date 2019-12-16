import React from 'react'
import { Card, Icon, Container, Grid } from 'semantic-ui-react'
import Footer from '../Footer'
import Slidershow from '../Home/Slidershow'
import D2 from '../img/D2.png'
import D3 from '../img/D3.png'
import D4 from '../img/D4.jpg'
import D5 from '../img/D5.jpg'
import D6 from '../img/D6.jpg'
import D7 from '../img/D7.jpg'
import D8 from '../img/D8.jpg'
import D9 from '../img/D9.jpg'






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
              image={D2}
              header='Dr.Ahmed Afandi '
              meta='Vascular Surgery'
              description='Consultant Vascular Surgery'

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={D3}
              header='Dr.Iman Elsayed Afsah'
              meta='Physical Medicine & Rehabilitation'
              description='Specialist, Physical medicine and Rehabilitation'

            />
          </Grid.Column>
        </Grid.Row >

        <Grid.Row columns={2}>
          <Grid.Column width={5}>
            <Card
              fluid
              image={D4}
              header='Dr Amr Bannan'
              meta='Cardiology'
              description='Consultant, Cardiology Interventional Cardiology'

            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Card
              fluid
              image={D5}
              header='Dr Ibrahim Issa'
              meta='ENT'
              description='ENT Consultant'

            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
          <Grid.Column width={5}>
            <Card
              fluid
              image={D6}
              header='Dr. Hani Moussalem'
              meta='Vascular Surgery'
              description='Consultant Vascular Surgery'

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={D7}
              header='Dr.Abdulazziz S. Baazeem'
              meta='AndorlogyUrology'
              description='Consultant Urology & Andrology'

            />
          </Grid.Column>
        </Grid.Row >


        <Grid.Row columns={4}>
          <Grid.Column width={5}>
            <Card
              fluid
              image={D8}
              header='Dr.Abdelkarim Khedhair'
              meta='Plastic Surgery'
              description='Associate Sr. Specialist, Plastic Surgery'

            />
          </Grid.Column>
          <Grid.Column width={5}>

            <Card
              fluid
              image={D9}
              header='Dr.Amany Mohammed Gouda'
              meta='Family Medicine'
              description='Consultant, Family medicine'

            />
          </Grid.Column>
        </Grid.Row >

      </Grid>
    </Card.Group>


    <Footer />

  </div>



)

export default CardExampleCardProps