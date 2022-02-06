import { useSelector, useDispatch } from "react-redux";
import {
  changeSearchCatalog,
  getItems,
  cleanItems,
} from "../redux/items/actions";

export default function SearchCatalog(props) {
  const dispatch = useDispatch();

  const { activeCategory, search } = useSelector((store) => store.itemsReducer);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { value } = evt.target[0];
    dispatch(cleanItems());
    dispatch(getItems(activeCategory, 0, value));
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(changeSearchCatalog(value));
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
      <input
        className="form-control"
        placeholder="Поиск"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}
