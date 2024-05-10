import React from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "src/app/assets/logos/Cobuild_Logo.svg";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 ml-5">
        <Link href="/">
          <Image src={logo} alt="Logo" width={140} />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control"></div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="avatar placeholder">
              <div className="bg-info text-white rounded-full w-8">
                <span className="text-xs">LP</span>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Navbar;
