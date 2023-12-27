import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Article = () => {
  const content = `
  # This is a header

  And this is a *paragraph*
      
  ## This is a header

  **Lorem ipsum** dolor sit amet, consectetur adipisicing elit. Perferendis, facilis harum corporis illum dicta, doloribus doloremque veniam, explicabo ipsum laborum quibusdam sunt facere repellat quos delectus expedita quisquam hic eligendi!
  
  > A block quote with ~strikethrough~ and a URL: [React](https://reactjs.org).

  * Lists
  * [ ] todo
  * [x] done

  A table:

  | a | b |
  | - | - |

  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, facilis harum corporis illum dicta, doloribus doloremque veniam, explicabo ipsum laborum quibusdam sunt facere repellat quos delectus expedita quisquam hic eligendi!

  | Syntax      | Description |
  | ----------- | ----------- |
  | Header      | Title       |
  | Paragraph   | Text        |
  `;

  return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>;
};

export default Article;
