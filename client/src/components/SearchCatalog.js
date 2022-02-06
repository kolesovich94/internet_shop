import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  changeSearchCatalog,
  getItems,
  cleanItems,
} from "../redux/items/actions";

const qs = require("qs");

export default function SearchCatalog(props) {
  const dispatch = useDispatch();

  let paramsObj = qs.parse(window.location.search.slice(1));
  const navigate = useNavigate();

  const { search } = useSelector((store) => store.itemsReducer);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { value } = evt.target[0];
    paramsObj.search = value;
    navigate(`${window.location.pathname}?${qs.stringify(paramsObj)}`);
    dispatch(cleanItems());
    dispatch(getItems());
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(changeSearchCatalog(value));
  };

  useEffect(() => {
    dispatch(changeSearchCatalog(paramsObj.search));
    // eslint-disable-next-line
  }, []);

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
