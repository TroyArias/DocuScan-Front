import * as React from "react";
import VP185Page from '../formPages/VP185/Form1';

export const VP185print = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <VP185Page/>
  </div>
  ));
  
  const ref = React.createRef();
  <VP185print ref={ref}></VP185print>;