import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="flex">
            <img className="w-10" src={logo} alt="" />
            <a className="btn btn-ghost text-xl">SoloSphere</a>
          </a>
        </div>
        <div className="flex gap-2">
          <NavLink to="/" exact className="btn btn-ghost">
            Home
          </NavLink>
          <NavLink to="/allJobs" className="btn btn-ghost">
            All Jobs
          </NavLink>
          <div className="dropdown dropdown-end">
            {user ? (
              <>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar "
                >
                  <div className="w-10 rounded-full">
                    <img referrerPolicy="no-referrer" alt={user?.displayName} src={user?.photoURL} />
                  </div>
                  
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/addJobs">Add Jobs</Link>
                  </li>
                  <li>
                    <Link to="/my-posted-jobs">My Posted Jobs</Link>
                  </li>
                  <li>
                    <Link to='/my-bids'>My bids</Link>
                  </li>
                  <li>
                    <Link to='/bid-requests'>Bid Request</Link>
                  </li>
                  <li>
                    <a onClick={signOutUser}>Logout</a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <Link to="/login" className="btn">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
