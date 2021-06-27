import React, { PureComponent } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";

export default class Header extends PureComponent {
  render() {
    const menuItems = [
      {
        name: "Home",
        loc: "/",
        exact: true,
      },
      {
        name: "About",
        loc: "/about",
      },
      {
        name: "Services",
        loc: "/services",
      },
      {
        name: "Projects",
        loc: "/projects",
      },
    ];

    return (
      <div className="header">
        <div className="logo-section">
          <Link to="/">
            <img title="GROWMORE INTERNATIONAL" className="logo" src="/logo-full.svg" alt="logo" />
          </Link>
        </div>
        <div className="navlinks-section">
          {menuItems.map((item) => <NavLink key={item.loc} exact={item.exact} to={item.loc} activeClassName="activenavlink" className="navlink">{item.name}</NavLink>)}
        </div>
      </div>
    );
  }
}
