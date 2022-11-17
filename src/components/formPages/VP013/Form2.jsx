import React, { useContext, useState } from "react";
import { Context } from "../../../context";

function VP013Page2() {

  const {mobilePhone, setMobilePhone, date, setDate, name} = useContext(Context);

    return (
      <div className="vp013_2"> 

        <div className="cardNumber">
          <input className="cardNumber1" type="text" maxLength='1'/>
          <input className="cardNumber2" type="text" maxLength='1'/>
          <input className="cardNumber3" type="text" maxLength='1'/>
          <input className="cardNumber4" type="text" maxLength='1'/>
          <input className="cardNumber5" type="text" maxLength='1'/>
          <input className="cardNumber6" type="text" maxLength='1'/>
          <input className="cardNumber7" type="text" maxLength='1'/>
          <input className="cardNumber8" type="text" maxLength='1'/>
          <input className="cardNumber9" type="text" maxLength='1'/>
          <input className="cardNumber10" type="text" maxLength='1'/>
          <input className="cardNumber11" type="text" maxLength='1'/>
          <input className="cardNumber12" type="text" maxLength='1'/>
          <input className="cardNumber13" type="text" maxLength='1'/>
          <input className="cardNumber14" type="text" maxLength='1'/>
          <input className="cardNumber15" type="text" maxLength='1'/>
          <input className="cardNumber16" type="text" maxLength='1'/>
        </div>

        <div className="expDate">
          <input className="expDate1" type="text" maxLength='1'/>
          <input className="expDate2" type="text" maxLength='1'/>
          <input className="expDate3" type="text" maxLength='1'/>
          <input className="expDate4" type="text" maxLength='1'/>
        </div>

        <input className="input1" type="text" value={name.middleName === undefined ? name.firstName + " " + name.lastName : name.firstName + " " + name.middleName + " " + name.lastName}/>
        <input className="input2" type="text"/>
        <input className="input3" type="text"/>
        <input className="input4" type="text"/>
        <input className="input5" type="text"/>
        <input className="input6" type="text"/>
        <input className="input7" type="text"/>
        <input className="input8" type="text" value={mobilePhone} onChange={(event)=>{setMobilePhone(event.target.value)}}/>
        <input className="input9" type="text" value={date} onChange={(event)=>{setDate(event.target.value)}}/>

        <label className="custom-checkbox custom-checkbox0133">
          <input type="checkbox"/><span></span>
        </label>

        <label className="custom-checkbox custom-checkbox0134">
          <input type="checkbox"/><span></span>
        </label>

        <label className="custom-checkbox custom-checkbox0135">
          <input type="checkbox"/><span></span>
        </label>

   </div>
    );
  }

  export default VP013Page2;