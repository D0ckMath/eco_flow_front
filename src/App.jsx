import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './pages/Home';
import Produto from './components/Produto';
import Categoria from './components/Categoria';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">EcoFlow</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/produtos">Produtos</Nav.Link>
              <Nav.Link href="/categorias">Categorias</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="/categorias" element={<Categoria />} />
      </Routes>
    </Router>
  );
}

export default App
