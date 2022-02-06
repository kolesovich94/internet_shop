import {
  changeSearchCatalog,
  cleanItems,
  getItems,
} from "../redux/items/actions";
import { changeSearchHeader } from "../redux/header/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isVisible, searchText } = useSelector((store) => store.headerReducer);

  const handleClick = (name) => {
    if (searchText === "") {
      dispatch(changeSearchHeader(name, !isVisible));
    } else {
      dispatch(changeSearchCatalog(searchText));
      dispatch(cleanItems());
      if (window.location.pathname.match("catalog")) {
        dispatch(getItems(null, 0, searchText));
      } else {
        navigate("/catalog");
      }
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
