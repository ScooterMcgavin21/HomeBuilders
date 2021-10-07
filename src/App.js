import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import ExteriorPage from './pages/ExteriorPage';

function App() {
  

  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
      {/* <Home /> */}
        <Route path='/' component={Home} exact />
        <Route path='/exterior' component={ExteriorPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

