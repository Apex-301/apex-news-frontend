import React, { Component } from 'react'

import axios from 'axios';

import Calendar from 'react-calendar'
import { ToastBody } from 'react-bootstrap';
import { Col, Row, Container, CardColumns, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


class Bydate extends Component {

  //  TODO: get a list of cats from the backend
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      name: '',
  date: '',
//   pageNum:1,
  showDate: false,
      server: process.env.REACT_APP_SERVER_URL
    }

    console.log("todays date", this.state.date)
  }

  onChange=async(e)=>{
e=e.toLocaleDateString().substring(0, 10)
await this.setState({
    date:e
})

this.getDate()
  }

  getDate = async () => {
  
    try {
 
        const dateNews = await axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=7aec3ee0a4574322be7cfb3704e867a7&language=en&to=${this.state.date}`)

    
      // const cats = await axios.get(`${this.state.server}/cat?name=${this.state.name}`);
 
      this.setState({
          allData:dateNews.data.articles,
          showDate:true
        //   pageNum:this.state.pageNum+1
        //   allData:dateNews.data.articles
      })


      console.log(this.state.date)
    } catch (error) {
        this.setState({
            allData:[],
            showDate:false
          //   pageNum:this.state.pageNum+1
          //   allData:dateNews.data.articles
        })
  
    }


    console.log("from get date")
}
//First render
    componentDidMount = ()=> {

        this.setState({
           date: new Date().toLocaleDateString().substring(0, 10),
        })
        this.getDate()
      }
    

  render() {
    return (
      <>
             <Calendar

             onChange ={this.onChange} 
             />

       <CardColumns>
       {
              this.state.showDate &&
                        this.state.allData.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <Card style={{ width: '25rem' }}>
                                        {/* <Card.Img variant="top" src={item.urlToImage} style={{ width: '20rem', height: '16rem', margin: 'auto' }} /> */}
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text style={{ overflow: 'auto', height: '5rem' }}>
                                                {item.description}
                                            </Card.Text>
                                            <a href={item.url}><Button variant="primary" >Go to Main Article</Button></a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </CardColumns>


      </>
    )
  }
}

export default Bydate;