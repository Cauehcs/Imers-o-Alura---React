import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/home/App';
import CadastroVideo from './pages/cadastro/vídeo'
import CadastroCategoria from './pages/cadastro/categoria'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} exact/>
        <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
        <Route component={() => <p>Página 404</p>} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root') 
);