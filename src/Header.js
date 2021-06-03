import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import LoginButton from './loginBtton';
import LogoutButton from './logoutButton';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite news</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
         {!isAuthenticated &&<LoginButton></LoginButton>}
         {isAuthenticated &&<LogoutButton></LogoutButton>}
      </Navbar>
    )
  }
}

export default withAuth0(Header);