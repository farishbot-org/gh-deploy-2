import React, { PureComponent } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";

export default class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.onClickMobileMenu = this.onClickMobileMenu.bind(this);

    this.state = {
      mobileMenuActive: false,
      // mobileMenuActive: true,
    };
  }

  onClickMobileMenu() {
    const { mobileMenuActive } = this.state;
    if (!mobileMenuActive) return this.setState({ mobileMenuActive: true });
    return this.setState({ mobileMenuActive: false });
  }

  render() {
    const menuItems = [
      {
        name: "Home",
        loc: "/",
        exact: true,
      },
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
        name: "Vasthushastra",
        loc: "/vasthu",
      },
    ];

    const additionalMenuItems = [
      {
        name: "About Us",
        loc: "/about",
      },
      {
        name: "Careers",
        loc: "/careers",
      },
    ];

    const { mobile } = this.props;
    const { mobileMenuActive } = this.state;

    if (mobileMenuActive) {
      return (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <Link onClick={this.onClickMobileMenu} to="/">
              <img title="Growmore International" className="mobile-menu-header-logo" src="/logo-full.svg" alt="logo" />
            </Link>
            <div onClick={this.onClickMobileMenu} className="mobile-menu-close-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
            </div>
          </div>
          <div
            onClick={this.onClickMobileMenu}
            className="mobile-menu-navlinks-section"
          >
            {menuItems.map((item) => (
              <NavLink
                className="mobile-menu-navlinks"
                exact
                activeClassName="active-mobile-menu-navlinks"
                onClick={this.onClickMobileMenu}
                to={item.loc}
              >
                <span>{item.name}</span>
              </NavLink>
            ))}

            {additionalMenuItems.map((item) => (
              <NavLink
                className="mobile-menu-navlinks"
                exact
                activeClassName="active-mobile-menu-navlinks"
                onClick={this.onClickMobileMenu}
                to={item.loc}
              >
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="header">
        <div className="header-logo-section">
          <Link to="/">
            <img title="Growmore International" className="header-logo" src="/logo-full.svg" alt="logo" />
          </Link>
        </div>
        <div
          hidden={mobile}
          className={mobile ? null : "header-navlinks-section"}
        >
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
        <div
          onClick={this.onClickMobileMenu}
          hidden={!mobile}
          className={!mobile ? null : "header-mobile-menu-button-section"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
        </div>
      </div>
    );
  }
}
