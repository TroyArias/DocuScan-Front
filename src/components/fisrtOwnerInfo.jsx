import React, { useContext } from "react";
import { Context } from "../context";


function FirstOwner() {

    const {driverLicense1, setDriverLicense1,zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, 
          name, setName, state1, lastName1, setLastName1, firstName1, setFirstName1, middleName1, setMiddleName1} = useContext(Context);


    function changeFirstName(value){
      setFirstName1(value)
      setName({...name, firstName: value})
    }

    function changeMiddleName(value){
      setMiddleName1(value)
      setName({...name, middleName: value})
    }

    function changeLastName(value){
      setLastName1(value)
      setName({...name, lastName: value})
    }
                                                                                   

return (
    <>
        <div className="ownersInformation">
            <p>First name</p><input className="firstName1" type="text" value={firstName1} onChange={(event)=>{changeFirstName(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>Middle name</p><input className="middleName1" type="text" value={middleName1} onChange={(event)=>{changeMiddleName(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>Last name</p><input className="lastName1" type="text" value={lastName1} onChange={(event)=>{changeLastName(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>DL/ID No.</p><input className="vehicleID" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>Address</p><input className="address1" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>City</p><input className="city1" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>State</p><input className="state1" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>Zip Code</p><input className="zip1" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>
          </div>
    </>

);
}

export default FirstOwner;