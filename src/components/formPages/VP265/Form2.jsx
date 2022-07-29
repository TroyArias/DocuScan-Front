import React, { useContext } from "react";
import { Context } from "../../../context";


function VP265Page2() {

  const {
    zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, state1, name,
    cost1, setCost1, cost2, setCost2, cost3, setCost3, cost4, setCost4} = useContext(Context);


    function customSetCost1(value){
      setCost1(+value);
      let summ = (+value * 20)
      setCost2(summ + ".00")
      setCost4(summ + ".00")
    }

    function customSetCost2(value){
      setCost3(+value);
      let summ = (+value + +cost2)
      setCost4(summ + ".00")
    }


  return (
    <div className="vp265_2">
      
      <input className="name" type="text" value={name.middleName === undefined ? name.firstName + " " + name.lastName : name.firstName + " " + name.middleName + " " + name.lastName} />
      <input className="address1" type="text" value={address1} onChange={(event)=>{setAddress1(event.target.value)}}/>
      <input className="city1" type="text" value={city1} onChange={(event)=>{setCity1(event.target.value)}}/>
      <input className="state1" type="text" value={state1} onChange={(event)=>{setState1(event.target.value)}}/>
      <input className="zip1" type="text" value={zip1} onChange={(event)=>{setZip1(event.target.value)}}/>
    

      <input className="input1" type="text"/>
      <input className="input2" type="text"/>
      <input className="input3" type="text"/>
      <input className="input3" type="text"/>
      <input className="input4" type="text" value={cost1} onChange={(event)=>{customSetCost1(event.target.value)}}/>
      <input className="input5" type="text" value={cost2} />
      <input className="input6" type="text"/>
      <input className="input7" type="text" value={cost2}/>
      <input className="input8" type="text" value={cost3} onChange={(event)=>{customSetCost2(event.target.value)}}/>
      <input className="input9" type="text" value={cost4}/>
      <input className="input10" type="text"/>
      <input className="input11" type="text"/>
      <input className="input12" type="text"/>
      <input className="input13" type="text"/>
      <input className="input14" type="text"/>

      <label className="custom-checkbox custom-checkbox2651">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox2652">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox2653">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox2654">
        <input type="checkbox"/><span></span>
      </label>

      <label className="custom-checkbox custom-checkbox2655">
        <input type="checkbox"/><span></span>
      </label>
    </div>
  );
}

export default VP265Page2;