export default function Banner(props) {
  return (
    <div className="banner">
      <img src={props.src} className="img-fluid" alt={props.text}></img>
      <h2 className="banner-header">{props.text}</h2>
    </div>
  );
}
