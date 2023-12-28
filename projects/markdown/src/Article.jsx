import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { content } from "./ArticleTest";
import "./Article.css";
import { useParams } from "react-router";

const files = [
  "https://raw.githubusercontent.com/CesarJZO/CesarJZO/main/readme.md",
  "https://raw.githubusercontent.com/CesarJZO/Not-Another-Platformer-Please/main/readme.md",
  "https://raw.githubusercontent.com/CesarJZO/C/main/readme.md",
];

const Article = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(files[id])
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data))
      .catch((error) => console.error(error));
  }, [id]);

  return <Markdown className="markdown">{markdownContent}</Markdown>;
};

export default Article;
