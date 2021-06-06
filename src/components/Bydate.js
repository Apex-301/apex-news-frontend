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
  date: new Date().toISOString().substring(0, 10),
//   pageNum:1,
  showDate: false,
      server: process.env.REACT_APP_SERVER_URL
    }

    console.log("todays date", this.state.date)
  }

  onChange=(e)=>{
e=e.toISOString().substring(0, 10)
this.setState({
    date:e
})

this.getDate()
  }

  getDate = async () => {
  
    try {
 
    const dateNews = await axios.get(`http://api.mediastack.com/v1/news?access_key=5156471d81925efac6c18515de058219&date=${this.state.date}`)

    
      // const cats = await axios.get(`${this.state.server}/cat?name=${this.state.name}`);
 
      this.setState({
          allData:dateNews.data.data,
          showDate:true
        //   pageNum:this.state.pageNum+1
        //   allData:dateNews.data.articles
      })
    } catch (error) {
      console.log(error)
    }
}
//First render
    componentDidMount = async()=> {
       
        try {
 
            const dateNews = await axios.get(`http://api.mediastack.com/v1/news?access_key=5156471d81925efac6c18515de058219&date=${this.state.date}`)
        
            
              this.setState({
                  allData:dateNews.data.data,
                  showDate:true
        
              })
            } catch (error) {
              console.log(error)
            }

      }
    

  render() {
    return (
      <>
             <Calendar

             onClickDay={this.onChange} 
             />

             {/* <button  onClick={this.getDate}>get date </button > */}




          {/* {
              this.state.showDate &&
                this.state.allData.map((item, idx) => {
                    return (
                        <div key={idx}>

                            
                          <p>  {item.title} </p>
                          
                        </div>
                    )
                })
            } */}
       


       <CardColumns>
       {
              this.state.showDate &&
                        this.state.allData.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Img variant="top" src={item.image} style={{ width: '20rem', height: '16rem', margin: 'auto' }} />
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