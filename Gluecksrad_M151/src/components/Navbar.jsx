import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="w-screen h-[90px] bg-neutral z-10 fixed drop-shadow-lg">
      <div className="px-5 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 md:text-4xl">
            Wheel of <span className="text-primary">Fortune</span>
          </h1>
          <ul className="menu menu-horizontal px-1 ml-5 hidden md:flex">
            <li className="navlist">
              <a>Item 1</a>
            </li>
            <li className="navlist">
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="btn">Sign In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              <GiHamburgerMenu className="w-8 h-8" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
