import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { content } from "./ArticleTest";
import "./Article.css";

const files = [
  "https://raw.githubusercontent.com/CesarJZO/CesarJZO/main/readme.md",
  "https://raw.githubusercontent.com/CesarJZO/Not-Another-Platformer-Please/main/readme.md",
  "https://raw.githubusercontent.com/CesarJZO/C/main/readme.md",
];

const Article = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(files[2])
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data))
      .catch((error) => console.error(error));
  }, []);
  
  return <Markdown className="markdown">{markdownContent}</Markdown>;
};

export default Article;
