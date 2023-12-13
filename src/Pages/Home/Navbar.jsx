import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li className="font-medium text-lg">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-medium text-lg">
      <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="font-medium text-lg">
      <NavLink
          to="/Skills"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Skills
        </NavLink>
      </li>
      <li className="font-medium text-lg">
      <NavLink
          to="/contacts"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Contacts
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <img
          className=" w-24 rounded-lg h-10"
          src="https://t4.ftcdn.net/jpg/01/80/48/23/360_F_180482366_rwrZ29V2QmMTNwE8JJHsuvJy6svIn1tV.jpg"
          alt="AQ"
        />
      </div>
      <div className="navbar-end gap-4 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
