import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Button, Card,CardGroup } from "react-bootstrap";
import axios from 'axios';

class Home extends React.Component {
constructor(props){
    super(props);
    this.state={
        categ1:[],
    }
}

async componentDidMount(){
 let categ1 = await axios.get("https://gnews.io/api/v4/search?q=sports&token=d8903f3430caadb55e96b9f0ac6f9696&lang=en");
this.setState({
   categ1 : categ1.data.articles[0],
});

}
    render() {
        return (
            <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=6&m=1182477852&s=612x612&w=0&h=X-UipiiX5xcMw9dBhzKZWG7UcWjEOARl2s_oTVV8rtE="
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://lh3.googleusercontent.com/proxy/W9F4gQKKHd1qDuhP4wobZWICSOk5GrpKJ7C5tKhOHJFi5kSaaWiAXUPoyxdpqBWPOINx1ysg9I-qHt3J_N6LfFE_relkUA2pEzQYqWrAcKOHM4UfJsUrLAqdfUGikh4"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<CardGroup>
  <Card>
      <Card.Title>{this.state.categ1.title}</Card.Title>
    <Card.Img variant="top" src={this.state.categ1.image} />
    <Card.Body>
      <Card.Text>
        {this.state.categ1.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
 
  
</CardGroup>
            </>
        )
    }
}

export default Home;