import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
import LoginButton from './loginBtton';
import LogoutButton from './logoutButton';
import { withAuth0 } from '@auth0/auth0-react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { Container, Row, Col ,Card } from 'react-bootstrap';
import Logo from './img/logo3.png';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (





      <Navbar collapseOnSelect expand="lg" className='allheader'>
        <Container>
          {/* <Navbar.Brand href="/" className='navheader'></Navbar.Brand> */}
          <img src={Logo} style={{ height:'100px',width:'100px',marginLeft:"-6em"}} id='imagee'></img>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav id='homee' className="mr-auto">
              <Nav.Link href="/" className='navheader' >Home</Nav.Link>
              <Nav.Link href="/profile" className='navheader'>Saved Articles</Nav.Link>
              <Nav.Link href="/byDate" className='navheader'>By Date</Nav.Link>
              <Nav.Link href="/byLocation" className='navheader'>By Country</Nav.Link>
              <Nav.Link href="/myNews" className='navheader'>My News</Nav.Link>
              <Nav.Link href="/aboutus" className='navheader'>About US</Nav.Link>
            </Nav>

          </Navbar.Collapse>

          <Nav>
          <NavDropdown title="Account" id="basic-nav-dropdown" style={{width:'43px'}} >
                <NavDropdown.Item id='navvvitem' > {!isAuthenticated && <LoginButton></LoginButton>}
                {isAuthenticated && <LogoutButton></LogoutButton>}
                </NavDropdown.Item>
                {/* <NavDropdown.Item></NavDropdown.Item> */}




              </NavDropdown>
          </Nav>
        </Container>
      </Navbar>






    )
  }
}

export default withAuth0(Header);
