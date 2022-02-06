import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getItems,
  changeSearchCatalog,
  cleanItems,
} from "../redux/items/actions";
import Spinner from "../components/Common/Spinner";
import Error from "../components/Common/Error";
import CatalogElement from "./CatalogElement";
import SearchCatalog from "./SearchCatalog";
import Categories from "./Categories";

export default function Catalog(props) {
  const dispatch = useDispatch();

  const { items, loading, error, activeCategory, offset, search, loadMore } =
    useSelector((store) => store.itemsReducer);

  useEffect(() => {
    if (props.withSearch) {
      dispatch(getItems(null, 0, search));
    } else {
      dispatch(changeSearchCatalog(""));
      dispatch(cleanItems());
      dispatch(getItems());
    }
    // eslint-disable-next-line
  }, [props]);

  const handleClick = () => {
    dispatch(getItems(activeCategory, offset, search));
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {props.withSearch ? <SearchCatalog /> : <></>}
      <Categories />
      <div className="row">
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error header="При загрузке данных произошла ошибка" text={error} />
        ) : (
          items && items.map((e) => <CatalogElement key={e.id} {...e} />)
        )}
      </div>
      <div className="text-center">
        <button
          className="btn btn-outline-primary"
          onClick={handleClick}
          hidden={loading || !loadMore}
        >
          Загрузить ещё
        </button>
      </div>
    </section>
  );
}
