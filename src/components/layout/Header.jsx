import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 py-4">
          <img src={logo} alt="logo" />
          <nav className="flex items-center gap-4">
            <Link to="/sign-in">
              <button className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                Sign In
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
