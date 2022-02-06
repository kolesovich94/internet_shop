import {
  changeSearchCatalog,
  cleanItems,
  getItems,
} from "../redux/items/actions";
import { changeSearchHeader, cleanSearchHeader } from "../redux/header/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const qs = require("qs");

export default function SearchHeader() {
  const dispatch = useDispatch();

  let paramsObj = qs.parse(window.location.search.slice(1));
  const navigate = useNavigate();

  const { isVisible, searchText } = useSelector((store) => store.headerReducer);

  const handleClick = (name) => {
    if (searchText === "") {
      dispatch(changeSearchHeader(name, !isVisible));
    } else {
      dispatch(changeSearchCatalog(searchText));
      dispatch(cleanItems());

      if (window.location.pathname.match("catalog")) {
        paramsObj.search = searchText;
        navigate(`${window.location.pathname}?${qs.stringify(paramsObj)}`);
        dispatch(getItems());
      } else {
        navigate(`/catalog?${qs.stringify({ search: searchText })}`);
      }
      dispatch(cleanSearchHeader());
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeSearchHeader(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        data-id="search-expander"
        className="header-controls-pic header-controls-search"
        onClick={() => handleClick("isVisible")}
      ></div>
      <form
        data-id="search-form"
        className={`header-controls-search-form form-inline ${
          isVisible ? "" : "invisible"
        }`}
        onSubmit={handleSubmit}
      >
        <input
          className="form-control"
          placeholder="Поиск"
          value={searchText}
          onChange={handleChange}
          name="searchText"
        ></input>
      </form>
    </>
  );
}
