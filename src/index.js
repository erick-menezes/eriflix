import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import FormOptions from './pages/cadastro/FormOptions';

import './index.css';
import Menu from './components/Menu';
import Footer from './components/Footer';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Menu />
    
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/cadastro/FormOptions" component={FormOptions} />
      <Route component={Pagina404} />
    </Switch>

    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
