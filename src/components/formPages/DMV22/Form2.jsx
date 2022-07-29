import React, { useContext } from "react";
import { Context } from "../../../context";


function DMV22Page2() {

  const {name, driverLicense1, setDriverLicense1} = useContext(Context);


  return (
    <div className="dmv22_2">

      <input className="input1" type="text"/>
      <input className="input2" type="text"/>
      <input className="input3" type="text"/>
      <input className="input4" type="text" value={name.middleName === undefined ? name.firstName + " " + name.lastName : name.firstName + " " + name.middleName + " " + name.lastName} />
      <input className="input5" type="text" value={driverLicense1} onChange={(event)=>{setDriverLicense1(event.target.value)}}/>
      <input className="input6" type="text"/>

      <label className="custom-checkbox custom-checkbox22_2_0">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_1">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_2">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_3">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_4">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_5">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_6">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_7">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_8">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_9">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_10">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_11">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_12">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_13">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_14">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_15">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_16">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_17">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_18">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_19">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_20">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_21">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_22">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_23">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox22_2_24">
        <input type="checkbox"/><span></span>
      </label>

    </div>
  );
}

export default DMV22Page2;