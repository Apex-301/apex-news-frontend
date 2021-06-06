import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavoriteBooks from './myFavoriteBooks';
import Profile from './profile';
import Login from './login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchByLocation from './SearchByLocation';

class App extends React.Component {

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
              
                </Route>
                <Route exact path="/profile">
                  <Profile></Profile>
                  <SearchByLocation></SearchByLocation>
           
                </Route>
              </Switch>
              {!isAuthenticated &&<Login></Login>}
            <Footer />
         
        </Router>
      </>
    )
  }
}

export default withAuth0(App);