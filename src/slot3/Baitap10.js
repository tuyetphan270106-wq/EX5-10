import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css'
import "bootstrap/dist/js/bootstrap.bundle"
import { Button, Card, Carousel, Col, Container, Form, FormGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
function Baitap10() {
    return (
        <>
            <Container fluid className='bg-dark'>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark">
                                        <Container>
                                            <Navbar.Brand href="#home">Pizza</Navbar.Brand>
                                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                            <Navbar.Collapse id="responsive-navbar-nav">
                                                <Nav className="me-auto">
                                                    <Nav.Link href="#home">Home</Nav.Link>
                                                    <Nav.Link href="#aboutUs">About us</Nav.Link>
                                                    <Nav.Link href="#contact">Contact</Nav.Link>

                                                </Nav>
                                                <Nav>
                                                    <Form className="d-flex">
                                                        <Form.Control
                                                            type="search"
                                                            placeholder="Search"
                                                            className="me-2"
                                                            aria-label="Search"
                                                        />
                                                        <Button variant="outline-success"><i className="fas fa-search"></i></Button>
                                                    </Form>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Container>
                                    </Navbar>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/image/pizza1.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/image/pizza2.jpg"
                                    alt="Secound slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/image/pizza3.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <Container className='text-white'>
                            <Row>
                                <Col>
                                    <h2>Our menu</h2>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src="/image/menu1.jpg" />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="dark">Buy</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src="/image/menu2.jpg" />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="dark">Buy</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src="/image/menu3.jpg" />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="dark">Buy</Button>
                                                </Card.Body>
                                            </Card>

                                        </Col>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src="/image/menu2.jpg" />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="dark">Buy</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className='mt-2'>
                                        <Col>
                                            <h2>Book your table</h2>
                                            <Form>
                                                <Row className='mb-3'>
                                                    <FormGroup as={Col} className='mb-3'>

                                                        <Form.Control type="text" placeholder="Your name..." />
                                                    </FormGroup>
                                                    <FormGroup as={Col} className='mb-3'>
                                                        <Form.Control type="text" placeholder="Your email..." />
                                                    </FormGroup>
                                                    <FormGroup as={Col} className='mb-3'>
                                                        <Form.Select aria-label="Default select example">
                                                            <option>Select a Service</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>

                                                    </FormGroup>
                                                </Row>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                                    <Form.Control as="textarea" rows={3} placeholder='Please write your comment' />
                                                </Form.Group>
                                                <Button variant="warning" className='text-white mb-5'>Send message</Button>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Baitap10
