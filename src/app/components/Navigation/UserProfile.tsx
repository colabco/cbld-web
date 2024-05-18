import React from "react";

const UserProfile = () => {
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

export default UserProfile;
