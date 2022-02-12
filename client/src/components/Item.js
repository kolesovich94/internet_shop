import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeItemId, cleanItemId, getItemId } from "../redux/itemId/actions";
import { getCartItems, addToCart } from "../redux/cart/actions";
import Spinner from "../components/Common/Spinner";
import Error from "../components/Common/Error";

export default function Item() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { item, loading, error, kolvo, size } = useSelector(
    (store) => store.itemIdReducer
  );

  const { cartItems } = useSelector((store) => store.cartReducer);

  let sizesAvalible =
    item && item.sizes ? item.sizes.filter((e) => e.avalible) : [];

  useEffect(() => {
    const id = window.location.pathname.match(/\/(\d+)/)[1];
    dispatch(getItemId(id));
    dispatch(cleanItemId());
    // eslint-disable-next-line
  }, []);

  const handleClickSize = (size) => {
    dispatch(changeItemId("size", size));
  };

  const handleChangeKolvo = (znak) => {
    let newKol = kolvo;
    if (znak === "+" && kolvo < 10) {
      newKol++;
    } else if (znak === "-" && kolvo > 1) {
      newKol--;
    }
    dispatch(changeItemId("kolvo", newKol));
  };

  const handleClickCart = (e) => {
    dispatch(addToCart(item, size, kolvo));
    navigate("/cart");
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error header="При загрузке данных произошла ошибка" text={error} />
      ) : (
        <section className="catalog-item">
          <h2 className="text-center">{item.title}</h2>
          <div className="row">
            <div className="col-5">
              <img src={item.images[0]} className="img-fluid" alt="" />
            </div>
            <div className="col-7">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Артикул</td>
                    <td>{item.sku}</td>
                  </tr>
                  <tr>
                    <td>Производитель</td>
                    <td>{item.manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{item.color}</td>
                  </tr>
                  <tr>
                    <td>Материалы</td>
                    <td>{item.material}</td>
                  </tr>
                  <tr>
                    <td>Сезон</td>
                    <td>{item.season}</td>
                  </tr>
                  <tr>
                    <td>Повод</td>
                    <td>{item.reason}</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center">
                <p>
                  Размеры в наличии:{" "}
                  {sizesAvalible.map((e, idx) => {
                    return (
                      <span
                        style={{ cursor: "pointer" }}
                        key={idx}
                        onClick={() => handleClickSize(e.size)}
                        className={`catalog-item-size ${
                          e.size === size ? "selected" : ""
                        }`}
                      >
                        {e.size}
                      </span>
                    );
                  })}
                </p>
                {sizesAvalible.length > 0 ? (
                  <>
                    <p>
                      Количество:{" "}
                      <span className="btn-group btn-group-sm pl-2">
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleChangeKolvo("-")}
                        >
                          -
                        </button>
                        <span className="btn btn-outline-primary">{kolvo}</span>
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleChangeKolvo("+")}
                        >
                          +
                        </button>
                      </span>
                    </p>
                  </>
                ) : (
                  <i>Нет размеров</i>
                )}
              </div>
              {sizesAvalible.length > 0 ? (
                <>
                  <button
                    className={`btn btn-danger btn-block btn-lg ${
                      size === "" ? "disabled" : ""
                    }`}
                    onClick={handleClickCart}
                  >
                    В корзину
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
