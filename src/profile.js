import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button,Card, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          readLaterarticles : [],
          REACT_APP_SERVER: process.env.REACT_APP_SERVER,
          showRender : false,
      
      }
      this.anotherFunction()
    }
   anotherFunction =async ()=>{
    let choosenArticles = await axios.get(`${this.state.REACT_APP_SERVER}/choosenArticles`,{params:{email:this.props.auth0.user.email}})
    await  this.setState({
        readLaterarticles : choosenArticles.data,
        showRender: true,
      })
      console.log('this.state.showRender after',this.state.showRender);
      console.log('choosenArticles',choosenArticles);
   }
//    async componentDidMount(){

//         let choosenArticles = await axios.get(`${this.state.REACT_APP_SERVER}/choosenArticles`,{params:{email:this.props.auth0.user.email}})
//       await  this.setState({
//           readLaterarticles : choosenArticles.data,
//           showRender: true,
//         })
//         console.log('this.state.showRender after',this.state.showRender);
//         console.log('this.state.readLaterarticles after',this.state.readLaterarticles);
//     }
    deleteArticle=(async (idx,value)=>{
        const email= this.props.auth0.user.email;
        value.email=email;
        // console.log('{params:email,value}',{params:value});
      let dataAfterDeleting= await axios.delete(`${this.state.REACT_APP_SERVER}/deleteArticle/${idx}`,{params:value,email})
    //   console.log('dataAfterDeleting',dataAfterDeleting);
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
      { this.state.showRender&&  this.state.readLaterarticles.map((value,idx)=>{
             return(
               <>
             {/* <div > */}
             <Card className="text-center" key={idx}>
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
           {/* </div> */}
           </>
             )
         })
            }

            {!(this.state.readLaterarticles.length)&& <h1>your have no saved articles</h1> }
            </>
        )
    }
}


export default withAuth0(Profile);