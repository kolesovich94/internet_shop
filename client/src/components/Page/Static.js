export default function Static(props) {
  return (
    <section className="top-sales">
      <h2 className="text-center">{props.header}</h2>
      {props.children}
    </section>
  );
}
