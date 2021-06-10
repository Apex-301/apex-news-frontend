import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LoginButton2 from './loginBtton2';



import './login.css';

class Login extends React.Component {


  render() {
    return(

      
      <Card style={{ width: '18rem',height:'400px' }}>
        <Card.Body>
          <br></br>
          <Card.Title id='titleee1'>Welcome To Apex News!</Card.Title>
          <br></br>
          <Card.Text id='message11'>
            Please log in to continue..
          </Card.Text>
         <LoginButton2></LoginButton2>
            
         
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
