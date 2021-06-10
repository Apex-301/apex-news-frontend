import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button,Card, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import './css/profile.css';
import 'font-awesome/css/font-awesome.min.css';

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
    let choosenArticles = await axios.get(`http://localhost:3003/choosenArticles`,{params:{email:this.props.auth0.user.email}})
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
      let dataAfterDeleting= await axios.delete(`http://localhost:3003/deleteArticle/${idx}`,{params:value,email})
    //   console.log('dataAfterDeleting',dataAfterDeleting);
       this.setState({
        readLaterarticles: dataAfterDeleting.data,
      });
    });

    render(){
        
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <>
           {isAuthenticated && <div>
          <div className="cardProfile1">
            <img src={user.picture}  className="cardProfile1__image"/>
            <p className="cardProfile1__name">{user.name}</p>
            <p className="cardProfile1__name">{user.email}</p>
            <ul className="social-icons1">
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-codepen"></i></a></li>
            </ul>
          </div>
        </div>}


{/* {isAuthenticated&&

<div classNameName="containerssss">
        <div classNameName="cover-photo">
          <img src={user.picture} classNameName="profile" />
        </div>
        <div classNameName="profile-name">{user.name}</div> 
      </div>

    } */}


            {/* {console.log('this.props.readLaterarticles',this.props.readLaterarticles[0].name)} */}
            {/* <h1>{this.props.readLaterarticles[0].name}</h1> */}
            <br></br>
            <br></br>
            <hr></hr>
            <h1 id='savedArt'>Saved Articles :</h1>
            <hr></hr>
            <br></br>
<div className="containerprofile mx-auto mt-4">
  <div className="row">
      { this.state.showRender&&  this.state.readLaterarticles.map((value,idx)=>{
             return(
               <>
            {/* <div > */}
            <div className="col-md-4">
          
          <div className="card">
      <img src={value.urlToImage} alt="..." className="imageProfile"></img>
    
      <div className="card-body">
        <h5 className="card-title">{value.title}</h5>
    
        <p className="card-text">   {value.description}</p>
        {/* <a href="#" className="btnb mr-2" onClick={()=>this.deleteArticle(idx,value)}> Delete</a>
        <a href={value.url} className="btnb">Visit Site</a> */}
        <a  className="btnsaveArticle btnsaveArticle--with-icon" onClick={()=>this.deleteArticle(idx,value)}><i className="btnsaveArticle-icon fa fa-times"></i>Delete</a>
        <a href={value.url} className="btnsaveArticle btnsaveArticle--with-icon" ><i className="btnsaveArticle-icon fa fa-long-arrow-right"></i>Visit Site</a>
        </div>


        </div>
        </div>



 
           </>
             )
         })
            }

</div> 

      </div>

            {!(this.state.readLaterarticles.length)&& <h1>You have no saved articles</h1> }

            
            </>
            
        )
    }
}


export default withAuth0(Profile);