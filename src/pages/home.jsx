import React, {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom'
import { Auth } from 'aws-amplify';

const HomePage = ({user}) => {

    if(user === undefined){
        return <></>
    }
    if(user === false){
        return <></>
    }
    return(
        <div className='homeWelcome'>welcomeHome</div>
    )
}
export default HomePage;