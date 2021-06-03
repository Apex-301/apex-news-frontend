import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component{
    render(){
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <>
            {isAuthenticated&&<>
            <img src={user.picture} alt =''></img>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            </>}
            </>
        )
    }
}


export default withAuth0(Profile);