import React, { useContext } from "react";
import { Context } from "../../../context";

function SP66Page1() {

  const {driverLicense1, setDriverLicense1,
    zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, state1, lastName1, setLastName1, firstName1, setFirstName1,
    middleName1, setMiddleName1, zip2, setZip2, setAddress2, address2, setCity2, city2, setState2, state2, body, setBody} = useContext(Context);

    return (
          
    <div className="sp66_1">

      <label className="custom-checkbox custom-checkbox66_1_0">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox66_1_1">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox66_1_2">
        <input type="checkbox"/><span></span>
      </label>

      <div className="firstChoise">
        <input className="firstChoise1" type="text" maxLength='1'/>
        <input className="firstChoise2" type="text" maxLength='1'/>
        <input className="firstChoise3" type="text" maxLength='1'/>
        <input className="firstChoise4" type="text" maxLength='1'/>
        <input className="firstChoise5" type="text" maxLength='1'/>
        <input className="firstChoise6" type="text" maxLength='1'/>
        <input className="firstChoise7" type="text" maxLength='1'/>
      </div>

      <div className="secondChoise">
        <input className="secondChoise1" type="text" maxLength='1'/>
        <input className="secondChoise2" type="text" maxLength='1'/>
        <input className="secondChoise3" type="text" maxLength='1'/>
        <input className="secondChoise4" type="text" maxLength='1'/>
        <input className="secondChoise5" type="text" maxLength='1'/>
        <input className="secondChoise6" type="text" maxLength='1'/>
        <input className="secondChoise7" type="text" maxLength='1'/>
      </div>

      <div className="thirdChoise">
        <input className="thirdChoise1" type="text" maxLength='1'/>
        <input className="thirdChoise2" type="text" maxLength='1'/>
        <input className="thirdChoise3" type="text" maxLength='1'/>
        <input className="thirdChoise4" type="text" maxLength='1'/>
        <input className="thirdChoise5" type="text" maxLength='1'/>
        <input className="thirdChoise6" type="text" maxLength='1'/>
        <input className="thirdChoise7" type="text" maxLength='1'/>
      </div>

      <input className="input1" type="text"/>
      <input className="input2" type="text"/>
      <input className="input3" type="text"/>

      <input className="lastName1" type="text" value={lastName1} onChange={(event)=>{setLastName1(event.target.value)}}/>
      <input className="firstName1" type="text" value={firstName1} onChange={(event)=>{setFirstName1(event.target.value)}}/>
      <input className="middleName1" type="text" value={middleName1} onChange={(event)=>{setMiddleName1(event.target.value)}}/>
      
      
      <input className="driveLic" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>

      <input className="address1" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
      <input className="city1" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
      <input className="state1" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
      <input className="zip1" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>
      <input className="address2" type="text" value={address2} onChange={(event)=>{setAddress2(event.target.value)}}/>
      <input className="city2" type="text" value={city2} onChange={(event)=>{setCity2(event.target.value)}}/>
      <input className="state2" type="text" value={state2} onChange={(event)=>{setState2(event.target.value)}}/>
      <input className="zip2" type="text" value={zip2} onChange={(event)=>{setZip2(event.target.value)}}/>

      <input className="phone" type="text"/>
      <input className="email" type="text"/>

      <input className="input4" type="text"/>
      <input className="input5" type="text"/>
      <input className="input6" type="text"/>

    </div>
        
    );
  }
  
  export default SP66Page1;