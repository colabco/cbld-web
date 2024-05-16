import React from "react";
import Link from "next/link";

const NavigationLinks = () => {
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

export default NavigationLinks;
