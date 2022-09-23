import React from "react";
import Register from "./components/register/Register";
import awsconfig from './aws-exports';
import {Amplify} from 'aws-amplify';


Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
