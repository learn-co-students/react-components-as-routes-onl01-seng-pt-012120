import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Messages from './Components/Messages'
import Navbar from './Components/Navbar'


ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/messages" component={Messages} />
    </div>
  </Router>,
  document.getElementById('root')
);
