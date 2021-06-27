import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Head from "./components/head/Head";

import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";

function App() {
  const [siteTitle, setSiteTitle] = useState("");

  return (
    <div className="App">
      <Head title={siteTitle} />
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={() => <Homepage setSiteTitle={setSiteTitle} />} />
          <Route exact path="/about" component={() => <About setSiteTitle={setSiteTitle} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
