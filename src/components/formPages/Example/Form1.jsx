import React, { useContext } from "react";
import { Context } from "../../../context";


function ExampleFormPage1() {

  const {lastName, setLastName, firstName, setFirstName, middleName, setMiddleName, 
    dateOfBirth, setDateOfBirth, street, setStreet, cityStateZip, setCityStateZip,
    placeOfBirth, setPlaceOfBirth} = useContext(Context);

  return (

        <div className="form_1">
          <input type="checkbox" className="box_1"/>
          <input type="checkbox" className="box_2"/>
          <input type="checkbox" className="box_3"/>
          <input type="checkbox" className="box_4"/>
          <input type="checkbox" className="box_5"/>
          <input type="checkbox" className="box_6"/>
          <input type="checkbox" className="box_7"/>
          <input type="checkbox" className="box_8"/>
          <input type="checkbox" className="box_9"/>
          <input type="checkbox" className="box_10"/>
          <input type="checkbox" className="box_11"/>
          <input type="checkbox" className="box_12"/>
          <input type="checkbox" className="box_13"/>
          <input type="checkbox" className="box_14"/>
          <input type="checkbox" className="box_15"/>
          <input type="checkbox" className="box_16"/>
          <input type="checkbox" className="box_17"/>
          <input type="checkbox" className="box_18"/>
          <input type="checkbox" className="box_19"/>
          <input type="checkbox" className="box_20"/>
          <input type="checkbox" className="box_21"/>
          <input type="checkbox" className="box_22"/>
          <input type="checkbox" className="box_23"/>
          <input type="checkbox" className="box_24"/>
          <input type="checkbox" className="box_25"/>
          <input type="checkbox" className="box_26"/>
          <input type="checkbox" className="box_27"/>
          <input type="checkbox" className="box_28"/>
          <input type="checkbox" className="box_29"/>
          <input type="checkbox" className="box_30"/>
          <input type="checkbox" className="box_31"/>
          <input type="checkbox" className="box_32"/>
          <input type="checkbox" className="box_33"/>
          <input type="checkbox" className="box_34"/>
          <input type="checkbox" className="box_35"/>
          <input type="checkbox" className="box_36"/>
          <input type="checkbox" className="box_37"/>
          <input type="checkbox" className="box_38"/>
          <input type="checkbox" className="box_39"/>
          <input type="checkbox" className="box_40"/>
          <input type="checkbox" className="box_41"/>

          <div className="radio_group">
            <label className="radio_group_container">
              <input type="radio" name="radio"/>
              <span className="checkmark"></span>
            </label>
            <label className="radio_group_container">
              <input type="radio" name="radio"/>
              <span className="checkmark"></span>
            </label>
            <label className="radio_group_container">
              <input type="radio" name="radio"/>
              <span className="checkmark"></span>
            </label>
          </div>

          <input className="lastName" type="text" value={lastName} onChange={(event)=>{setLastName(event.target.value)}}/>
          <input className="firstName" type="text" value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}/>
          <input className="suffix" type="text"/>
          <input className="nevadaIdNumber" type="text"/>
          <input className="socialSecurityNumber" type="text"/>
          <input className="fullLegalName" type="text"/>
          <input className="height_ft" type="text"/>
          <input className="height_in" type="text"/>
          <input className="weight" type="text"/>
          <input className="hair" type="text"/>
          <input className="eye" type="text"/>
          <input className="mothers_name" type="text"/>
          <input className="mailing_address" type="text"/>
          <input className="cityStateZip_2" type="text"/>
          <input className="email" type="text"/>
          <input className="phone_code" type="text"/>
          <input className="phone_number" type="text"/>
          <input className="middleName" type="text" value={middleName} onChange={(event)=>{setMiddleName(event.target.value)}}/>
          <input className="dateOfBirth" type="text" value={dateOfBirth} onChange={(event)=>{setDateOfBirth(event.target.value)}}/>
          <input className="street" type="text" value={street} onChange={(event)=>{setStreet(event.target.value)}}/>
          <input className="cityStateZip" type="text" value={cityStateZip} onChange={(event)=>{setCityStateZip(event.target.value)}}/>
          <input className="placeOfBirth" type="text" value={placeOfBirth} onChange={(event)=>{setPlaceOfBirth(event.target.value)}}/>  
        </div>
 
  );
}

export default ExampleFormPage1;