import React from 'react'
import "./Home.css"
import { Container, Row, Col, Button, NavLink } from 'react-bootstrap';

export const Home = () => {
  return (
    <>
    <section>
    <Container className="col-xxl-8 px-4 py-5">
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
        <Col xs={10} sm={8} lg={6} className="d-flex justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block mx-auto img-fluid"
            alt=""
            width="700"
            height="500"
            loading="lazy"
          />
        </Col>
        <Col lg={6} className="text-center">
          <div>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Bienvenido al mejor marketplace de libros</h1>
            <p className="lead">
              ¡Explora un mundo de conocimiento con nuestro marketplace de libros! Descubre historias cautivadoras, sumérgete en emocionantes aventuras y aprende de los grandes pensadores
            </p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Button variant="dark" size="lg" className="px-4 me-md-2" href="/auth">
              Signup
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
      </section>
      <section>
        
      </section>
    </>
  )
}

export default Home