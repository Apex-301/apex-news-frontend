import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button,Card, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          readLaterarticles : this.props.readLaterarticles,
          REACT_APP_SERVER: process.env.REACT_APP_SERVER,
      
      }
      this.props.passingReadLaterData()
    }
   
    // componentDidMount(){
    //     this.setState({
    //         readLaterarticles : this.props.readLaterarticles,
    //     })
    // }
    deleteArticle=(async (idx,value)=>{
        const email= this.props.auth0.user.email;
        value.email=email;
        console.log('{params:email,value}',{params:value});
      let dataAfterDeleting= await axios.delete(`${this.state.REACT_APP_SERVER}/deleteArticle/${idx}`,{params:value,email})
      console.log('dataAfterDeleting',dataAfterDeleting);
       this.setState({
        readLaterarticles: dataAfterDeleting.data,
      });
    });

    render(){
        
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <>
            {isAuthenticated&&<>
            <img src={user.picture} alt =''></img>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            </>}
            {/* {console.log('this.props.readLaterarticles',this.props.readLaterarticles[0].name)} */}
            {/* <h1>{this.props.readLaterarticles[0].name}</h1> */}
            <h1>Saved Articles :</h1>
         {this.state.readLaterarticles.map((value,idx)=>{
             return(

             <div key={idx}>
             <Card className="text-center">
                 <Card.Header>{value.name}</Card.Header>
                 <Card.Body>
                     <Card.Img variant="top" src={value.urlToImage} style={{ width: '20rem', height: '20rem', margin: 'auto' }} />
                     <Card.Title>{value.title}</Card.Title>
                     <Card.Text style={{ overflow: 'auto', height: '3rem' }}>
                     {value.description}
                     </Card.Text>
                     <Button onClick={()=>this.deleteArticle(idx,value)} >delete</Button>
                     <a href={value.url}><Button >Go to Article</Button></a>
                 </Card.Body>
                 <Card.Footer className="text-muted">Publish Date: {value.publishedAt}</Card.Footer>
             </Card>
           </div>
             )
         })}

            </>
        )
    }
}


export default withAuth0(Profile);