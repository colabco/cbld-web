import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "src/app/assets/logos/Cobuild_Logo.svg";

const Navbar: React.FC = () => {
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

const BurgerMenu: React.FC = () => {
  return (
    <div className="dropdown dropdown-hover">
      <button
        tabIndex={0}
        role="button"
        className="btn btn-ghost md:hidden"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-base-100 w-52"
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/newProject">Create New Project</Link>
        </li>
      </ul>
    </div>
  );
};

const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image src={logo} alt="Logo" width={150} className="ml-5" />
      </Link>
    </div>
  );
};

const NavigationLinks: React.FC = () => {
  return (
    <ul className="menu menu-horizontal gap-4 text-xs font-semibold">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/newProject" className="bg-green-300">
          Create New Project
        </Link>
      </li>
    </ul>
  );
};

const UserProfile: React.FC = () => {
  return (
    <div className="flex-none gap-2">
      <div className="form-control"></div>
      <div className="dropdown dropdown-end dropdown-hover">
        <button
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
          aria-label="User Profile"
        >
          <div className="avatar placeholder">
            <div className="bg-info text-white rounded-full w-9">
              <span className="text-xs">LP</span>
            </div>
          </div>
        </button>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
