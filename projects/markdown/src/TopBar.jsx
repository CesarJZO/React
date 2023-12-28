import { Link } from "react-router-dom";
import "./TopBar.css"

const TopBar = () => {
  return (
    <header>
      <h1>Markdown renderer</h1>

      <nav>
      <Link to="/">Home</Link>
        <Link to="/article/0">Article 1</Link>
        <Link to="/article/1">Article 2</Link>
        <Link to="/article/2">Article 3</Link>
      </nav>
    </header>
  );
};

export default TopBar;
