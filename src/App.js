import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Information from './components/pages/Information'
import Nightwheelin from './components/pages/Nightwheelin';
import Waltzacrosstexas from './components/pages/Waltzacrosstexas';

document.oncontextmenu = function (e) {
  console.log(e.button);
  if (e.button === 2) {
      e.preventDefault();
      return false;
  }

}


function App() {
  return (
  <>
  <Router>
  <Navbar/>
  <Switch>
    <Route path='/' exact component= {Home}/>
    <Route path='/Information'exact component= {Information}/>  
    <Route path='/Nightwheelin'exact component= {Nightwheelin}/>  
    <Route path='/Waltzacrosstexas'exact component= {Waltzacrosstexas}/>  
  </Switch>
  </Router>
    
</>
    
  );
}

export default App;


