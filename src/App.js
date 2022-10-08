import React, { useEffect, useState } from "react";
import Register from "./components/register/Register";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import awsconfig from './aws-exports';
import {Amplify, Auth} from 'aws-amplify';
import AuthPage from './pages/auth';
import HomePage from './pages/home';
Amplify.configure(awsconfig);
function App() {
  const [user, setUser] = useState();
  const settingUser = (user) => {
    setUser(user);
  }
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(user=>{
      setUser(user);
    }).catch(err => {
      console.log('not authed')
    })
  })
  return (
      <>
        <AuthPage settingUser={settingUser} />
        <HomePage user={user} />
      </>
  );
}

export default App;
