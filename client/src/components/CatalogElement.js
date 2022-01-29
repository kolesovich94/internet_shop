import { NavLink } from "react-router-dom";

export default function CatalogElement(props) {
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <div style={{ minHeight: "500px", display: "flex" }}>
          <img
            src={props.images ? props.images[0] : null}
            className="card-img-top img-fluid"
            alt={props.title}
            style={{ alignSelf: "center" }}
          />
        </div>
        <div className="card-body">
          <p className="card-text" style={{ minHeight: "60px" }}>
            {props.title}
          </p>
          <p className="card-text">{props.price} руб.</p>
          <NavLink
            to={`/catalog/${props.id}`}
            className="btn btn-outline-primary"
          >
            Заказать
          </NavLink>
        </div>
      </div>
    </div>
  );
}
