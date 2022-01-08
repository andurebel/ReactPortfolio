import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-around md:justify-end text-xl font-bold bg-gray-200">
      <Link to="/" className="text-gray-500 px-6 py-4 hover:text-blue-400">
        Home
      </Link>
      <Link to="/work" className="text-gray-500 px-6 py-4 hover:text-blue-400">
        Work
      </Link>
      <Link
        to="/contact"
        className="text-gray-500 px-6 py-4 hover:text-blue-400"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
