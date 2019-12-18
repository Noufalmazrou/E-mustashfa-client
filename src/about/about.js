import React from 'react'
import { Header, Grid, Image, Icon, Container } from 'semantic-ui-react'
import Slidershow from '../Home/Slidershow'
import emu from '../img/emu.jpg'
import mission from '../img/mission.jpg'


const GridExampleCelledInternally = () => (
<div>
    <Container >

    <img src={emu}  className="em" />
<br/>
<br/>
<br/>
<br/>
<br/>
      <p>  <h2 className="about ">
        <br />

        <h2>About Us</h2>


        We will help to find health , to everyone.
       The optimum ratio of price and quality responsible and conscientious approach
       On the basis of the medical center “Nordis” can be given a thorough examination of the body
       and get the advice of highly qualified specialists in various fields of medicine. According to studies ,
       our doctors will make an individual program of prevention and treatment of identified diseases, directed to a surgical treatment if necessary.
       In today’s operational department conducted a wide range of operations under local and general anesthesia .
</h2></p>

    </Container>
    <br />    <br />      <br />    <br />      <br />    <br />      <br />    <br />
    <Container>

      <Grid celled='internally' className="mission ">
        <Grid.Row>
          <Grid.Column width={2}>
            <Icon disabled name='  bookmark outline' size="huge" />
            <br />    <br />
            <center><h2> Our mission </h2> </center>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p>

              <h3>  Developing an application that allows the user to easily save his medical data and information to allow him to access this information at any time quickly and easily</h3>
            </p>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  </div>
)

export default GridExampleCelledInternally