import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="upperBlock">
      <div className="navBar">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/DAPIBUS"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          DAPIBUS
        </NavLink>
        <NavLink
          to="/ULTRICIES"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          ULTRICIES
        </NavLink>
        <NavLink
          to="/BIBENDUM"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          BIBENDUM
        </NavLink>
        <NavLink
          to="/MAGNA"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          MAGNA
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
