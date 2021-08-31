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
import CadastrarInst from '../pages/perfil/curadoria/cadastrarInst/cadastrarInst';
import Footer from '../components/footer/footer';

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
          <Route exact path="/curadoria/cadastrarInst" render={()=><CadastrarInst/>}/>
          <Route exact path="/curadoria/atualizacoes" render={()=><CuradoriaPerfil/>}/>
          
        </Switch>

      </PageContentMarginHOC>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
