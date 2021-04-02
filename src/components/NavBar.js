import React from "react";

/* Routes */
import { NavLink } from "react-router-dom";

/* Social Icons */
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white"
          >
            Nicolas
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            className="mr-4"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            url="http://facebook.com"
            target="_blank"
          />
          <SocialIcon
            className="mr-4"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            url="http://instagram.com"
            target="_blank"
          />
          <SocialIcon
            className="mr-4"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            url="http://youtube.com"
            target="_blank"
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
