import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-slate-950 text-white">
      <h1 className="text-2xl font-bold text-blue-500">Intern Matcher</h1>

      <div className="flex gap-4">
        <Link to="/login">
          <button className="px-4 py-2 border rounded-lg">Login</button>
        </Link>

        <Link to="/register">
          <button className="px-4 py-2 bg-blue-600 rounded-lg">Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
