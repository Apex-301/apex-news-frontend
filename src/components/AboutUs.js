import React, { Component } from 'react'
import '../css/AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import yazan from '../img/yazan2.jpg';
import ahmad from '../img/ahmad.jpg';
import bahaa from '../img/bahaa2.png';
import fatima from '../img/fatima2.jpg';
import zytoon from '../img/zytoon2.png';
import 'font-awesome/css/font-awesome.min.css';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Jumbotron className='jumbo'>
                    <h1>About Us</h1>
                    <p>
                        Meet our team members.
                    </p>

                </Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-2 col-lg-3">
                            <div className="our-team">
                                <div className="picture">
                                    <img className="img-fluid" src={yazan}/>
        </div>
                                    <div className="team-content">
                                        <h3 className="name">Yazan Tafesh</h3>
                                        <h4 className="title">Civil engineer looking forward to excel at software development</h4>
                                    </div>
                                    <ul className="social">
                                        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                                        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                                        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                                        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="our-team">
                                            <div className="picture">
                                                <img className="img-fluid" src={zytoon}/>
        </div>
                                                <div className="team-content">
                                                    <h3 className="name">Mohammad Saleh</h3>
                                                    <h4 className="title">Electrical Engineer passionate about learning software development</h4>
                                                </div>
                                                <ul className="social">
                                                    <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                                                    <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                                                    <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                                                    <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="our-team">
                                    <div className="picture">
                                        <img className="img-fluid" src={bahaa}/>
        </div>
                                        <div className="team-content">
                                            <h3 className="name">Bahaa' Qasem</h3>
                                            <h4 className="title">Software Developer
Looking forward to improve my technical knowledge</h4>
                                        </div>
                                        <ul className="social">
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                                        </ul>
                                    </div>
                                </div>
                              
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                              
                                    <div className="our-team">
                                        <div className="picture">
                                            <img className="img-fluid" src={fatima}/>
        </div>
                                            <div className="team-content">
                                                <h3 className="name">Fatima AlShraa</h3>
                                                <h4 className="title">I'm Radiologic Technologic ,I hope to be a good software developer</h4>
                                            </div>
                                            <ul className="social">
                                                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                                                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                                                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                                                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="our-team">
                                <div className="picture">
                                    <img className="img-fluid" src={ahmad}/>
        </div>
                                    <div className="team-content">
                                        <h3 className="name">Ahmad Abu Osbeh</h3>
                                        <h4 className="title">Mechanical Engineer looking forward to be a software developer</h4>
                                    </div>
                                    <ul className="social">
                                        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                                        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                                        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                                        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                                    </ul>
                                </div>
                            </div>

                                  
                                    </div>
                                </div>

                            </div>
        )
    }
}

export default AboutUs;
