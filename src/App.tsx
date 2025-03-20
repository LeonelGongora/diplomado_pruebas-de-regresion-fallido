//import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="mx-auto">Grupo Yalasoft</Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  )
}

export default App
