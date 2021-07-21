import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from '../pages/home/home'
import Login from '../pages/login/login'
import BaseInst from '../pages/instituicao/base'
import FrontPage from '../pages/frontPage/frontpage';

import Header from '../components/header/header'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" render={()=><FrontPage/>}/>
        <Route exact path="/instituicao" render={()=><>asd</>}/>
        <Route exact path="/login" render={()=><Login/>}/>
        <Route exact path="/perfil" render={()=><BaseInst/>}/>  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
