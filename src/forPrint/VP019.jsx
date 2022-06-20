import * as React from "react";
import VP019Page from '../formPages/VP019/Form1';

export const VP019print = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <VP019Page/>
  </div>
  ));
  
  const ref = React.createRef();
  <VP019print ref={ref}></VP019print>;