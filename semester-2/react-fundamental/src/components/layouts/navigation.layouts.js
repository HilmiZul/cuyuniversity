import { Navbar, Container, Nav } from 'react-bootstrap'
import '../../App.css'

const Navigation = (props) => {
  const path = window.location.pathname

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Cuy-Course.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={path === "/" ? 'active' : ''}>HOME</Nav.Link>
            <Nav.Link href="/albums" className={path === "/albums" ? 'active' : ''}>ALBUMS</Nav.Link>
            <Nav.Link href="/posts" className={path === "/posts" ? 'active' : ''}>POST</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  )
}

export default Navigation