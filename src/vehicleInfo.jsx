import React, { useContext } from "react";
import { Context } from "./context";


function VihicleInfo() {

    const {vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, weight, setWeight, fuel, setFuel, body, setBody} = useContext(Context);

return (
    <>
    
        {typeof vehicleID === "object" ? 
          <div className="vehicleInformation">
            <p>VIN</p><input className="vehicleID" type="text" value={vehicleID.join('')} onChange={(event)=>{setVehicleID(event.target.value)}}/>
          </div> 
          : 
          <div className="vehicleInformation">
            <p>VIN</p><input className="vehicleID" type="text" value={vehicleID} onChange={(event)=>{setVehicleID(event.target.value)}}/>
          </div>}
        

          <div className="vehicleInformation">
            <p>Year</p><input className="year" type="text" value={year} onChange={(event)=>{setYear(event.target.value)}}/>
          </div>

          <div className="vehicleInformation">
            <p>Body type</p><input className="bodyType" type="text" value={body} onChange={(event)=>{setBody(event.target.value)}}/>
          </div>

          <div className="vehicleInformation">
            <p>Model</p><input className="model" type="text" value={model} onChange={(event)=>{setModel(event.target.value)}}/>
          </div>

          <div className="vehicleInformation">
            <p>Make</p><input className="make" type="text" value={make} onChange={(event)=>{setMake(event.target.value)}}/>
          </div>

          <div className="vehicleInformation">
            <p>Fuel</p><input className="fuel" type="text" value={fuel} onChange={(event)=>{setFuel(event.target.value)}}/>
          </div>

          <div className="vehicleInformation">
            <p>Gross Wt</p><input className="weight" type="text" value={weight} onChange={(event)=>{setWeight(event.target.value)}}/>
          </div>
    </>

);
}

export default VihicleInfo;