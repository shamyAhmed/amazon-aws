import React, {useState} from "react";
import { Auth } from "aws-amplify";

const Confirm = () => {
    const [user, setUser] = useState({username:'' , code:''});
    return (
        
        <div>
            <input type="text" onChange={(e) => {setUser(olduser=>({...olduser,username:e.target.value}))}}/>
            <input type="text" onChange={(e) => {setUser(olduser=>({...olduser,code:e.target.value}))}}/>
            <button onClick={()=>{
                Auth.confirmSignUp(user.username , user.code);
            }}>submit</button>
        </div>
    )
}

export default Confirm