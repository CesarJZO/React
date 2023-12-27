import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Article = () => {
  const content = `
  # This is a header

  And this is a *paragraph*
      
  ## This is a header

  **Lorem ipsum** dolor sit amet, consectetur adipisicing elit. Perferendis, facilis harum corporis illum dicta, doloribus doloremque veniam, explicabo ipsum laborum quibusdam sunt facere repellat quos delectus expedita quisquam hic eligendi!
  
  ~~~js
  const a = 1
  const b = 2
  const c = a + b
  ~~~

  > A block quote with ~strikethrough~ and a URL: [React](https://reactjs.org).

  * Lists
  * [ ] todo
  * [x] done

  A table:

  | a | b |
  | - | - |
  | 1 | 2 |

  An image:

  ![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)

  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, facilis harum corporis illum dicta, doloribus doloremque veniam, explicabo ipsum laborum quibusdam sunt facere repellat quos delectus expedita quisquam hic eligendi!

  | Syntax      | Description |
  | ----------- | ----------- |
  | Header      | Title       |
  | Paragraph   | Text        |
  `;

  return (
    <div style={{
      maxWidth: '100%',
    }}>
      <Markdown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                // style={darkTheme}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Article;
