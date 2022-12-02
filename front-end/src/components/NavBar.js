import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import "../css/NavBar.css";

function NavBar() {
  return (
    <header>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
         <a className='navbar-brand title-nav'>INTEGRA FITNESS GYM </a>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto" >
              <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
              <Nav.Link as={Link} to={"/servicio"}>Servicios</Nav.Link>
              <Nav.Link as={Link} to={"/producto"}>Productos</Nav.Link>
              <Nav.Link as={Link} to={"/contacto"}>Contactos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;

