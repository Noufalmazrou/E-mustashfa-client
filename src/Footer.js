import React, { Component, Row, Col } from 'react'
import { Input, Menu, Container, Grid, Icon } from 'semantic-ui-react'
import App from './App'

export default class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="footer1">
                    <Container >
                        <Grid columns={3} divided reversed='mobile'>
                            <Grid.Row>
                                <Grid.Column size="large">
                                    <div className="P">
                                        <ul>

                                            <p>
                                                <h5> E-mustashfa.Care is beyond being a group of entities providing
                                                 the full spectrum of healthcare services; it is a pioneering
                                                 institution that has been continuously thriving for over four decades,
                                                 to become the reference of excellence and international
                                                 standards in KSA and the whole MENA region. </h5>
                                            </p>


                                        </ul>
                                    </div>
                                </Grid.Column>






                                <Grid.Column>
                                    <div className="Contact">
                                        <ul>
                                            <ol> <h2> Contact Us</h2> </ol>
                                            <br />
                                            <ol> Adress:Badir,Amanah Street ,Jeddah </ol>
                                            <br />
                                            <ol> Phone: 00221133445 </ol>
                                            <br />
                                            <ol> <a href=''>E-mail:emustashfa@mashfa.com</a> </ol>
                                        </ul>
                                    </div>
                                </Grid.Column>



                                <Grid.Column>
                                    <div className="Social">
                                        <ul>
                                            <ol>  <h2>Social</h2></ol>
                                            <br />
                                            <ol><a href=''> <Icon disabled name='facebook' size='big' /> </a></ol>
                                            <br />
                                            <ol><a href=''> <Icon disabled name='twitter' size='big' /> </a></ol>
                                            <br />
                                            <ol><a href=''> <Icon disabled name='instagram' size='big' /> </a></ol>
                                            <br />
                                            <ol><a href=''> <Icon disabled name='youtube' size='big' /> </a></ol>

                                        </ul>
                                    </div>
                                </Grid.Column>

                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column className="u"> 2019 Dony by general Assembly studdents</Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </footer>
            </div>
        )
    }
}
