import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { content } from "./ArticleTest";
import "./Article.css";
import { Prism } from "react-syntax-highlighter";
import {
  oneDark,
  synthwave84,
  dracula,
  atomDark,
  darcula,
  materialDark,
  nord,
  vscDarkPlus,
  
  oneLight,
  materialLight
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams } from "react-router";

const files = [
  "https://raw.githubusercontent.com/CesarJZO/CesarJZO/main/readme.md",
  "https://raw.githubusercontent.com/CesarJZO/Not-Another-Platformer-Please/main/readme.md",
  "https://raw.githubusercontent.com/CesarJZO/C/main/readme.md",
];

const Article = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const colorScheme = usePrefersColorScheme();
  const { id } = useParams();

  useEffect(() => {
    fetch(files[id])
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data))
      .catch((error) => console.error(error));
  }, [id]);

  const theme = colorScheme === "light" ? oneLight : oneDark;

  return (
    <Markdown
      className="markdown"
      components={{
        div: ({ node, ...props }) => <article {...props} />,
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <Prism
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={theme}
              role="code"
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {id == 3 ? content : markdownContent}
    </Markdown>
  );
};

export default Article;

const usePrefersColorScheme = () => {
  const [colorScheme, setColorScheme] = useState(
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const changeHandler = () => setColorScheme(mediaQuery.matches ? 'light' : 'dark');

    mediaQuery.addEventListener('change', changeHandler);

    return () => {
      mediaQuery.removeEventListener('change', changeHandler);
    };
  }, []);

  return colorScheme;
};
