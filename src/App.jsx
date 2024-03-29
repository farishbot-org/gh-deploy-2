import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";

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
import Heritage from "./pages/heritage/Heritage";
import Services from "./pages/services/Services";
import ContactUs from "./pages/contactus/ContactUs";
import Careers from "./pages/careers/Careers";
import Vasthushastra from "./pages/vasthu/Vasthushastra";

function App() {
  const [siteTitle, setSiteTitle] = useState(null);
  const [siteContent, setSiteContent] = useState(null);
  const [mobile, setMobile] = useState(false);

  const checkMobile = () => {
    const { width } = window.screen;
    if (width <= 800) setMobile(true);
  };

  useEffect(() => {
    checkMobile();
  }, []);

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
      render: Heritage,
    },
    {
      path: "/500",
      render: Error500,
    },
    {
      path: "/services",
      render: Services,
    },
    {
      path: "/contact",
      render: ContactUs,
    },
    {
      path: "/careers",
      render: Careers,
    },
    {
      path: "/vasthu",
      render: Vasthushastra,
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
        <Header mobile={mobile} />
        <div className="page">
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path || "nopath"}
                path={route.path}
                element={(
                  <route.render
                    // {...props}
                    mobile={mobile}
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
