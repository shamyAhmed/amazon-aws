import React, {useState} from "react";
import {Auth} from 'aws-amplify';

const Login = () => {
    const [user, setUser] = useState({username:'' , password:''});
    return (
        <div>
            <input type="text" onChange={(e) => {setUser(olduser => ({...olduser , username:e.target.value}))}} />
            <input type="text" onChange={(e) => {setUser(olduser => ({...olduser , password:e.target.value}))}} />
            <button onClick={() => {
                if(user.username && user.password){
                    Auth.signIn({username:user.username , password:user.password}).then(user=>{
                        console.log(user.challengeName)
                    })
                }
                }}>
                    Confirm
            </button>
        </div>
    )
}

export default Login;