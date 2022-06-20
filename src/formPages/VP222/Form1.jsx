import React, { useContext } from "react";
import { Context } from "../../context";


function VP222Page() {

  const [firstName, setFirstName, middleName, setMiddleName, lastName, setLastName, 
    vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, weight, setWeight, 
    setAddress1, address1, setCity1, city1, setState1, state1, zip1, setZip1, 
    setAddress2, address2, setCity2, city2, setState2, state2, zip2, setZip2,
    driverLicense, setDriverLicense] = useContext(Context);


  function handleVal(value, index){
    let vehicleID2 = [...vehicleID]
    vehicleID2[index] = value
    console.log(vehicleID2)
    setVehicleID(vehicleID2)
  }

  return (
    <div className="vp222">

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
      <input className="weight" type="text" />
      <input className="weight2" type="text" value={weight} onChange={(event)=>{setWeight(event.target.value)}}/>
      <input className="country" type="text"/>
      <input className="odometer" type="text"/>
      <input className="firstName" type="text" value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}/>
      <input className="middleName" type="text" value={middleName} onChange={(event)=>{setMiddleName(event.target.value)}}/>
      <input className="lastName" type="text" value={lastName} onChange={(event)=>{setLastName(event.target.value)}}/>
      <input className="input1" type="text" value={driverLicense} onChange={(event)=>{setDriverLicense(event.target.value)}}/>
      <input className="address" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
      <input className="city" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
      <input className="state" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
      <input className="zipCode" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>
      <input className="address2" type="text" value={address2} onChange={(event)=>{setAddress2(event.target.value)}}/>
      <input className="city2" type="text" value={city2} onChange={(event)=>{setCity2(event.target.value)}}/>
      <input className="state2" type="text" value={state2} onChange={(event)=>{setState2(event.target.value)}}/>
      <input className="zipCode2" type="text" value={zip2} onChange={(event)=>{setZip2(event.target.value)}}/>
      <input className="telephone" type="text"/>
      <input className="email" type="text"/>
    </div>
  );
}

export default VP222Page;