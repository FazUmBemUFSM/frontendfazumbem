import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import FrontPage from '../pages/frontPage/frontpage';

import Header from '../components/header/header'
import InstituicaoPerfil from '../pages/perfil/instituicao/instituicaoPerfil';
import { PageContentMarginHOC } from '../styles/generalStyledComponents';
import NovaPostagem from '../pages/perfil/instituicao/newPost/newPost';
import MinhasPostagens from '../pages/perfil/instituicao/myposts/myPosts';
import CuradoriaPerfil from '../pages/perfil/curadoria/curadoriaPerfil';
import AprovarPubli from '../pages/perfil/curadoria/aprovarPubli/aprovarPubli';
import AprovarInst from '../pages/perfil/curadoria/aprovarInst/aprovarInst';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <PageContentMarginHOC>
        <Switch>
          
          <Route exact path="/" render={()=><FrontPage/>}/>
          <Route exact path="/instituicoes" render={()=><InstituicaoPerfil/>}/>
          <Route exact path="/instituicoes/newPost" render={()=><NovaPostagem/>}/>
          <Route exact path="/instituicoes/myPosts" render={()=><MinhasPostagens/>}/>
          <Route exact path="/curadoria" render={()=><CuradoriaPerfil/>}/>
          <Route exact path="/curadoria/aprovarPubli" render={()=><AprovarPubli/>}/>
          <Route exact path="/curadoria/aprovarInst" render={()=><AprovarInst/>}/>
          <Route exact path="/curadoria/atualizacoes" render={()=><CuradoriaPerfil/>}/>
          
        </Switch>

      </PageContentMarginHOC>
    </BrowserRouter>
  );
}

export default App;
