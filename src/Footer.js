import React, { Component ,Row,Col} from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'
import App from './App'

export default class Footer extends Component {
    render() {
        return (
            <div>
                
                <footer className="footer1">
                    <Container>
                        <Row>
                            <Col size={3}>
                                <div className="aboutUs">
                                    <ul>
                                        <h2>About us</h2>
                                        <ol> <a href=''>Brif</a> </ol>
                                        <ol> <a href=''>FAQ</a> </ol>
                                        <ol> <a href=''>Help</a> </ol>
                                    </ul>
                                </div>
                            </Col>


                            <Col size={3} >
                                <div className="Contact">
                                    <ul>
                                        <h2>Contact us</h2>
                                        <ol><a href=''>  920004315</a></ol>
                                        <ol><a href=''>info@jsh.sa</a></ol>
                                    </ul>
                                </div>
                            </Col>
                            <Row>
                                <Col size={3}>
                                    <div className="Folow">
                                        <h2>Follow us </h2>
                                        {/* <Row>
                                            <Col >< FaFacebook /></Col>
                                            <Col><FaTwitterSquare /></Col>
                                            <Col > <FaInstagram /></Col>
                                            <Col><FaYoutube /></Col>
                                        </Row> */}

                                    </div>
                                </Col>
                            </Row>

                  
                        </Row>
                    </Container>
                </footer>
            </div>
        )
    }
}
