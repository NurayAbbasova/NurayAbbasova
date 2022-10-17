import React from 'react';
import "./app.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './component/Login';
import Logout from './component/Logout';

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/logout' element = {<Logout/>}/>
          </Routes>
    </Router>
  )
}

export default App;

