import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { Container, Row, Col ,Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'

import './css/footer.css';

class Footer extends React.Component {
  render() {
    return(
      <>
 
 <>
{/* Site footer */}
<footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">See Latest News , <br />
Add Favourite to your Account and more ! <br />
 <a href="https://dev-uunhloig.us.auth0.com/u/signup?state=hKFo2SBxbm84a1JRMkJvMzZic216MG5jNk9Zc2V2d0FhOFdxN6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIG5kcS0tY1NGNGloeTRiRnFTdm5PYmJJdmhRRnlWMEZHo2NpZNkgTGhhb0tFeEN1MnNmTVRCcmxUR25SQ1NSNEV4dG5EMzc" > <strong>Sign up today </strong> </a> </p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/byDate">By Date</a></li>
          <li><a href="/byLocation">By location</a></li>
          <li><a href="myNews/">My News</a></li>
          <li><a href="/aboutus">About US</a></li>

        </ul>
      </div>
      
    </div>
    <hr />
  </div>
  <div className="container">
 
        <p className="copyright-text">Copyright © 2021 All Rights Reserved 
        </p>
 
  </div>
</footer>
</>


</>

    )
  }
}

export default Footer;
