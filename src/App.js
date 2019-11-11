import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import {Home} from "./routes";

const NotFound = () => (
    <h1>Page not found</h1>
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
