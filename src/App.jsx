import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "react-slideshow-image/dist/styles.css";

import Head from "./components/head/Head";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Error404 from "./pages/404/Error404";
import Error500 from "./pages/500/Error500";
import Projects from "./pages/projects/Projects";
import ProjectContent from "./pages/projects/projectcontent/ProjectContent";

function App() {
  const [siteTitle, setSiteTitle] = useState("");

  return (
    <div className="App">
      <Router basename="/">
        <Head title={siteTitle} />
        <Header />
        <div className="page">
          <Switch>
            <Route exact path="/" render={(props) => <Homepage {...props} setSiteTitle={setSiteTitle} />} />
            <Route exact path="/about" render={(props) => <About {...props} setSiteTitle={setSiteTitle} />} />

            {/* Projects */}
            <Route exact path="/projects" render={(props) => <Projects {...props} setSiteTitle={setSiteTitle} />} />
            <Route exact path="/projects/:id" render={(props) => <ProjectContent {...props} setSiteTitle={setSiteTitle} />} />
            <Route exact path="/projects/:id" render={(props) => <ProjectContent {...props} setSiteTitle={setSiteTitle} />} />

            <Route exact path="/heritage" render={(props) => <About {...props} setSiteTitle={setSiteTitle} />} />
            <Route exact path="/500" render={(props) => <Error500 {...props} setSiteTitle={setSiteTitle} />} />

            <Route
              exact
              path="/sitedata"
              render={() => {
                setSiteTitle("Site Data");
                window.location.replace("https://docs.google.com/spreadsheets/d/1fMzf7JRwzBfSGNdK5x138tzBBzY6du94rRhbBplfcCU/edit#gid=1162050956");
                return true;
              }}
            />

            {/* 404 */}
            <Route render={(props) => <Error404 {...props} setSiteTitle={setSiteTitle} />} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
