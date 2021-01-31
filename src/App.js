import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Journal from './components/pages/Journal'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <>
  <Router>
  <Navbar/>
  <Switch>
    <Route path='/' exact component= {Home}/>
    <Route path='/Journal' exact component= {Journal}/> 
    
  </Switch>
  </Router>
    
</>
    
  );
}

export default App;


