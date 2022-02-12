import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  cleanOrdered,
  getCartItems,
  removeFromCart,
} from "../redux/cart/actions";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();

  const { cartItems, fullItog, ordered } = useSelector(
    (store) => store.cartReducer
  );

  useEffect(() => {
    dispatch(getCartItems());
    dispatch(cleanOrdered());
    // eslint-disable-next-line
  }, []);

  const handleClick = (id, size) => {
    dispatch(removeFromCart(id, size));
  };

  return (
    <>
      {ordered ? null : (
        <section className="cart">
          <h2 className="text-center">Корзина</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Размер</th>
                <th scope="col">Кол-во</th>
                <th scope="col">Стоимость</th>
                <th scope="col">Итого</th>
                <th scope="col">Действия</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((e, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <NavLink to={`/catalog/${e.id}`}>{e.title}</NavLink>
                  </td>
                  <td>{e.size}</td>
                  <td>{e.count}</td>
                  <td>{e.price} руб.</td>
                  <td>{e.itog} руб.</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleClick(e.id, e.size)}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" className="text-right">
                  Общая стоимость
                </td>
                <td>{fullItog} руб.</td>
              </tr>
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
