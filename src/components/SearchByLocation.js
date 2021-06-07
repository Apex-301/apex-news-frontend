import axios from 'axios';
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Row, Container, CardColumns, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../css/SearchByLocation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchByLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityData: '',
            imgId: '',
            showFlags: true,
            showNews: false,
            showButton: false
        }
    }

    getLocationNews = async (event) => {
        event.preventDefault();

        await this.setState({
            imgId: event.target.id
        })
        console.log(this.state.imgId);


        let locationUrl = `https://newsapi.org/v2/top-headlines?country=${this.state.imgId}&apiKey=fefe881ab37e4dfb8549c838a3228a39`;

        let newsResult = await axios.get(locationUrl);

        await this.setState({
            cityData: newsResult.data.articles,
            showFlags: false,
            showNews: true,
            showButton: true
        })
        console.log(this.state.cityData);

    }

    goBackToFlags = () => {
        this.setState({
            showFlags: true,
            showNews: false,
            showButton: false
        })
    }

    render() {

        return (
            <div style={{ marginTop: '25px' }}>
                {this.state.showFlags &&
                    <Container className='flag'>
                        <Row>
                            <Col xs={5} md={3} >

                                <Image alt='Argentina' src='https://newsapi.org/images/flags/ar.svg' id='ar' onClick={this.getLocationNews} rounded />

                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Greece' src='https://newsapi.org/images/flags/gr.svg' id='gr' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Austria' src='https://newsapi.org/images/flags/at.svg' id='at' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Australia' src='https://newsapi.org/images/flags/au.svg' id='au' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Bulgaria' src='https://newsapi.org/images/flags/bg.svg' id='bg' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Brazil' src='https://newsapi.org/images/flags/br.svg' id='br' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Canada' src='https://newsapi.org/images/flags/ca.svg' id='ca' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Switzerland' src='https://newsapi.org/images/flags/ch.svg' id='ch' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='China' src='https://newsapi.org/images/flags/cn.svg' id='cn' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Colombia' src='https://newsapi.org/images/flags/co.svg' id='co' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Cuba' src='https://newsapi.org/images/flags/cu.svg' id='cu' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Belgium' src='https://newsapi.org/images/flags/be.svg' id='be' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Czech Republic' src='https://newsapi.org/images/flags/cz.svg' id='cz' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Germany' src='https://newsapi.org/images/flags/de.svg' id='de' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Greece' src='https://newsapi.org/images/flags/gr.svg' id='gr' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='UAE' src='https://newsapi.org/images/flags/ae.svg' id='ae' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Egypt' src='https://newsapi.org/images/flags/eg.svg' id='eg' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='France' src='https://newsapi.org/images/flags/fr.svg' id='fr' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='UK' src='https://newsapi.org/images/flags/gb.svg' id='gb' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Hong Kong' src='https://newsapi.org/images/flags/hk.svg' id='hk' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Hungary' src='https://newsapi.org/images/flags/hu.svg' id='hu' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Indonesia' src='https://newsapi.org/images/flags/id.svg' id='id' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Ireland' src='https://newsapi.org/images/flags/ie.svg' id='ie' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='India' src='https://newsapi.org/images/flags/in.svg' id='in' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Italy' src='https://newsapi.org/images/flags/it.svg' id='it' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Japan' src='https://newsapi.org/images/flags/jp.svg' id='jp' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='South Korea' src='https://newsapi.org/images/flags/kr.svg' id='kr' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Lithuania' src='https://newsapi.org/images/flags/lt.svg' id='lt' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Latvia' src='https://newsapi.org/images/flags/lv.svg' id='lv' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Morocco' src='https://newsapi.org/images/flags/ma.svg' id='ma' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Mexico' src='https://newsapi.org/images/flags/mx.svg' id='mx' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Malaysia' src='https://newsapi.org/images/flags/my.svg' id='my' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Nigeria' src='https://newsapi.org/images/flags/ng.svg' id='ng' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Netherlands' src='https://newsapi.org/images/flags/nl.svg' id='nl' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Norway' src='https://newsapi.org/images/flags/no.svg' id='no' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='New Zealand' src='https://newsapi.org/images/flags/nz.svg' id='nz' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Philippines' src='https://newsapi.org/images/flags/ph.svg' id='ph' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Poland' src='https://newsapi.org/images/flags/pl.svg' id='pl' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Portugal' src='https://newsapi.org/images/flags/pt.svg' id='pt' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Romania' src='https://newsapi.org/images/flags/ro.svg' id='ro' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Serbia' src='https://newsapi.org/images/flags/rs.svg' id='rs' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Russia' src='https://newsapi.org/images/flags/ru.svg' id='ru' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='KSA' src='https://newsapi.org/images/flags/sa.svg' id='sa' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Sweden' src='https://newsapi.org/images/flags/se.svg' id='se' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Singapore' src='https://newsapi.org/images/flags/sg.svg' id='sg' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Slovenia' src='https://newsapi.org/images/flags/si.svg' id='si' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Slovakia' src='https://newsapi.org/images/flags/sk.svg' id='sk' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Thailand' src='https://newsapi.org/images/flags/th.svg' id='th' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Turkey' src='https://newsapi.org/images/flags/tr.svg' id='tr' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Taiwan' src='https://newsapi.org/images/flags/tw.svg' id='tw' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='Ukraine' src='https://newsapi.org/images/flags/ua.svg' id='ua' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='USA' src='https://newsapi.org/images/flags/us.svg' id='us' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={5} md={3} >
                                <Image alt='Venuzuela' src='https://newsapi.org/images/flags/ve.svg' id='ve' onClick={this.getLocationNews} rounded />
                            </Col>
                            <Col xs={5} md={3}>
                                <Image alt='South Africa' src='https://newsapi.org/images/flags/za.svg' id='za' onClick={this.getLocationNews} rounded />
                            </Col>
                        </Row>
                        <br></br>
                    </Container>}
                {this.state.showNews &&

                    <CardColumns>
                        <Button variant='danger' onClick={this.goBackToFlags}>Go Back</Button>

                        {this.state.cityData.map((item, idx) => {
                         
                            return (
                                <div key={idx}>
                                    <Card className="text-center">
                                        <Card.Header>{item.source.name}</Card.Header>
                                        <Card.Body>
                                            <Card.Img variant="top" src={item.urlToImage} style={{ width: '20rem', height: '20rem', margin: 'auto' }} />
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text style={{ overflow: 'auto', height: '3rem' }}>
                                            {item.description}
                                            </Card.Text>
                                            <a href={item.url}><Button >Go to Article</Button></a>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">Publish Date: {item.publishedAt}</Card.Footer>
                                    </Card>
                                </div>
                            )
                        })}
                    </CardColumns>
                }

            </div>
        )
    }
}

export default SearchByLocation