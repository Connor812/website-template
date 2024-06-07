import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { DataContext } from '../dataContext/dataContext';

// Icons
import { CgProfile } from "react-icons/cg";

function Header() {

    const { isLoggedIn, logout } = useContext(DataContext);

    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link to="/home">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/dashboard">
                                Dashboard
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item>
                                <Link to="layout_1">
                                    Layout 1
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="layout_2">
                                    Layout 2
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to="layout_3">
                                    Layout 3
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        <Link to="/login" style={{ background: "none", border: "none", marginRight: "10px", marginLeft: "15px" }}>
                            {isLoggedIn
                                ? <Button variant="outline-danger" onClick={(e) => logout(e)}>Logout</Button>
                                :
                                <CgProfile style={{ width: "30px", height: "30px" }} />
                            }

                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;