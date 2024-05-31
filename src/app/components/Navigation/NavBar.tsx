import React from "react";

import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import UserProfile from "./UserProfile";

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
