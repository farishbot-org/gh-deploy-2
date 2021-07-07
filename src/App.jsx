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
  const [siteTitle, setSiteTitle] = useState(null);
  const [siteContent, setSiteContent] = useState(null);

  const routes = [
    {
      path: "/",
      render: Homepage,
    },
    {
      path: "/about",
      render: About,
    },
    {
      path: "/projects",
      render: Projects,
    },
    {
      path: "/projects/:id",
      render: ProjectContent,
    },
    {
      path: "/heritage",
      render: About,
    },
    {
      path: "/500",
      render: Error500,
    },
    {
      path: "/sitedata",
      render: () => {
        setSiteTitle("Site Data");
        return window.location.replace("https://docs.google.com/spreadsheets/d/1fMzf7JRwzBfSGNdK5x138tzBBzY6du94rRhbBplfcCU/edit#gid=1162050956");
      },
    },
    {
      path: null,
      render: Error404,
    },
  ];

  return (
    <div className="App">
      <Router basename="/">
        <Head title={siteTitle} content={siteContent} />
        <Header />
        <div className="page">
          <Switch>
            {routes.map((route) => (
              <Route
                exact
                path={route.path}
                render={(props) => (
                  <route.render
                    {...props}
                    setSiteTitle={setSiteTitle}
                    setSiteContent={setSiteContent}
                  />
                )}
              />
            ))}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
