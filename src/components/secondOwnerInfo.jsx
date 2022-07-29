import React, { useContext } from "react";
import { Context } from "../context";


function SecondOwner() {

    const {lastName2,zip3, setZip3, setAddress3, address3, setCity3, city3, setState3, state3, setLastName2, 
        firstName2, setFirstName2, middleName2, setMiddleName2, driverLicense2, setDriverLicense2,} = useContext(Context);


return (
    <>
        <div className="ownersInformation">
            <p>First name</p><input className="firstName1" type="text" value={firstName2} onChange={(event)=>{setFirstName2(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>Middle name</p><input className="middleName1" type="text" value={middleName2} onChange={(event)=>{setMiddleName2(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>Last name</p><input className="lastName1" type="text" value={lastName2} onChange={(event)=>{setLastName2(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>DL/ID No.</p><input className="vehicleID" type="text" value={driverLicense2} onChange={(event)=>{setDriverLicense2(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>Address</p><input className="address1" type="text" value={address3} onChange={(event)=>{setAddress3(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>City</p><input className="city1" type="text" value={city3} onChange={(event)=>{setCity3(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>State</p><input className="state1" type="text" value={state3} onChange={(event)=>{setState3(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>Zip Code</p><input className="zip1" type="text" value={zip3} onChange={(event)=>{setZip3(event.target.value)}}/>
          </div>
    </>

);
}

export default SecondOwner;