import { Link, useLocation } from "react-router-dom";

const navigation = [
  ["education", "Education"],
  ["experience", "Experience"],
  ["software", "Projects"],
  ["research", "Research"],
  ["clubs", "Clubs"],
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link to="/" className="navigation-logo">
        MC
      </Link>

      <div className="navigation-links">
        {navigation.map(([path, label]) => {
          const active = location.pathname === `/${path}`;

          return (
            <Link
              key={path}
              to={`/${path}`}
              className={active ? "active" : ""}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}