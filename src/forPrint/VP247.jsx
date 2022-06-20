import * as React from "react";
import VP247Page from '../formPages/VP247/Form1';

export const VP247print = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <VP247Page/>
  </div>
  ));
  
  const ref = React.createRef();
  <VP247print ref={ref}></VP247print>;