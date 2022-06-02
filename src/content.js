import * as React from "react";
import Form from './forms/1_form/Form_1';
import Form_2 from './forms/1_form/Form_2';

export const Content = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <Form inputsValue={props}/>
    <Form_2 inputsValue={props}/>
  </div>
    
  ));
  
  const ref = React.createRef();
  <Content ref={ref}></Content>;

