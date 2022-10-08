import React from "react";
import Register from "./components/register/Register";
import awsconfig from './aws-exports';
import {Amplify} from 'aws-amplify';
import LOGIN from './components/login/login';
import Confirm from './components/confirm/confirm';
Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      Rister : 
      <Register />

      Login : 
      <br />

      <LOGIN />

      Confirm :
      <Confirm />
    </div>
  );
}

export default App;
