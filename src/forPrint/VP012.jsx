import * as React from "react";
import VP012Page1 from '../formPages/VP012/Form1';
import VP012Page2 from '../formPages/VP012/Form2';

export const VP012print = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <VP012Page1/>
    <VP012Page2/>
  </div>
    
  ));
  
  const ref = React.createRef();
  <VP012print ref={ref}></VP012print>;