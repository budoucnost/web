import React, { useState } from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Row,
  Col
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import Home from './Home'
// import Petition from './Petition'
import Contact from './Contact'
import Sidebar from './Sidebar'
import NavLink from './components/NavLink'
import logo from './logo.png'
import './App.css'

function App() {
  return (
    <Router>
      <TopBar />

      <div className="container">
        <Row className="mb-4">
          <Col sm="8">
            <h1 className="hairline">Pojďme tvořit budoucnost společně</h1>
          </Col>
          <Col sm="4">
            <a href="https://www.facebook.com/BudoucnostCZ">
              <FontAwesomeIcon icon={faFacebook} size="3x" className="mr-3" />
            </a>
            <a href="https://twitter.com/Budoucnost_cz">
              <FontAwesomeIcon icon={faTwitter} size="3x" className="mr-3" />
            </a>
            <a href="https://www.instagram.com/budoucnostcz/?igshid=chd2z8pw5rna">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </Col>
        </Row>

        <Row>
          <Col sm="8">
            <Route path="/" exact component={Home} />
            {/*<Route path="/petice" component={Petition} />*/}
            <Route path="/kontakt" component={Contact} />
          </Col>
          <Col sm="4" className="sidebar">
            <Sidebar />
          </Col>
        </Row>
      </div>
    </Router>
  )
}

function TopBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar light expand="md">
      <div className="container">
        <NavbarBrand tag={Link} to="/">
          <img src={logo} height="128" alt="Logo" />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ml-auto">
            {/*
            <NavItem>
              <NavLink to="/petice">Petice</NavLink>
            </NavItem>
            */}
            <NavItem>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default App
