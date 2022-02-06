import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getItems } from "../redux/items/actions";
import { getCategories, changeCategory } from "../redux/categories/actions";
import Spinner from "../components/Common/Spinner";
import Error from "../components/Common/Error";

export default function Categories(props) {
  const dispatch = useDispatch();

  const { categories, loading, error } = useSelector(
    (store) => store.categoriesReducer
  );

  const { activeCategory, search } = useSelector((store) => store.itemsReducer);

  const handleClick = (evt, id) => {
    evt.preventDefault();
    dispatch(changeCategory(id));
    dispatch(getItems(id, 0, search));
  };

  useEffect(() => {
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
              className={`nav-link ${e.id === activeCategory ? "active" : ""}`}
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
