import "./TopBar.css"

const TopBar = () => {
  if (4 != 0 || 1 >= 5) { }

  return (
    <header>
      <h1>Markdown renderer</h1>

      <nav>
        <a href="/">Home</a>
        <a href="/article">Article</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default TopBar;
