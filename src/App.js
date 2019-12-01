import React, { Component } from 'react';
import "./App.css";
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import {Home} from "./routes";
import { Header } from './components';
const NotFound = () => (
    <h1>Page not found</h1>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsAuthenticated: false
    };
    this.setUserIsAuthenticated = this.setUserIsAuthenticated.bind(this);
  }
  setUserIsAuthenticated(userIsAuthenticated) {
    this.setState({userIsAuthenticated});
  }
  render() {
    const { userIsAuthenticated } = this.state;
    return (
      <BrowserRouter>
        <Header
          userIsAuthenticated={userIsAuthenticated}
          setUserIsAuthenticated={this.setUserIsAuthenticated}
        />
        <main className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}


export default App;
