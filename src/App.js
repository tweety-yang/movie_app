import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';


function  App() {
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      {/* Route로 작동이 되는데 path(경로) */}
      <Route path="/movie_detail" component={Detail} />
    </HashRouter>
  )
  
}

export default App;