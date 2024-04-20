import { useContext } from "react";
import  ThemeContext from "../../store/ThemeContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "../../index.css";


const NavigationCom = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    return (
      <header>
        <Navbar expand="lg" className={isDarkTheme ? "darkBg" : "lightBg"}>
          <Container className={isDarkTheme ? "darkText" : "lightText"}>
            <Navbar.Brand
              className={isDarkTheme ? "lightText" : "darkText"}
              href="/"
            >
              GMC Academy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className={isDarkTheme ? "lightText" : "darkText"}
                  href="/"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className={isDarkTheme ? "lightText" : "darkText"}
                  href="/about"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className={isDarkTheme ? "lightText" : "darkText"}
                  href="/admission"
                >
                  Admission
                </Nav.Link>
                <Nav.Link
                  className={isDarkTheme ? "lightText" : "darkText"}
                  href="/application"
                >
                  Application
                </Nav.Link>
                <Nav.Link
                  className={isDarkTheme ? "lightText" : "darkText"}
                  href="/gallery"
                >
                  Gallery
                </Nav.Link>
                <Nav.Link
                  className={isDarkTheme ? "lightText" : "darkText"}
                  href="/blogs"
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  className={isDarkTheme ? "lightText" : "darkText"}
                  href="/contact"
                >
                  Contact
                </Nav.Link>
                <NavDropdown
                  className={isDarkTheme ? "lightText" : "darkText"}
                  title="Our Training"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/training/science">
                    Science
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/training/art">Art</NavDropdown.Item>
                  <NavDropdown.Item href="/training/commerce">
                    Commerce
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Handy Work
                  </NavDropdown.Item>
                </NavDropdown>

                {/* toggle button */}
                <Nav.Link
                  className={isDarkTheme ? "lightText" : "darkText"}
                  onClick={toggleTheme}
                >
                  {isDarkTheme ? "Dark Mode" : "Light Mode"}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
};

export default NavigationCom;
