import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanOrder, changeOrder } from "../redux/order/actions";
import { postOrder } from "../redux/cart/actions";
import Spinner from "../components/Common/Spinner";
import Error from "../components/Common/Error";

export default function Order() {
  const dispatch = useDispatch();

  const { phone, address, agreement } = useSelector(
    (store) => store.orderReducer
  );

  const { cartItems, fullItog, loading, error, ordered } = useSelector(
    (store) => store.cartReducer
  );

  useEffect(() => {
    dispatch(cleanOrder());
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch(changeOrder(id, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postOrder({
        owner: {
          phone,
          address,
        },
        items: cartItems,
      })
    );
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error header="При загрузке данных произошла ошибка" text={error} />
      ) : ordered ? (
        <h2 className="text-center">Заказ успешно оформлен!</h2>
      ) : null}
      {fullItog ? (
        <section className="order">
          <h2 className="text-center">Оформить заказ</h2>
          <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  className="form-control"
                  id="phone"
                  placeholder="Ваш телефон"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input
                  className="form-control"
                  id="address"
                  placeholder="Адрес доставки"
                  value={address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreement"
                  value={agreement}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="agreement">
                  Согласен с правилами доставки
                </label>
              </div>
              <button type="submit" className="btn btn-outline-secondary">
                Оформить
              </button>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
}
