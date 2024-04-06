import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


const NavigationCom = () => {
    return (
      <header>
        <Navbar expand="lg" className="bg-warning">
          <Container>
            <Navbar.Brand href="/">GMC Academy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/admission">Admission</Nav.Link>
                <Nav.Link href="/application">Application</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/blogs">Blog</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <NavDropdown title="Our Training" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/training/science">Science</NavDropdown.Item>
                  <NavDropdown.Item href="/training/art">
                    Art
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/training/commerce">
                    Commerce
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Handy Work
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
};

export default NavigationCom;
