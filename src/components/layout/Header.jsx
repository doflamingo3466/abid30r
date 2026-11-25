import { Link, NavLink } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="site-header">

      <Link to="/" className="logo">
        abid<span>.</span>
      </Link>

      <nav>
        <NavLink to="/" end>
          Shop
        </NavLink>

        <NavLink to="/cart">
          Cart ({cartCount})
        </NavLink>
      </nav>

    </header>
  );
}

export default Header;