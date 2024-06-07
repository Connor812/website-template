import React from 'react';
import ProgressiveLoadImage from '../helpers/ProgressiveLoadImage';
import FadeInSection from '../helpers/FadeInSection';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

import "../assets/css/layout_1.css";

function Layout_1() {
    return (
        <main>
            <FadeInSection>
                <ProgressiveLoadImage src="https://www.blackburnkitchens.com.au/wp-content/uploads/2019/07/hero-placeholder.png" alt="PlaceHolder Image" className="layout_1_hero" height="380px" width="100%" />
            </FadeInSection>

            <FadeInSection>
                <section className="layout_1_section_1">
                    <h1>Section 1</h1>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui at lacus
                        tincidunt aliquam. Nulla facilisi. Cras nec nunc nec ligula vehicula aliquet. Nulla
                        facilisi. Cras nec nunc nec ligula vehicula aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui at lacus
                        tincidunt aliquam. Nulla facilisi. Cras nec nunc nec ligula vehicula aliquet. Nulla
                        facilisi. Cras nec nunc nec ligula vehicula aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui at lacus
                        tincidunt aliquam. Nulla facilisi. Cras nec nunc nec ligula vehicula aliquet. Nulla
                        facilisi. Cras nec nunc nec ligula vehicula aliquet.
                    </p>
                </section>
            </FadeInSection>
            <FadeInSection>
                <section className="layout_1_section_2">
                    <h1>Section 2</h1>
                    <hr />

                    <Row>
                        <Col sm={4} className="bootstrap-card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4} className="bootstrap-card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4} className="bootstrap-card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </FadeInSection>
            <FadeInSection>
                <section className="layout_1_section_3">
                    <h1>Section 3</h1>
                    <hr />
                    <center>
                        <Row className="layout_1_section_3_container">
                            <Col xs={12} md={4}>
                                <ProgressiveLoadImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFiE0FWYJYxOt6vtYB-AWwVSyroEUZAPWuA&s" alt="PlaceHolder Image" className="layer_1_section_3_img" height="auto" width="100%" />
                            </Col>
                            <Col xs={12} md={8}>
                                <h1 className='text-start'>Sub Heading</h1>
                                <hr />
                                <p className="layout_1_section_3_paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui at lacus
                                    tincidunt aliquam. Nulla facilisi. Cras nec nunc nec ligula vehicula aliquet. Nulla
                                    facilisi. Cras nec nunc nec ligula vehicula aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui at lacus
                                    tincidunt aliquam. Nulla facilisi. Cras nec nunc nec ligula vehicula aliquet. Nulla
                                    facilisi. Cras nec nunc nec ligula vehicula aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui at lacus
                                    tincidunt aliquam. Nulla facilisi. Cras nec nunc nec ligula vehicula aliquet. Nulla
                                    facilisi. Cras nec nunc nec ligula vehicula aliquet.
                                </p>
                            </Col>
                        </Row>
                    </center>
                </section>
            </FadeInSection>


        </main >
    )
}

export default Layout_1