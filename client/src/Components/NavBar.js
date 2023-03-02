import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav flex flex-row ">
      <ul className="flex  md:flex-row  md:gap-6 justify-around flex-1  items-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/random">Random</NavLink>
        </li>
        <li>
          <NavLink to="/mycollections">My Collections</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
