import React, { useContext } from "react";
import { Context } from "../../../context";


function VP104Page() {

  const {vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, driverLicense1, setDriverLicense1, body, setBody,
    zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, state1, lastName1, setLastName1, firstName1, setFirstName1,
    middleName1, setMiddleName1, zip2, setZip2, setAddress2, address2, setCity2, city2, setState2, state2, lastName2, 
    zip3, setZip3, setAddress3, address3, setCity3, city3, setState3, state3, setLastName2, firstName2, setFirstName2, 
    middleName2, setMiddleName2, zip4, setZip4, setAddress4, address4, setCity4, city4, setState4, state4, driverLicense2, setDriverLicense2} = useContext(Context);

    function handleVal(value, index){
      let vehicleID2 = [...vehicleID]
      vehicleID2[index] = value
      setVehicleID(vehicleID2)
    }


  return (

    
    <div className="vp104">

      <input className="input1" type="text"/>
      <input className="input2" type="text"/>

      <input className="firstName1" type="text" />
      <input className="middleName1" type="text" />
      <input className="lastName1" type="text" />
      <input className="driverLicense1" type="text" />
      <input className="address1" type="text" />
      <input className="city1" type="text" />
      <input className="state1" type="text" />
      <input className="zip1" type="text" />
      <input className="address2" type="text" />
      <input className="city2" type="text" />
      <input className="state2" type="text" />
      <input className="zip2" type="text" />

      <input className="firstName2" type="text" />
      <input className="middleName2" type="text" />
      <input className="lastName2" type="text" />
      <input className="driverLicense2" type="text" />
      <input className="address3" type="text" />
      <input className="city3" type="text" />
      <input className="state3" type="text" />
      <input className="zip3" type="text" />
      <input className="address4" type="text" />
      <input className="city4" type="text" />
      <input className="state4" type="text" />
      <input className="zip4" type="text" />

      <input className="date" type="tex"/>
      <input className="telephone" type="text"/>
      <input className="email" type="text"/>

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
      <input className="model" type="text" value={model} onChange={(event)=>{setModel(event.target.value)}}/>
      <input className="make" type="text" value={make} onChange={(event)=>{setMake(event.target.value)}}/>
      <input className="bodyType" type="text" value={body} onChange={(event)=>{setBody(event.target.value)}}/>
      
      <input className="input3" type="text"/>
      <input className="input4" type="text"/>
      <input className="input5" type="text"/>
      <input className="input6" type="text"/>
      <input className="input7" type="text" />
      <input className="input8" type="text"/>
      <input className="input9" type="text" value={firstName1} onChange={(event)=>{setFirstName1(event.target.value)}}/>
      <input className="input10" type="text" value={middleName1} onChange={(event)=>{setMiddleName1(event.target.value)}}/>
      <input className="input11" type="text" value={lastName1} onChange={(event)=>{setLastName1(event.target.value)}}/>
      <input className="input12" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>
      <input className="input13" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
      <input className="input14" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
      <input className="input15" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
      <input className="input16" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>
      <input className="input17" type="text"/>

      <label className="custom-checkbox custom-checkbox104_1">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox104_2">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox104_3">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox104_3">
        <input type="checkbox"/><span></span>
      </label>
    </div>
  );
}

export default VP104Page;