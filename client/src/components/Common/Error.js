export default function Spinner(props) {
  return (
    <div className="col-12" style={{ color: "orangered" }}>
      <p className="h4 text-center">{props.header}</p>
      <p className="text-center">{props.text}</p>
    </div>
  );
}
