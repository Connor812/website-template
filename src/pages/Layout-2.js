import React from 'react';
import ProgressiveLoadImage from '../helpers/ProgressiveLoadImage';
import FadeInSection from '../helpers/FadeInSection';

import { Carousel, Jumbotron, Container, Row, Col, Image, Card, Button, Form } from 'react-bootstrap';

function Layout_2() {
    return (
        <main>
            <FadeInSection>
                <Carousel id="section1" className="mb-5" style={{ maxHeight: "500px" }}>
                    <Carousel.Item>
                        <ProgressiveLoadImage
                            src="https://via.placeholder.com/800x400"
                            alt="First slide"
                            className="d-block w-100 carousel-image"
                            width="100%"
                            height="500px"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ProgressiveLoadImage
                            src="https://via.placeholder.com/800x400"
                            alt="First slide"
                            className="d-block w-100 carousel-image"
                            width="100%"
                            height="500px"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ProgressiveLoadImage
                            src="https://via.placeholder.com/800x400"
                            alt="First slide"
                            className="d-block w-100 carousel-image"
                            width="100%"
                            height="500px"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </FadeInSection>

            <FadeInSection>
                <Container id="section2" fluid>
                    <Container>
                        <h1>Welcome to React-Bootstrap</h1>
                        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <Button variant="primary">Learn more</Button>
                    </Container>
                </Container>
            </FadeInSection>

            <FadeInSection>
                <Container id="section3" className="my-5">
                    <Row className="align-items-center">
                        <Col xs={12} md={4}>
                            <Image src="https://via.placeholder.com/150" rounded />
                        </Col>
                        <Col xs={12} md={8}>
                            <h3>Title</h3>
                            <p>This is some text that will appear to the right of the image. You can add more content here, and it will be properly aligned next to the image.</p>
                        </Col>
                    </Row>
                </Container>
            </FadeInSection>

            <FadeInSection>
                <Container id="section4" className="my-5">
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card Title 1</Card.Title>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card Title 2</Card.Title>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card Title 3</Card.Title>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </FadeInSection>

            <FadeInSection>
                <Container id="section5" className="my-5">
                    <h3>Contact Us</h3>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </FadeInSection>
        </main>
    )
}

export default Layout_2;