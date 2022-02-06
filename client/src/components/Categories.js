import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getItems, cleanItems } from "../redux/items/actions";
import { changeCategory, getCategories } from "../redux/categories/actions";
import Spinner from "../components/Common/Spinner";
import Error from "../components/Common/Error";

const qs = require("qs");

export default function Categories() {
  const dispatch = useDispatch();

  let paramsObj = qs.parse(window.location.search.slice(1));
  const navigate = useNavigate();

  const { categories, loading, error, active } = useSelector(
    (store) => store.categoriesReducer
  );

  const handleClick = (evt, id) => {
    evt.preventDefault();
    paramsObj.category = id;
    navigate(`${window.location.pathname}?${qs.stringify(paramsObj)}`);
    dispatch(cleanItems());
    dispatch(getItems());
    dispatch(changeCategory(id));
  };

  useEffect(() => {
    dispatch(changeCategory(parseInt(paramsObj.category)));
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="catalog-categories nav justify-content-center">
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error header="При загрузке данных произошла ошибка" text={error} />
      ) : (
        categories &&
        categories.map((e) => (
          <li className="nav-item" key={e.id}>
            <a
              className={`nav-link ${e.id === active ? "active" : ""}`}
              onClick={(evt) => handleClick(evt, e.id)}
              href="#"
            >
              {e.title}
            </a>
          </li>
        ))
      )}
    </ul>
  );
}
