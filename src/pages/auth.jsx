import React from "react";
import Register from "../components/register/Register";
import LOGIN from "../components/login/login";
import Confirm from "../components/confirm/confirm";

const AuthPage = ({settingUser}) => {
    return(
        <div className="App">
            Rister : 
            <Register />

            Login : 
            <br />

            <LOGIN settingUser={settingUser} />

            Confirm :
            <Confirm />
        </div>
    )
}

export default AuthPage;