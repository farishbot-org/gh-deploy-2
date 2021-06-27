import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Head from "./components/head/Head";

import "./App.css";

import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [siteTitle, setSiteTitle] = useState("ok");

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
