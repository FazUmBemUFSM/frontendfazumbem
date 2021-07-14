import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../pages/home/home'
import Login from '../pages/login/login'
import BaseInst from '../pages/instituicao/base'

function App() {
  return (
    <Router>
      <Route exact path="/" render={()=><Home/>}/>
      <Route exact path="/login" render={()=><Login/>}/>
      <Route exact path="/perfil" render={()=><BaseInst/>}/>
    </Router>
  );
}

export default App;
