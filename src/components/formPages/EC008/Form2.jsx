import React, { useContext } from "react";
import { Context } from "../../../context";


function EC008Page2() {

  const {name, vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, driverLicense1, setDriverLicense1,
    zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, state1, zip2, setZip2, setAddress2, address2, setCity2, city2, setState2, state2,} = useContext(Context);


  return (
    <div className="ec008_2">

      <input className="name" type="text" value={name.middleName === undefined ? name.firstName + " " + name.lastName : name.firstName + " " + name.middleName + " " + name.lastName} />
      <input className="driverLic1" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>
 
      <input className="address1" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
      <input className="input1" type="text" placeholder="Clark"/>

      <input className="city1" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
      <input className="state1" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
      <input className="zip1" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>
      <input className="input2" type="text"/>

      <input className="address2" type="text" value={address2} onChange={(event)=>{setAddress2(event.target.value)}}/>
      <input className="input3" type="text"/>

      <input className="city2" type="text" value={city2} onChange={(event)=>{setCity2(event.target.value)}}/>
      <input className="state2" type="text" value={state2} onChange={(event)=>{setState2(event.target.value)}}/>
      <input className="zip2" type="text" value={zip2} onChange={(event)=>{setZip2(event.target.value)}}/>
      <input className="input4" type="text"/>
      
      <input className="input5" type="text"/>
      {typeof vehicleID === "object" ? 
      <input className="vehicleID" type="text" value={vehicleID.join('')} onChange={(event)=>{setVehicleID(event.target.value)}}/>: 
      <input className="vehicleID" type="text" value={vehicleID} onChange={(event)=>{setVehicleID(event.target.value)}}/>}

      <input className="year" type="text" value={year} onChange={(event)=>{setYear(event.target.value)}}/>
      <input className="make" type="text" value={make} onChange={(event)=>{setMake(event.target.value)}}/>
      <input className="model" type="text" value={model} onChange={(event)=>{setModel(event.target.value)}}/>
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
      <input className="input16" type="text" placeholder="Clark"/>
      <input className="input17" type="text" placeholder="Nevada"/>

      <label className="custom-checkbox custom-checkbox0081">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox0082">
        <input type="checkbox"/><span></span>
      </label>

    </div>
  );
}

export default EC008Page2;