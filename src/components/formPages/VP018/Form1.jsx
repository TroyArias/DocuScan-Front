import React, { useContext } from "react";
import { Context } from "../../../context";


function VP018Page() {

  const {vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, driverLicense1, setDriverLicense1,
    zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, state1, lastName1, setLastName1, firstName1, setFirstName1,
    middleName1, setMiddleName1, zip2, setZip2, setAddress2, address2, setCity2, city2, setState2, state2, body, setBody} = useContext(Context);


  function handleVal(value, index){
    let vehicleID2 = [...vehicleID]
    vehicleID2[index] = value
    setVehicleID(vehicleID2)
  }

  return (
    <div className="vp018">

      <label className="custom-checkbox custom-checkbox0181">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox0182">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox0181">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox0182">
        <input type="checkbox"/><span></span>
      </label>

      <div className="vehicleID">
        <input className="vehicleID1" type="text" maxLength='1' value={vehicleID[0]} onChange={(event)=>{handleVal(event.target.value, 0)}}/>
        <input className="vehicleID2" type="text" maxLength='1' value={vehicleID[1]} onChange={(event)=>{handleVal(event.target.value, 1)}}/>
        <input className="vehicleID3" type="text" maxLength='1' value={vehicleID[2]} onChange={(event)=>{handleVal(event.target.value, 2)}}/>
        <input className="vehicleID4" type="text" maxLength='1' value={vehicleID[3]} onChange={(event)=>{handleVal(event.target.value, 3)}}/>
        <input className="vehicleID5" type="text" maxLength='1' value={vehicleID[4]} onChange={(event)=>{handleVal(event.target.value, 4)}}/>
        <input className="vehicleID6" type="text" maxLength='1' value={vehicleID[5]} onChange={(event)=>{handleVal(event.target.value, 5)}}/>
        <input className="vehicleID7" type="text" maxLength='1' value={vehicleID[6]} onChange={(event)=>{handleVal(event.target.value, 6)}}/>
        <input className="vehicleID8" type="text" maxLength='1' value={vehicleID[7]} onChange={(event)=>{handleVal(event.target.value, 7)}}/>
        <input className="vehicleID9" type="text" maxLength='1' value={vehicleID[8]} onChange={(event)=>{handleVal(event.target.value, 8)}}/>
        <input className="vehicleID10" type="text" maxLength='1' value={vehicleID[9]} onChange={(event)=>{handleVal(event.target.value, 9)}}/>
        <input className="vehicleID11" type="text" maxLength='1' value={vehicleID[10]} onChange={(event)=>{handleVal(event.target.value, 10)}}/>
        <input className="vehicleID12" type="text" maxLength='1' value={vehicleID[11]} onChange={(event)=>{handleVal(event.target.value, 11)}}/>
        <input className="vehicleID13" type="text" maxLength='1' value={vehicleID[12]} onChange={(event)=>{handleVal(event.target.value, 12)}}/>
        <input className="vehicleID14" type="text" maxLength='1' value={vehicleID[13]} onChange={(event)=>{handleVal(event.target.value, 13)}}/>
        <input className="vehicleID15" type="text" maxLength='1' value={vehicleID[14]} onChange={(event)=>{handleVal(event.target.value, 14)}}/>
        <input className="vehicleID16" type="text" maxLength='1' value={vehicleID[15]} onChange={(event)=>{handleVal(event.target.value, 15)}}/>
        <input className="vehicleID17" type="text" maxLength='1' value={vehicleID[16]} onChange={(event)=>{handleVal(event.target.value, 16)}}/>
        <input className="vehicleID18" type="text" maxLength='1' value={vehicleID[17]} onChange={(event)=>{handleVal(event.target.value, 17)}}/>
      </div>

      <input className="year" type="text" value={year} onChange={(event)=>{setYear(event.target.value)}}/>
      <input className="make" type="text" value={make} onChange={(event)=>{setMake(event.target.value)}}/>
      <input className="model" type="text" value={model} onChange={(event)=>{setModel(event.target.value)}}/>
      <input className="bodyType" type="text" value={body} onChange={(event)=>{setBody(event.target.value)}}/>

      <input className="odometer" type="text"/>

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

      <input className="firstName1" type="text" value={firstName1} onChange={(event)=>{setFirstName1(event.target.value)}}/>
      <input className="middleName1" type="text" value={middleName1} onChange={(event)=>{setMiddleName1(event.target.value)}}/>
      <input className="lastName1" type="text" value={lastName1} onChange={(event)=>{setLastName1(event.target.value)}}/>
      
      <input className="driveLic" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>

      <input className="address1" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
      <input className="city1" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
      <input className="state1" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
      <input className="zip1" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>
      <input className="address2" type="text" value={address2} onChange={(event)=>{setAddress2(event.target.value)}}/>
      <input className="city2" type="text" value={city2} onChange={(event)=>{setCity2(event.target.value)}}/>
      <input className="state2" type="text" value={state2} onChange={(event)=>{setState2(event.target.value)}}/>
      <input className="zip2" type="text" value={zip2} onChange={(event)=>{setZip2(event.target.value)}}/>

      <input className="input11" type="text"/>
      <input className="input12" type="text"/>

      <label className="custom-checkbox custom-checkbox0181">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox0182">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox0183">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox0184">
        <input type="checkbox"/><span></span>
      </label>
    </div>
  );
}

export default VP018Page;