import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import FrontPage from '../pages/frontPage/frontpage';

import Header from '../components/header/header'
import InstituicaoPerfil from '../pages/perfil/instituicao/instituicaoPerfil';
import { PageContentMarginHOC } from '../styles/generalStyledComponents';
import NovaPostagem from '../pages/perfil/instituicao/newPost/newPost';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <PageContentMarginHOC>
        <Switch>
          
          <Route exact path="/" render={()=><FrontPage/>}/>
          <Route exact path="/instituicoes" render={()=><InstituicaoPerfil/>}/>
          <Route exact path="/instituicoes/newPost" render={()=><NovaPostagem/>}/>
          <Route exact path="/perfil" render={()=><>asd</>}/>  
        </Switch>

      </PageContentMarginHOC>
    </BrowserRouter>
  );
}

export default App;
