import { useState } from "react";

export default function Card({ title, children, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      <button
        className="card-title"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <h3>{title}</h3>

        <span className="expand-icon">
          {expanded ? "-" : "+"}
        </span>
      </button>

      <div className="card-content">
        {children}
      </div>
    </div>
  );
}