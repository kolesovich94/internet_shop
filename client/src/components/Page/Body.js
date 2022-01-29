import src from "../../img/banner.jpg";
import Banner from "../Banner";

export default function Body(props) {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner src={src} text="К весне готовы!" />
          {props.children}
        </div>
      </div>
    </main>
  );
}
