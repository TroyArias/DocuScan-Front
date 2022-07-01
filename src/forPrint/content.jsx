import * as React from "react";

export const Content = React.forwardRef((props, ref) => (
  <div ref={ref}>
    {props.pages.map(page => (page()))}
  </div>
  ));
  
  const ref = React.createRef();
  <Content ref={ref} ></Content>;

