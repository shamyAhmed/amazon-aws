import React, {useState} from "react";
import { Auth } from "aws-amplify";
const Register = () => { 
    const [user, setUser] = useState({username:'' , password:'' , email:''});
    return(
        <div className="register-container">
            username
            <input type="text" onChange={(e) => {setUser(oldUser=>({...oldUser,username:e.target.value}))}}/>
            password
            <input type="text" onChange={(e) => {setUser(oldUser=>({...oldUser,password:e.target.value}))}}/>
            email
            <input type="text" onChange={(e) => {setUser(oldUser=>({...oldUser,email:e.target.value}))}}/>
            <button onClick={()=>{
                if(!user.usename && !user.password && user.email){
                    Auth.signUp({username:user.username, password:user.password,autoSignIn:true, attributes:{email:user.email}}).then(user=>{
                        console.log(user);
                    })
                }
            }}>Confirm</button>
        </div>
    )
}

export default Register