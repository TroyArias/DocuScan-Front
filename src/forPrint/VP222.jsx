import * as React from "react";
import VP222Page from '../formPages/VP222/Form1';

export const VP222print = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <VP222Page/>
  </div>
    
  ));
  
  const ref = React.createRef();
  <VP222print ref={ref}></VP222print>;