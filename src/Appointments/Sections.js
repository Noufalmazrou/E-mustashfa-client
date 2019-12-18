import React from 'react'
import { Card, Icon, Container, Grid } from 'semantic-ui-react'

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


        <p><h2><center>We provide a wide range of medical services including oncology, pediatric implantation, gynecology,
   < br /> obstetrics, neurology, cardiology, emergency surgery, pain clinic and radiology  </center></h2></p>

        <br />
        <br />
        <br />
        <br />


        <Container className="S1">
            <h1><center>Medical Departments</center></h1>
            <br />
            <br />
            <br />
            <Grid columns={3} divided reversed='mobile' className="Se">

                <Grid.Row>
                    <Grid.Column size="large" >
                        <ul>
                            <br />
                            <ol> <a href='./section/'>Anesthesiology</a></ol>
                            <br />
                            <ol> <a href='./section/'>Cardiovascular Diseases</a></ol>
                            <br />
                            <ol> <a href='./section/'>Dentistry</a></ol>
                            <br />
                            <ol> <a href='./section/'>Emergency Medicine</a></ol>
                        </ul>
                    </Grid.Column>




                    <Grid.Column size="large" >
                        <ul>
                            <br />
                            <ol> <a href='./section/'>Family Medicine</a></ol>
                            <br />
                            <ol> <a href='./section/'>Medicine</a></ol>
                            <br />
                            <ol> <a href='./section/'>Neuroscience</a></ol>
                            <br />
                            <ol> <a href='./section/'>Obstetrics & Gynecology</a></ol>
                            <br />
                            <ol> <a href='./section/'>Surgery</a></ol>
                        </ul>
                    </Grid.Column>


                    <Grid.Column size="large">
                        <ul>
                            <br />
                            <ol> <a href='./section/'>Oncology</a></ol>
                            <br />
                            <ol> <a href='./section/'>Pathology & Laboratory Medicine</a></ol>
                            <br />
                            <ol> <a href='./section/'>Pediatrics</a></ol>
                            <br />
                            <ol> <a href='./section/'>Radiology</a></ol>
                        </ul>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </Container>
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />

        <Container className="S1">

            <h1><center>Clinical Services</center></h1>
            <br />
            <br />
            <br />

            <Grid columns={3} divided reversed='mobile' className="Se">

                <Grid.Row>
                    <Grid.Column size="large">
                        <ul>
                            <br />
                            <ol> <a href=''>Nutrition Services</a></ol>

                        </ul>
                    </Grid.Column>




                    <Grid.Column size="large">
                        <ul>
                            <br />
                            <ol> <a href=''>Physical Therapy</a></ol>

                        </ul>
                    </Grid.Column>


                    <Grid.Column size="large">
                        <ul>
                            <br />
                            <ol> <a href=''>Respiratory Care Services</a></ol>

                        </ul>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container >

            <h1><center>Special Expertise</center></h1>
            <br />
            <br />
            <br />
            <Grid columns={3} divided reversed='mobile' className="Se">

                <Grid.Row>
                    <Grid.Column size="large">
                        <ul>
                            <br />
                            <ol> <a href=''>Pharmaceutical Care Services</a></ol>

                        </ul>
                    </Grid.Column>




                    <Grid.Column size="large">
                        <ul>
                            <br />
                            <ol> <a href=''>Nursing Services</a></ol>

                        </ul>
                    </Grid.Column>


                    <Grid.Column size="large">
                        <ul>
                            <br />
                            <ol> <a href=''>Research Center</a></ol>

                        </ul>
                    </Grid.Column>

                </Grid.Row>
            </Grid>


        </Container>


        <Footer />
    </div>



)

export default CardExampleCardProps