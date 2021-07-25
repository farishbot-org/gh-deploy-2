import React, { PureComponent } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";

export default class Header extends PureComponent {
  render() {
    const menuItems = [
      {
        name: "Projects",
        loc: "/projects",
      },
      {
        name: "Services",
        loc: "/services",
      },
      {
        name: "Heritage",
        loc: "/heritage",
      },
      {
        name: "Vasthu",
        loc: "/vasthu",
      },
    ];

    return (
      <div className="header">
        <div className="header-logo-section">
          <Link to="/">
            <img title="Growmore International" className="header-logo" src="/logo-full.svg" alt="logo" />
          </Link>
        </div>
        <div className="header-navlinks-section">
          {menuItems.map((item) => (
            <NavLink
              key={item.loc}
              exact={item.exact}
              to={item.loc}
              activeClassName="header-activenavlink"
              className="header-navlink"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}
