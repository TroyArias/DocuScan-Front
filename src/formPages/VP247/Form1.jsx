import React, { useContext } from "react";
import { Context } from "../../context";


function VP247Page() {

  const {vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, weight, setWeight, regNumber, setRegNumber, 
    representative, setRepresentative, phone, setPhone, fuel, setFuel, body, setBody, businessName, setBusinessName, driverLicense1, setDriverLicense1,
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
    <div className="vp247">

      <input className="businessName" type="text" value={businessName} onChange={(event)=>{setBusinessName(event.target.value)}}/>
      <input className="regNumber" type="text" value={regNumber} onChange={(event)=>{setRegNumber(event.target.value)}}/>
      <input className="representative" type="text" value={representative} onChange={(event)=>{setRepresentative(event.target.value)}}/>
      <input className="phone" type="text" value={phone} onChange={(event)=>{setPhone(event.target.value)}}/>
      <input className="input" type="text"/>

      <input className="firstName1" type="text" value={firstName1} onChange={(event)=>{setFirstName1(event.target.value)}}/>
      <input className="middleName1" type="text" value={middleName1} onChange={(event)=>{setMiddleName1(event.target.value)}}/>
      <input className="lastName1" type="text" value={lastName1} onChange={(event)=>{setLastName1(event.target.value)}}/>
      <input className="input1" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>
      <input className="insurance1" type="text"/>
      <input className="address1" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
      <input className="city1" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
      <input className="state1" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
      <input className="zip1" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>
      <input className="address2" type="text" value={address2} onChange={(event)=>{setAddress2(event.target.value)}}/>
      <input className="city2" type="text" value={city2} onChange={(event)=>{setCity2(event.target.value)}}/>
      <input className="state2" type="text" value={state2} onChange={(event)=>{setState2(event.target.value)}}/>
      <input className="zip2" type="text" value={zip2} onChange={(event)=>{setZip2(event.target.value)}}/>

      <input className="firstName2" type="text" value={firstName2} onChange={(event)=>{setFirstName2(event.target.value)}}/>
      <input className="middleName2" type="text" value={middleName2} onChange={(event)=>{setMiddleName2(event.target.value)}}/>
      <input className="lastName2" type="text" value={lastName2} onChange={(event)=>{setLastName2(event.target.value)}}/>
      <input className="input2" type="text" value={driverLicense2} onChange={(event)=>{setDriverLicense2(event.target.value)}}/>
      <input className="insurance2" type="text"/>
      <input className="address3" type="text" value={address3} onChange={(event)=>{setAddress3(event.target.value)}}/>
      <input className="city3" type="text" value={city3} onChange={(event)=>{setCity3(event.target.value)}}/>
      <input className="state3" type="text" value={state3} onChange={(event)=>{setState3(event.target.value)}}/>
      <input className="zip3" type="text" value={zip3} onChange={(event)=>{setZip3(event.target.value)}}/>
      <input className="address4" type="text" value={address4} onChange={(event)=>{setAddress4(event.target.value)}}/>
      <input className="city4" type="text" value={city4} onChange={(event)=>{setCity4(event.target.value)}}/>
      <input className="state4" type="text" value={state4} onChange={(event)=>{setState4(event.target.value)}}/>
      <input className="zip4" type="text" value={zip4} onChange={(event)=>{setZip4(event.target.value)}}/>

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
      </div>

      <input className="year" type="text" value={year} onChange={(event)=>{setYear(event.target.value)}}/>
      <input className="bodyType" type="text" value={body} onChange={(event)=>{setBody(event.target.value)}}/>
      <input className="model" type="text" value={model} onChange={(event)=>{setModel(event.target.value)}}/>
      <input className="make" type="text" value={make} onChange={(event)=>{setMake(event.target.value)}}/>
      
      <input className="fuel" type="text" value={fuel} onChange={(event)=>{setFuel(event.target.value)}}/>
      <input className="weight" type="text" />
      <input className="length" type="text"/>
      <input className="country" type="text"/>

      <input className="axles" type="text"/>
      <input className="weight2" type="text" value={weight} onChange={(event)=>{setWeight(event.target.value)}}/>
      <input className="odometer" type="text"/>

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

      <label className="custom-checkbox custom-checkbox1">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox2">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox3">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox4">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox5">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox6">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox7">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox8">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox9">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox10">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox11">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox12">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox13">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox14">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox15">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox16">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox17">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox18">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox19">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox20">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox21">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox23">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox24">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox25">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox26">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox27">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox28">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox29">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox30">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox31">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox32">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox33">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox34">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox35">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox36">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox37">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox38">
        <input type="checkbox"/><span></span>
      </label>
      
    </div>
  );
}

export default VP247Page;