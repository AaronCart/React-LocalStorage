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
      {/* Header, Form and Footer will be shown at all times regardless of Router */}
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
