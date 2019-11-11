import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
