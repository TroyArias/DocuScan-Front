import React, { useContext } from "react";
import { Context } from "./context";
import ExampleFormPage1 from './formPages/Example/Form1';
import ExampleFormPage2 from './formPages/Example/Form2';
import VP012Page1 from './formPages/VP012/Form1';
import VP012Page2 from './formPages/VP012/Form2';
import VP019Page from './formPages/VP019/Form1';
import VP185Page from './formPages/VP185/Form1';
import VP247Page from './formPages/VP247/Form1';
import VP222Page from './formPages/VP222/Form1';
import ContractPage from './formPages/ContractPage/Form1';

function ListOfForms() {

    const {arrValues, setArrValues, arrForms, setArrForms} = useContext(Context);

    function checkValue(e) {

        let value = e.target.value;

        if (value === 'Contract'){
    
          if (!arrValues.includes(value)) {
            setArrForms([...arrForms, ContractPage]);
            setArrValues([...arrValues, value]);
          } else {
            setArrForms(arrForms.filter(function(f) { return f !== ContractPage}))
            setArrValues(arrValues.filter(function(f) { return f !== value }));
          }
        }
    
        if (value === 'ExampleFormPage'){
    
          if (!arrValues.includes(value)) {
            setArrForms([...arrForms, ExampleFormPage1, ExampleFormPage2]);
            setArrValues([...arrValues, value]);
          } else {
            setArrForms(arrForms.filter(function(f) { return (f !== ExampleFormPage1 && f !== ExampleFormPage2)}))
            setArrValues(arrValues.filter(function(f) { return f !== value }));
          }
        }
        
        if (value === 'VP247Page'){
    
          if (!arrValues.includes(value)) {
            setArrForms([...arrForms, VP247Page]);
            setArrValues([...arrValues, value]);
          } else {
            setArrForms(arrForms.filter(function(f) { return f !== VP247Page}))
            setArrValues(arrValues.filter(function(f) { return f !== value }));
          }
        }
    
        if (value === 'VP222Page'){
    
          if (!arrValues.includes(value)) {
            setArrForms([...arrForms, VP222Page]);
            setArrValues([...arrValues, value]);
          } else {
            setArrForms(arrForms.filter(function(f) { return f !== VP222Page}))
            setArrValues(arrValues.filter(function(f) { return f !== value }));
          }
        }
    
        if (value === 'VP019Page'){
    
          if (!arrValues.includes(value)) {
            setArrForms([...arrForms, VP019Page]);
            setArrValues([...arrValues, value]);
          } else {
            setArrForms(arrForms.filter(function(f) { return f !== VP019Page}))
            setArrValues(arrValues.filter(function(f) { return f !== value }));
          }
        }
    
        if (value === 'VP185Page'){
    
          if (!arrValues.includes(value)) {
            setArrForms([...arrForms, VP185Page]);
            setArrValues([...arrValues, value]);
          } else {
            setArrForms(arrForms.filter(function(f) { return f !== VP185Page}))
            setArrValues(arrValues.filter(function(f) { return f !== value }));
          }
        }
    
        if (value === 'VP012Page'){
    
          if (!arrValues.includes(value)) {
            setArrForms([...arrForms, VP012Page1, VP012Page2]);
            setArrValues([...arrValues, value]);
          } else {
            setArrForms(arrForms.filter(function(f) { return (f !== VP012Page1 && f!== VP012Page2)}))
            setArrValues(arrValues.filter(function(f) { return f !== value }));
          }
        }
      
      }

return (

<div className="formsList">
      
          <h3>List of forms</h3>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox2">
              <input onChange={checkValue} type="checkbox" value="Contract" /><span></span>
              <div className="listLinks"><p>Contract and Disclosure</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox2">
              <input onChange={checkValue} type="checkbox" value="VP247Page" /><span></span>
              <div className="listLinks"><p>Registration Service Transaction Request VP247</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox3">
              <input onChange={checkValue} type="checkbox" value="VP222Page" /><span></span>
              <div className="listLinks"><p>Application for Vehicle Registration VP222</p></div>
            </label>
          </div>

          <h3>Ownership Forms</h3>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox4">
              <input onChange={checkValue} type="checkbox" value="VP019Page" /><span></span>
              <div className="listLinks"><p>Erasure Affidavit VP019</p></div>
            </label> 
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox5">
              <input onChange={checkValue} type="checkbox" value="VP185Page" /><span></span>
              <div className="listLinks"><p>One and the Same Affidavit VP185</p></div>
            </label>
          </div>


          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox6">
              <input onChange={checkValue} type="checkbox" value="VP012Page" /><span></span>
              <div className="listLinks"><p>Application for Duplicate Nevada Certificate of Title VP012</p></div>
            </label>
          </div>

        </div>

);
}

export default ListOfForms;