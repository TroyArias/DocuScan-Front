import React, { useContext } from "react";
import { Context } from "../context";
import VP012Page2 from './formPages/VP012/Form2';
import VP019Page from './formPages/VP019/Form1';
import VP185Page from './formPages/VP185/Form1';
import VP247Page from './formPages/VP247/Form1';
import VP222Page from './formPages/VP222/Form1';
import ContractPage from './formPages/ContractPage/Form1';
import VP104Page from './formPages/VP104/Form1';
import VP265Page2 from './formPages/VP265/Form2';
import VP136Page from './formPages/VP136/Form1';
import VP202Page from './formPages/VP202/Form1';
import VP018Page from './formPages/VP018/Form1';
import VP013Page1 from './formPages/VP013/Form1';
import EC008Page2 from './formPages/EC008/Form2';
import DMV22Page1 from './formPages/DMV22/Form1';
import DMV22Page2 from './formPages/DMV22/Form2';
import NLV019Page from './formPages/NLV019/Form1';
import SP66Page1 from './formPages/SP66/Form1';
import SP45Page from './formPages/SP45/Form1';
import SP33Page2 from './formPages/SP33/Form2';
import SP34Page from './formPages/SP34/Form1';
import SP20Page from './formPages/SP20/Form1';
import EC018Page from './formPages/EC018/Form1';

function ListOfForms() {

    const {arrValues, setArrValues, arrForms, setArrForms} = useContext(Context);

    function checkValue(e) {

        let value = e.target.value;

        switch(value) {

          case 'Contract':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, ContractPage]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== ContractPage}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;
          
          case 'VP247Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP247Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== VP247Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;
      
          case 'VP222Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP222Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== VP222Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;
      
          case 'VP019Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP019Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== VP019Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;
      
          case 'VP185Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP185Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== VP185Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;
      
          case 'VP012Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP012Page2]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f!== VP012Page2}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'VP104Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP104Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== VP104Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'VP265Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP265Page2]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f!== VP265Page2}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'VP136Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP136Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== VP136Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break

          case 'VP202Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP202Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== VP202Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break

          case 'VP018Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP018Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== VP018Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break

          case 'VP013Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, VP013Page1]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return (f !== VP013Page1)}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'EC008Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, EC008Page2]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return ( f!== EC008Page2)}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'DMV22Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, DMV22Page1, DMV22Page2]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return (f!== DMV22Page1 && f!== DMV22Page2)}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'NLV019Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, NLV019Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== NLV019Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'SP66Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, SP66Page1]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== SP66Page1 }))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'SP45Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, SP45Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== SP45Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'SP33Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, SP33Page2]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f!== SP33Page2}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'SP34Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, SP34Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== SP34Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'SP20Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, SP20Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== SP20Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          case 'EC018Page':
            if (!arrValues.includes(value)) {
              setArrForms([...arrForms, EC018Page]);
              setArrValues([...arrValues, value]);
            } else {
              setArrForms(arrForms.filter(function(f) { return f !== EC018Page}))
              setArrValues(arrValues.filter(function(f) { return f !== value }));
            }
          break;

          default:

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

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox7">
              <input onChange={checkValue} type="checkbox" value="VP104Page" /><span></span>
              <div className="listLinks"><p>Bill of Sale VP104</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox8">
              <input onChange={checkValue} type="checkbox" value="VP265Page" /><span></span>
              <div className="listLinks"><p>Application for Expedited Processing/Shipping of Nevada Title VP265</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox8">
              <input onChange={checkValue} type="checkbox" value="VP136Page" /><span></span>
              <div className="listLinks"><p>Power of Attorney VP136</p></div>
            </label>
          </div>


          <h3>Registration Forms</h3>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="VP202Page" /><span></span>
              <div className="listLinks"><p>Lost, Stolen or Mutilated License Plate Affidavit VP202</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="VP018Page" /><span></span>
              <div className="listLinks"><p>Affidavit of Non-Operation VP018</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="VP013Page" /><span></span>
              <div className="listLinks"><p>Application for Duplicate Registration Certificate VP013</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="EC008Page" /><span></span>
              <div className="listLinks"><p>Emission Control Exemption Application EC008</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="DMV22Page" /><span></span>
              <div className="listLinks"><p>Change of Address Notification by Mail DMV22</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="NLV019Page" /><span></span>
              <div className="listLinks"><p>Declaration of Responsibility NLV019</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="SP66Page" /><span></span>
              <div className="listLinks"><p>Application sp66 – Personalized Plate</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="SP45Page" /><span></span>
              <div className="listLinks"><p>Application sp45 – Circa 1982 Replicate Plate</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="SP33Page" /><span></span>
              <div className="listLinks"><p>Application sp33 – Veterans</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="SP34Page" /><span></span>
              <div className="listLinks"><p>Application sp34 – Classic Vehicle</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="SP20Page" /><span></span>
              <div className="listLinks"><p>Application sp20 – Classic Rod</p></div>
            </label>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox9">
              <input onChange={checkValue} type="checkbox" value="EC018Page" /><span></span>
              <div className="listLinks"><p>Odometer Certificate for Emissions Exemption Form EC018</p></div>
            </label>
          </div>

        </div>

);
}

export default ListOfForms;