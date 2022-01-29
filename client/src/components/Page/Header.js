import headerLogo from "../../img/header-logo.png";
import { NavLink } from "react-router-dom";
import SearchHeader from "../SearchHeader";

export default function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">
              <img src={headerLogo} alt="Bosa Noga"></img>
            </NavLink>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/catalog" className="nav-link">
                    Каталог
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    О магазине
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contacts" className="nav-link">
                    Контакты
                  </NavLink>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <SearchHeader />
                  <NavLink
                    to="/cart"
                    className="header-controls-pic header-controls-cart"
                  >
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
