import React, { useContext } from "react";
import { Context } from "../../../context";

function DMV22Page1() {


  const {zip1, setAddress1, address1, city1, state1, lastName1, setLastName1, firstName1, setFirstName1,
    middleName1, setMiddleName1, zip2, setAddress2, address2, setCity2, city2, state2, setState1, driverLicense1, setDriverLicense1} = useContext(Context);

    return (
      <div className="dmv22_1"> 

          <input className="lastName1" type="text" value={lastName1} onChange={(event)=>{setLastName1(event.target.value)}}/>
          <input className="firstName1" type="text" value={firstName1} onChange={(event)=>{setFirstName1(event.target.value)}}/>
          <input className="middleName1" type="text" value={middleName1} onChange={(event)=>{setMiddleName1(event.target.value)}}/>
          <input className="suffix" type="text"/>
          <input className="nevadaIdNumber" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>
          <input className="state1" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
          <input className="country" type="text"/>
          <input className="dateOfBirth" type="text"/>
          <input className="address1" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
          <input className="address2" type="text" value={address2} onChange={(event)=>{setAddress2(event.target.value)}}/>
          <input className="cityStateZip1" type="text" value={city1 + ' ' + state1 + ' ' + zip1}/>
          <input className="cityStateZip2" type="text" value={city2 + ' ' + state2 + ' ' + zip2} onChange={(event)=>{setCity2(event.target.value)}}/>
          <input className="phone_code" type="text"/>
          <input className="phone_number" type="text"/>
          <input className="email" type="text"/>

          <input className="input1" type="text"/>
          <input className="input2" type="text"/>
          <input className="input3" type="text"/>
          <input className="input4" type="text"/>
          <input className="input5" type="text"/>
          <input className="input6" type="text"/>
          <input className="input7" type="text"/>
          <input className="input8" type="text"/>
          <input className="input9" type="text"/>
          <input className="input10" type="text"/>
          <input className="input11" type="text"/>
          <input className="input12" type="text"/>
          <input className="input13" type="text"/>
          <input className="input14" type="text"/>
          <input className="input15" type="text"/>

          <label className="custom-checkbox custom-checkbox22_1_0">
            <input type="checkbox"/><span></span>
          </label>

          <label className="custom-checkbox custom-checkbox22_1_1">
            <input type="checkbox"/><span></span>
          </label>

          <label className="custom-checkbox custom-checkbox22_1_2">
            <input type="checkbox"/><span></span>
          </label>

          <label className="custom-checkbox custom-checkbox22_1_3">
            <input type="checkbox"/><span></span>
          </label>

          <label className="custom-checkbox custom-checkbox22_1_4">
            <input type="checkbox"/><span></span>
          </label>

          <label className="custom-checkbox custom-checkbox22_1_5">
            <input type="checkbox"/><span></span>
          </label>

          <label className="custom-checkbox custom-checkbox22_1_6">
            <input type="checkbox"/><span></span>
          </label>

          <label className="custom-checkbox custom-checkbox22_1_7">
            <input type="checkbox"/><span></span>
          </label>

          <label className="custom-checkbox custom-checkbox22_1_8">
            <input type="checkbox"/><span></span>
          </label>

          <label className="custom-checkbox custom-checkbox22_1_9">
            <input type="checkbox"/><span></span>
          </label>

          <label className="custom-checkbox custom-checkbox22_1_10">
            <input type="checkbox"/><span></span>
          </label>
          
      </div>
    );
  }
  
  export default DMV22Page1;