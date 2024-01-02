import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const content = `
  # This is a header

  And this is a *paragraph*
      
  ## This is a header

  **Lorem ipsum** dolor sit amet, consectetur adipisicing elit. Perferendis, facilis harum corporis illum dicta, doloribus doloremque veniam, explicabo ipsum laborum quibusdam sunt facere repellat quos delectus expedita quisquam hic eligendi!
  
  \`\`\`ts
  import axios from "axios";
  import { useEffect, useState } from "react";

  const a = 1
  const b = 2
  const c = a + b

  function isEven(n) {
    return n % 2 == 0
  }

  const numbers = [1, 2, 3, 4, 5]
  const even = numbers.filter(isEven)

  for (let i = 0; i < 10; i++) {
    console.log(isEven(i))
  }
  \`\`\`

  \`\`\`csharp
  using System;

  namespace HelloWorld;

  internal class Program
  {
    private static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
    }

    private static bool IsEven(int n)
    {
      return n % 2 == 0;
    }

    public Complex ReallyComplexFunction(int a, int b)
    {
      return new Complex(a, b);
    }
  }
  \`\`\`

  > A block quote with strikethrough and a URL: [React](https://reactjs.org).

  In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
  of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
  eat: it was a [hobbit-hole][1], and that means comfort.
  
  [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

  > Lists

  > * [ ] todo
  > * [x] done

  > ### Ordered list
  > 1. First
  > 1. Second
  > 1. Third
  >    1. Indented

  - 1968\\. A great year!
  - I think that's enough examples.
 
  A table:

  ---

  | a | b |
  | - | - |
  | 1 | 2 |

  > An image:

  > ![React](images/Jog.png)

  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, facilis harum corporis illum dicta, doloribus doloremque veniam, explicabo ipsum laborum quibusdam sunt facere repellat quos delectus expedita quisquam hic eligendi!

  | Syntax      | Description |
  | ----------- | ----------- |
  | Header      | Title       |
  | Paragraph   | Text        |
  `;

const ArticleTest = () => {
  return (
    <div
      style={{
        maxWidth: "100%",
      }}
    >
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

export default ArticleTest;
