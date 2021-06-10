import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
// import MyFavoriteBooks from './myFavoriteBooks';
import Profile from './profile';
import Login from './login';
import Home from './components/Home';
import Bydate from './components/Bydate';
import SearchByLocation from './components/SearchByLocation';
import MyNews from './components/MyNews';
import AboutUs from './components/AboutUs';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readLaterarticles : [],
  
  }
}
  passingReadLaterData = async (data)=>{
    console.log('data',data);
    await this.setState({
      readLaterarticles:data,
    });
    console.log('this.state.readLaterarticles',this.state.readLaterarticles);
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log('app', this.props)
    return(
      <>
        <Router>
            <Header />
              <Switch>
                <Route exact path="/">
                  {/* {isAuthenticated&&<MyFavoriteBooks></MyFavoriteBooks>} */}
                  <Home/>
              
                </Route>
                <Route exact path="/byDate">
                  <Bydate></Bydate>
           
                </Route>
                <Route exact path="/byLocation">
                  <SearchByLocation></SearchByLocation>
           
                </Route>
                <Route exact path="/MyNews">
                 {isAuthenticated&&<MyNews passingReadLaterData={this.passingReadLaterData}></MyNews>}
                 <br></br>
             
             
             {!isAuthenticated &&<Login></Login>}
             
             
             <br></br>
                </Route>
               
                <Route exact path="/profile">
                {isAuthenticated&&<Profile readLaterarticles={this.state.readLaterarticles} passingReadLaterData={this.passingReadLaterData} ></Profile>}
                <br></br>
             
             
             {!isAuthenticated &&<Login></Login>}
             
             
             <br></br>
                </Route>
                <Route exact path="/aboutUs">
                  <AboutUs></AboutUs>
                 
           
                </Route>
              </Switch>
             
            <Footer />
         
        </Router>
      </>
    )
  }
}

export default withAuth0(App);