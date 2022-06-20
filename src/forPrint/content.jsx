import * as React from "react";
import ExampleFormPage1 from '../formPages/Example/Form1';
import ExampleFormPage2 from '../formPages/Example/Form2';

export const Content = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <ExampleFormPage1/>
    <ExampleFormPage2/>
  </div>
    
  ));
  
  const ref = React.createRef();
  <Content ref={ref}></Content>;

