import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'; // Import your CSS file for styling

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src="/public/podcast_logo.png" style={{width: '200px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className='navbar-flex-container'>
            <div className='navbar-left'>
            </div>
            <div className='navbar-right'>
              <Button style={{ color: "white" }} className="btn btn-outline-success" type="submit">Sign Out</Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
