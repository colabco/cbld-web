import React from "react";

import BurgerMenu from "./components/Navigation/BurgerMenu";
import Logo from "./components/Navigation/Logo";
import NavigationLinks from "./components/Navigation/NavigationLinks";
import UserProfile from "./components/Navigation/UserProfile";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <BurgerMenu />
        <Logo />
      </div>
      <div className="navbar-center hidden md:flex">
        <NavigationLinks />
      </div>
      <div className="navbar-end">
        <UserProfile />
      </div>
    </nav>
  );
};

export default Navbar;
