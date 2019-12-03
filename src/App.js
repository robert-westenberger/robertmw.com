import React, { Component } from 'react';
import "./App.css";
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import axios from "./utils/axios";
import {Home, Edit} from "./routes";
import { Header, PrivateRoute } from './components';
const NotFound = () => (
    <h1>Page not found</h1>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsAuthenticated: false,
      loading: true,
      user: {}
    };
    this.setUserIsAuthenticated = this.setUserIsAuthenticated.bind(this);
  }
  componentDidMount() {
    axios.get("/").then((response) => {
      const newState = {loading: false};
      if (Object.prototype.hasOwnProperty.call(response.data, 'user')) {
        newState.userIsAuthenticated = true;
      }
      this.setState(newState);
    });
  }

  setUserIsAuthenticated(userIsAuthenticated) {
    this.setState({userIsAuthenticated});
  }
  render() {
    const { userIsAuthenticated, loading } = this.state;
    if (loading) {
      return null; // todo: LOADING ANIMATION
    }
    return (
      <BrowserRouter>
        <Header
          userIsAuthenticated={userIsAuthenticated}
          setUserIsAuthenticated={this.setUserIsAuthenticated}
        />
        <main className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              userIsAuthenticated={userIsAuthenticated}
              exact
              path="/edit"
              component={Edit}
            />
            <Route component={NotFound} />

          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}


export default App;
