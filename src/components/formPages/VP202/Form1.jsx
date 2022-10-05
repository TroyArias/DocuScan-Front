import React, { useContext } from "react";
import { Context } from "../../../context";


function VP202Page() {

  const {driverLicense1, setDriverLicense1, zip1, setZip1, setAddress1, address1, setCity1, city1, 
    setState1, state1, lastName1, setLastName1, firstName1, setFirstName1,middleName1, 
    setMiddleName1, zip2, setZip2, setAddress2, address2, setCity2, city2, setState2, state2, name} = useContext(Context);


  return (
    <div className="vp202">


        <input className="input1" type="text" placeholder="Clark"/>
        <input className="input2" type="text" />    

        <input className="firstName" type="text" value={firstName1} onChange={(event)=>{setFirstName1(event.target.value)}}/>
        <input className="middleName" type="text" value={middleName1} onChange={(event)=>{setMiddleName1(event.target.value)}}/>
        <input className="lastName" type="text" value={lastName1} onChange={(event)=>{setLastName1(event.target.value)}}/>
        <input className="driverLic1" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>
        <input className="address1" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
        <input className="city1" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
        <input className="state1" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
        <input className="zip1" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>
        <input className="address2" type="text" value={address2} onChange={(event)=>{setAddress2(event.target.value)}}/>
        <input className="city2" type="text" value={city2} onChange={(event)=>{setCity2(event.target.value)}}/>
        <input className="state2" type="text" value={state2} onChange={(event)=>{setState2(event.target.value)}}/>
        <input className="zip2" type="text" value={zip2} onChange={(event)=>{setZip2(event.target.value)}}/>

        <input className="input3" type="text" value={name.middleName === undefined ? name.firstName + " " + name.lastName : name.firstName + " " + name.middleName + " " + name.lastName}/>
        <input className="input4" type="text" /> 
        <input className="input5" type="text" />
        <input className="input6" type="text" /> 
        <input className="input7" type="text" placeholder="Clark"/>
        <input className="input8" type="text" /> 
        <input className="input9" type="text" />
        <input className="input10" type="text" /> 
        <input className="input11" type="text" />

        <label className="custom-checkbox custom-checkbox202_1">
            <input type="checkbox"/><span></span>
        </label>

        <label className="custom-checkbox custom-checkbox202_2">
            <input type="checkbox"/><span></span>
        </label>

        <label className="custom-checkbox custom-checkbox202_3">
            <input type="checkbox"/><span></span>
        </label>

        <label className="custom-checkbox custom-checkbox202_4">
            <input type="checkbox"/><span></span>
        </label>

        <label className="custom-checkbox custom-checkbox202_5">
            <input type="checkbox"/><span></span>
        </label>

        <label className="custom-checkbox custom-checkbox202_6">
            <input type="checkbox"/><span></span>
        </label>

        <label className="custom-checkbox custom-checkbox202_7">
            <input type="checkbox"/><span></span>
        </label>

    </div>
  );
}

export default VP202Page;