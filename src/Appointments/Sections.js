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
                            <ol> <a href=''>Anesthesiology</a></ol>
                            <br />
                            <ol> <a href=''>Cardiovascular Diseases</a></ol>
                            <br />
                            <ol> <a href=''>Dentistry</a></ol>
                            <br />
                            <ol> <a href=''>Emergency Medicine</a></ol>
                        </ul>
                    </Grid.Column>




                    <Grid.Column size="large" >
                        <ul>
                            <br />
                            <ol> <a href=''>Family Medicine</a></ol>
                            <br />
                            <ol> <a href=''>Medicine</a></ol>
                            <br />
                            <ol> <a href=''>Neuroscience</a></ol>
                            <br />
                            <ol> <a href=''>Obstetrics & Gynecology</a></ol>
                            <br />
                            <ol> <a href=''>Surgery</a></ol>
                        </ul>
                    </Grid.Column>


                    <Grid.Column size="large">
                        <ul>
                            <br />
                            <ol> <a href=''>Oncology</a></ol>
                            <br />
                            <ol> <a href=''>Pathology & Laboratory Medicine</a></ol>
                            <br />
                            <ol> <a href=''>Pediatrics</a></ol>
                            <br />
                            <ol> <a href=''>Radiology</a></ol>
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
        <Container className="S1">

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