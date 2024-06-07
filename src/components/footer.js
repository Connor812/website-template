import React from "react";
import ProgressiveLoadImage from "../helpers/ProgressiveLoadImage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
        <footer>
            <Row>
                <Col sm={4} className="d-flex d-sm-block justify-content-center">
                    <ProgressiveLoadImage src="https://www.pngitem.com/pimgs/m/355-3559795_placeholder-image-logo-svg-hd-png-download.png" alt="Placeholder" className="" height="86px" width="180px" />
                </Col>
                <Col sm={8} className="d-flex align-items-center justify-content-center my-3 justify-content-sm-end">
                    <input type="text" className="send-a-message" placeholder="Enter Email" />
                </Col>
            </Row>
            <Row>
                <Col sm={4}></Col>
                <Col sm={8}>
                    <hr className="white" />
                    <Row>
                        <Col md={4}>
                            <ul>
                                <li><b>Discover</b></li>
                                <li>Products</li>
                                <li>Services</li>
                                <li>Instruments</li>
                                <li>Case studies</li>
                            </ul>
                            <br />
                            <ul>
                                <li><b>Information For...</b></li>
                                <li>Business Partners</li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <ul>
                                <li><b>Connect With Us</b></li>
                                <li>Support</li>
                                <li>Find a Business Partner</li>
                            </ul>
                            <br />
                            <ul>
                                <li><b>About Us</b></li>
                                <li>Careers</li>
                                <li>Newsroom</li>
                                <li>What's New</li>
                                <li>Blogs</li>
                                <li>Events</li>

                            </ul>
                        </Col>
                        <Col md={4}>
                            <ul>
                                <li><b>Social Links</b></li>
                                <li>Twitter</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>


        </footer>
    );
}

export default Footer;