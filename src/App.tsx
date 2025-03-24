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
  const [tituloDetalles, setTituloDetalles] = useState("");
  const [descripcionDetalles, setDescripcionDetalles] = useState("");

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="mx-auto">Grupo Yalasoft</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col>
            <Card style={{ minWidth: '18rem', margin: '20px' }}>
              <Card.Img variant="top" src= "/Bateria_Pearl.jpg" alt="image" style={{ width: '100%', height: '250px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>Pearl bateria acustica – Export EXX725SP/C</Card.Title>
                <Card.Text>Acabado lacado, Capas de álamo y caoba, Configuración 10-12-14-16-22.</Card.Text>
                <Row>
                  
                  <Col>
                    <Button variant="warning" onClick={() => setModalCarrito(true)}>Agregar al carrito</Button>
                  </Col>

                  <Col>
                    <Button variant="warning" onClick={() => {setModalDetalles(true); setTituloDetalles("Pearl bateria acustica – Export EXX725SP/C");
                                                              setDescripcionDetalles('Batería Acústica Pearl Export EXX Jet Black. El nuevo modelo nuevos colores y el hardware, y mucho más, hacen de esta batería Pearl EXX una versión actualizada de uno de los kits de batería más populares y accesibles.')  
                    }}>Mas detalles</Button>
                  </Col>

                </Row>

              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ minWidth: '18rem', margin: '20px' }}>
              <Card.Img variant="top" src= "/Fundacion.jpg" alt="image" style={{ width: '100%', height: '250px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>La Trilogia de la Fundación</Card.Title>
                <Card.Text>La Trilogía de la Fundación está considerada la mejor serie de la ciencia ficción universal. Fue galardonada en 1966 con un premio Hugo</Card.Text>
                <Row>
                  
                  <Col>
                    <Button variant="warning" onClick={() => setModalCarrito(true)}>Agregar al carrito</Button>
                  </Col>

                  <Col>
                    <Button variant="warning" onClick={() => {setModalDetalles(true); setTituloDetalles("La Trilogia de la Fundación");
                                                              setDescripcionDetalles('El hombre se ha dispersado por toda la galaxia. La capital del Imperio es Trántor, nido de intrigas y corrupción.' +
                                                                'Gracias a su ciencia, fundada en el estudio matemático de los hechos históricos y el comportamiento de las masas, el psicohistoriador Hari Seldon prevé la caída del Imperio y el retorno a la barbarie durante varios milenios')  
                    }}>Mas detalles</Button>
                  </Col>

                </Row>

              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ minWidth: '18rem', margin: '20px' }}>
              <Card.Img variant="top" src= "/Led_Zeppelin.jpg" alt="image" style={{ width: '100%', height: '250px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>Led Zeppelin IV</Card.Title>
                <Card.Text>Es el cuarto álbum de estudio de la banda de rock inglesa Led Zeppelin, lanzado el 8 de noviembre de 1971 </Card.Text>
                <Row>
                  
                  <Col>
                    <Button variant="warning" onClick={() => setModalCarrito(true)}>Agregar al carrito</Button>
                  </Col>

                  <Col>
                    <Button variant="warning" onClick={() => {setModalDetalles(true); setTituloDetalles("Led Zeppelin IV");
                                                              setDescripcionDetalles('Fue producido por Jimmy Page, guitarrista del grupo, y grabado entre diciembre de 1970 y febrero de 1971. Contiene "Black Dog", "Rock and Roll" y "Stairway to Heaven"')  
                    }}>Mas detalles</Button>
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
        <Modal.Header closeButton className="bg-danger text-white" style={{ border: 'none' }}>
          <Modal.Title id="contained-modal-title-vcenter">
            Error!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-danger text-white" style={{ border: 'none' }}>

          <div className='container-fluid'>
            <div className='fw-bold' style={{ fontSize: '24px' }}>No se pudó agregar el producto al carrito.</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-danger text-white" style={{ border: 'none' }}>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalDetalles}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setModalDetalles(false)}
        centered
      >
        <Modal.Header closeButton className="bg-light text-black" >
          <Modal.Title id="contained-modal-title-vcenter">
            {tituloDetalles}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light text-black" style={{ border: 'none' }}>
          <div className='container-fluid'>
            <div style={{ fontSize: '18px' }}>{descripcionDetalles}</div>
          </div>

        </Modal.Body>
        <Modal.Footer className="bg-light text-black" style={{ border: 'none' }}>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default App
