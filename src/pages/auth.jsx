import React from "react";
import Register from "../components/register/Register";
import LOGIN from "../components/login/login";
import Confirm from "../components/confirm/confirm";

const AuthPage = () => {
    return(
        <div className="App">
            Rister : 
            <Register />

            Login : 
            <br />

            <LOGIN />

            Confirm :
            <Confirm />
        </div>
    )
}

export default AuthPage;