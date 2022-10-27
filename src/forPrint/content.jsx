import * as React from "react";

export const Content = React.forwardRef((props, ref) => (
  <div ref={ref}>
    {props.pages.map(page => (
      <div className="page">{page()}</div>
      ))}
  </div>
  ));
  
  const ref = React.createRef();
  <Content ref={ref} ></Content>;

