import React from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <LoginForm />
            </Route>
            <PrivateRoute path="/home" exact={true} component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;