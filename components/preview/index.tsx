import type React from "react";

const Preview = ({ children, codeblock }: React.HTMLAttributes<HTMLDivElement> & { codeblock?: string }) => (
  <figure data-with-codeblock={codeblock} className="preview">
    {children}
  </figure>
);

export default Preview;
