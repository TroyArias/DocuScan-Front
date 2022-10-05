import React, { useContext } from "react";
import { Context } from "../../../context";


function VP185Page() {

  const {name, driverLicense1, setDriverLicense1, setAddress1, address1, setCity1, city1, setState1, state1, setZip1, zip1,
    setAddress2, address2, setCity2, city2, setState2, state2, setZip2, zip2} = useContext(Context);


  return (
    <div className="vp185">

    <input className="name" type="text" value={name.middleName === undefined ? name.firstName + " " + name.lastName : name.firstName + " " + name.middleName + " " + name.lastName}/>

      <input className="address1" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
      <input className="city1" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
      <input className="state1" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
      <input className="zip1" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>

      <input className="address2" type="text" value={address2} onChange={(event)=>{setAddress2(event.target.value)}}/>
      <input className="city2" type="text" value={city2} onChange={(event)=>{setCity2(event.target.value)}}/>
      <input className="state2" type="text" value={state2} onChange={(event)=>{setState2(event.target.value)}}/>
      <input className="zip2" type="text" value={zip2} onChange={(event)=>{setZip2(event.target.value)}}/>

      <input className="input1" type="text" value={name.middleName === undefined ? name.firstName + " " + name.lastName : name.firstName + " " + name.middleName + " " + name.lastName}/>
      <input className="input2" type="text" />
      <input className="input3" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>
      <input className="input4" type="text" placeholder="Clark"/>
      <input className="input5" type="text" />
      <input className="input6" type="text" />
    </div>
  );
}

export default VP185Page;