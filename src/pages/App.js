import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div>
      {/* There isn't really any need for Router here as all components will be shown at all times */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
