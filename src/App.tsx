import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [modalCarrito, setModalCarrito] = useState(false);
  const [modalDetalles, setModalDetalles] = useState(false);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="mx-auto">Grupo Yalasoft</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col xs={4}>
            <Card style={{ minWidth: '18rem', margin: '20px' }}>
              <Card.Img variant="top" src= "/Bateria_Pearl.jpg" alt="image"/>
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Text>Descripcion</Card.Text>
                <Row>
                  
                  <Col>
                    <Button variant="warning" onClick={() => setModalCarrito(true)}>Añadir al carrito</Button>
                  </Col>

                  <Col>
                    <Button variant="warning" onClick={() => setModalDetalles(true)}>Mas detalles</Button>
                  </Col>

                </Row>

              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>

      <Modal
        show={modalCarrito}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setModalCarrito(false)}
        centered
      >
        <Modal.Header closeButton className="bg-success text-white" style={{ border: 'none' }}>
          <Modal.Title id="contained-modal-title-vcenter">
            Correcto!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-success text-white" style={{ border: 'none' }}>

          <div className='container-fluid'>
            <div className='fw-bold' style={{ fontSize: '24px' }}>Su producto se agregó al carrito.</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-success text-white" style={{ border: 'none' }}>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalDetalles}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setModalDetalles(false)}
        centered
      >
        <Modal.Header closeButton className="bg-danger text-white" style={{ border: 'none' }}>
          <Modal.Title id="contained-modal-title-vcenter">
            Error!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-danger text-white" style={{ border: 'none' }}>
          <div className='container-fluid'>
            <div className='fw-bold' style={{ fontSize: '24px' }}>No existe el producto seleccionado.</div>
          </div>

        </Modal.Body>
        <Modal.Footer className="bg-danger text-white" style={{ border: 'none' }}>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default App
