import React from "react";
import Register from "./components/register/Register";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import awsconfig from './aws-exports';
import {Amplify} from 'aws-amplify';
import AuthPage from './pages/auth';
import HomePage from './pages/home';
Amplify.configure(awsconfig);
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/auth" element={<AuthPage />}/>
          <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
