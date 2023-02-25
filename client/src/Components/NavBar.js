import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <ul className="flex flex-col align-middle justify-center md:flex-row gap-1 md:gap-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/random">Random</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
