import React, { useState } from "react";
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";

import "./App.css";
import "react-slideshow-image/dist/styles.css";

import Head from "./components/head/Head";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Error404 from "./pages/404/Error404";

function App() {
  const [siteTitle, setSiteTitle] = useState("");

  return (
    <div className="App">
      <Router basename="/">
        <Head title={siteTitle} />
        <Header />
        <div className="page">
          <Switch>
            <Route exact path="/" component={(props) => <Homepage {...props} setSiteTitle={setSiteTitle} />} />
            <Route exact path="/about" component={(props) => <About {...props} setSiteTitle={setSiteTitle} />} />
            <Route exact path="/projects" component={(props) => <About {...props} setSiteTitle={setSiteTitle} />} />
            <Route exact path="/projects/:id" component={(props) => <About {...props} setSiteTitle={setSiteTitle} />} />
            <Route component={(props) => <Error404 {...props} setSiteTitle={setSiteTitle} />} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
