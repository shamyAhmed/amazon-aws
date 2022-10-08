import React, {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom'
import { Auth } from 'aws-amplify';

const HomePage = () => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user => { 
            if(user){
                setCurrentUser(user);
            }
        }).catch(() => {
            setCurrentUser(false)
            console.log('hello');
        })

    }, [])

    if(currentUser === undefined){
        return <></>
    }
    if(currentUser === false){
        return <Navigate to={'/auth'}/>
    }
    return(
        <div className='homeWelcome'>welcomeHome</div>
    )
}
export default HomePage;