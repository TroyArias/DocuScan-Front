import React, { useContext } from "react";
import { Context } from "../../../context";


function VP136Page() {

  const {vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, driverLicense1, setDriverLicense1,
    zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, state1, lastName1, setLastName1, firstName1, setFirstName1,
    middleName1, setMiddleName1, zip2, setZip2, setAddress2, address2, setCity2, city2, setState2, state2} = useContext(Context);


  return (

    <div className="vp136">

        <input className="input1" type="text" />
        <input className="input2" type="text" />
        <input className="input3" type="text" />

        <input className="year" type="text" value={year} onChange={(event)=>{setYear(event.target.value)}}/>
        <input className="make" type="text" value={make} onChange={(event)=>{setMake(event.target.value)}}/>
        <input className="model" type="text" value={model} onChange={(event)=>{setModel(event.target.value)}}/>

        {typeof vehicleID === "object" ? 
        <input className="vehicleID" type="text" value={vehicleID.join('')} onChange={(event)=>{setVehicleID(event.target.value)}}/>: 
        <input className="vehicleID" type="text" value={vehicleID} onChange={(event)=>{setVehicleID(event.target.value)}}/>}

        <input className="input4" type="text" />
        <input className="input5" type="text" />
        <input className="input6" type="text" />
        
        <input className="firstName1" type="text" value={firstName1} onChange={(event)=>{setFirstName1(event.target.value)}}/>
        <input className="middleName1" type="text" value={middleName1} onChange={(event)=>{setMiddleName1(event.target.value)}}/>
        <input className="lastName1" type="text" value={lastName1} onChange={(event)=>{setLastName1(event.target.value)}}/>
        <input className="driverLic1" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>

        <input className="address1" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
        <input className="city1" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
        <input className="state1" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
        <input className="zip1" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>

        <input className="address2" type="text" value={address2} onChange={(event)=>{setAddress2(event.target.value)}}/>
        <input className="city2" type="text" value={city2} onChange={(event)=>{setCity2(event.target.value)}}/>
        <input className="state2" type="text" value={state2} onChange={(event)=>{setState2(event.target.value)}}/>
        <input className="zip2" type="text" value={zip2} onChange={(event)=>{setZip2(event.target.value)}}/>

        <input className="input7" type="text" />
        <input className="input8" type="text" />

    </div>
  );
}

export default VP136Page;