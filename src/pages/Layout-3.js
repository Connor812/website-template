import React from 'react';
import { Container, Row, Col, Card, Button, Image, Accordion, Form } from 'react-bootstrap';

import FadeInSection from '../helpers/FadeInSection';
import ProgressiveLoadImage from '../helpers/ProgressiveLoadImage';

function Layout_3() {
    return (
        <main>
            {/* Section 1: Features */}
            <FadeInSection>
                <Container id="section1" className="my-5">
                    <h2 className="text-center mb-4">Features</h2>
                    <Row>
                        <Col md={4} className="text-center d-flex flex-column align-items-center">
                            <ProgressiveLoadImage src="https://via.placeholder.com/100" alt="placeholder image" className="rounded-circle" height="100px" width="100px" />
                            <h4 className="mt-3">Feature One</h4>
                            <p>Short description of feature one.</p>
                        </Col>
                        <Col md={4} className="text-center d-flex flex-column align-items-center">
                            <ProgressiveLoadImage src="https://via.placeholder.com/100" alt="placeholder image" className="rounded-circle" height="100px" width="100px" />
                            <h4 className="mt-3">Feature Two</h4>
                            <p>Short description of feature two.</p>
                        </Col>
                        <Col md={4} className="text-center d-flex flex-column align-items-center">
                            <ProgressiveLoadImage src="https://via.placeholder.com/100" alt="placeholder image" className="rounded-circle" height="100px" width="100px" />
                            <h4 className="mt-3">Feature Three</h4>
                            <p>Short description of feature three.</p>
                        </Col>
                    </Row>
                </Container>
            </FadeInSection>

            <FadeInSection>
                <Container id="section2" className="my-5">
                    <h2 className="text-center mb-4">Testimonials</h2>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Text>"This product changed my life! Highly recommend."</Card.Text>
                                    <Card.Footer className="text-muted">- Jane Doe</Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Text>"Fantastic service and amazing quality. Will buy again."</Card.Text>
                                    <Card.Footer className="text-muted">- John Smith</Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Text>"Best purchase I have made this year. Five stars!"</Card.Text>
                                    <Card.Footer className="text-muted">- Alice Johnson</Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </FadeInSection>

            <FadeInSection>
                <Container id="section3" className="my-5">
                    <h2 className="text-center mb-4">Pricing</h2>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Header className="text-center">Basic</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-center">$9.99/month</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Feature A</li>
                                            <li>Feature B</li>
                                            <li>Feature C</li>
                                        </ul>
                                    </Card.Text>
                                    <div className="text-center">
                                        <Button variant="primary">Sign Up</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Header className="text-center">Standard</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-center">$19.99/month</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Feature A</li>
                                            <li>Feature B</li>
                                            <li>Feature C</li>
                                            <li>Feature D</li>
                                        </ul>
                                    </Card.Text>
                                    <div className="text-center">
                                        <Button variant="primary">Sign Up</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Header className="text-center">Premium</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-center">$29.99/month</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Feature A</li>
                                            <li>Feature B</li>
                                            <li>Feature C</li>
                                            <li>Feature D</li>
                                            <li>Feature E</li>
                                        </ul>
                                    </Card.Text>
                                    <div className="text-center">
                                        <Button variant="primary">Sign Up</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </FadeInSection>

            <FadeInSection>
                <Container id="section4" className="my-5">
                    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is your refund policy?</Accordion.Header>
                            <Accordion.Body>
                                Our refund policy is 30 days. No questions asked. If you are not satisfied, you can request a refund within this period.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How do I contact customer support?</Accordion.Header>
                            <Accordion.Body>
                                You can contact our customer support team via email at support@example.com or call us at (123) 456-7890.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Do you offer discounts for large orders?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we offer discounts for bulk orders. Please contact our sales team at sales@example.com for more information.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </FadeInSection>

            <FadeInSection>
                <Container id="section5" className="my-5">
                    <h2 className="text-center mb-4">Newsletter Signup</h2>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form>
                                <Form.Group controlId="formNewsletterEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>
                                <div className="text-center">
                                    <Button variant="primary" type="submit">
                                        Subscribe
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </FadeInSection>
        </main>
    )
}

export default Layout_3;