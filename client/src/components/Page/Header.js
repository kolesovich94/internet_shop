import headerLogo from "../../img/header-logo.png";
import { NavLink } from "react-router-dom";
import SearchHeader from "../SearchHeader";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "../../redux/cart/actions";

export default function Header() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((store) => store.cartReducer);

  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line
  }, []);

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
                    {cartItems.length > 0 && (
                      <div className="header-controls-cart-full">
                        {cartItems.length}
                      </div>
                    )}
                    {/* <div className="header-controls-cart-menu"></div> */}
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
