export default function Section({ id, title, children, explore = false }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>

      {explore && <p>(Click to Expand)</p>}

      {children}
    </section>
  );
}