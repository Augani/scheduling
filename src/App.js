import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pages from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
    <div className="MainPage">
      <Navbar/>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
     <div className="insidePage">
     <Switch>
        <Route path="/reviews">
         <Pages.Reviews/>
        </Route>
        <Route path="/book">
         <Pages.Book/>
        </Route>
        <Route path="/check">
         <Pages.Check/>
        </Route>
        <Route path="/">
          <Pages.Front />
        </Route>
      </Switch>
     </div>

    </div>
  </Router>
  );
}

export default App;
