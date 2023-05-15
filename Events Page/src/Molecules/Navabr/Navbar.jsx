import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const active = (path) => {
    return path === pathname ? "bg-gray-400 text-white rounded p-1" : "";
  };

  return (
    <nav className="flex justify-center items-center bg-gray-200 px-6 py-3">
      <ul className="flex">
        <li className="mr-6">
          <NavLink
            exact="true"
            to="/"
            className={`hover:text-gray-300 ${active("/")}`}
          >
            Home
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            exact="true"
            to="/event-info"
            className={`hover:text-gray-300 ${active("/event-info")}`}
          >
            Event Info
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            exact="true"
            to="/tickets"
            className={`hover:text-gray-300 ${active("/tickets")}`}
          >
            Tickets
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            to="/contact"
            className={`hover:text-gray-300 ${active("/contact")}`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
