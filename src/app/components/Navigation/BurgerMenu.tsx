import React from "react";
import Link from "next/link";

const BurgerMenu = () => {
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

export default BurgerMenu;
