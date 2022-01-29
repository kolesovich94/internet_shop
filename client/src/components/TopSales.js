import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSales } from "../redux/actionCreators";
import Spinner from "../components/Common/Spinner";
import Error from "../components/Common/Error";
import CatalogElement from "./CatalogElement";

export default function TopSales() {
  const dispatch = useDispatch();

  const { sales, loading, error } = useSelector((store) => store.salesReducer);

  useEffect(() => {
    dispatch(getSales());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error header="При загрузке данных произошла ошибка" text={error} />
      ) : (
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>
          <div className="row">
            {sales && sales.map((e) => <CatalogElement key={e.id} {...e} />)}
          </div>
        </section>
      )}
    </>
  );
}
