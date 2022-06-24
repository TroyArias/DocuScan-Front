import { Link } from "react-router-dom";
import React, { useState, useCallback, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {useDropzone} from 'react-dropzone';
import { AiOutlineDownload} from 'react-icons/ai';
import Drag from "./dragDrop"
import {TEXT_DELIMITER, delimeter, mapFor1Customer, mapFor2Customer} from "./constants.jsx"
import { Content } from './forPrint/content';
import ExampleFormPage1 from './formPages/Example/Form1';
import ExampleFormPage2 from './formPages/Example/Form2';
import VP012Page1 from './formPages/VP012/Form1';
import VP012Page2 from './formPages/VP012/Form2';
import VP019Page from './formPages/VP019/Form1';
import VP185Page from './formPages/VP185/Form1';
import VP247Page from './formPages/VP247/Form1';
import VP222Page from './formPages/VP222/Form1';
import { Context } from "./context.jsx";

function FormsList() {

  let user = {};

  const [businessName, setBusinessName] = useState('ARIAS LLC')
  const [regNumber, setRegNumber] = useState('RS90')
  const [representative, setRepresentative] = useState('T.ARIAS, F.ARIAS, J.GLENN, B.OCHOA')
  const [phone, setPhone] = useState('702-315-4402')
  const [vehicleID, setVehicleID] = useState([]);
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [weight, setWeight] = useState('');
  const [fuel, setFuel] = useState('');
  const [body, setBody] = useState('');
  const [firstName1, setFirstName1] = useState('');
  const [lastName1, setLastName1] = useState('');
  const [middleName1, setMiddleName1] = useState('');
  const [driverLicense1, setDriverLicense1] = useState('');
  const [address1, setAddress1] = useState('');
  const [city1, setCity1] = useState('');
  const [state1, setState1] = useState('');
  const [zip1, setZip1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city2, setCity2] = useState('');
  const [state2, setState2] = useState('');
  const [zip2, setZip2] = useState('');
  const [firstName2, setFirstName2] = useState('');
  const [lastName2, setLastName2] = useState('');
  const [middleName2, setMiddleName2] = useState('');
  const [driverLicense2, setDriverLicense2] = useState('');
  const [address3, setAddress3] = useState('');
  const [city3, setCity3] = useState('');
  const [state3, setState3] = useState('');
  const [zip3, setZip3] = useState('');
  const [address4, setAddress4] = useState('');
  const [city4, setCity4] = useState('');
  const [state4, setState4] = useState('');
  const [zip4, setZip4] = useState('');
  const [arrValues, setArrValues] = useState([]);
  const [arrForms, setArrForms] = useState([]);
  const [name, setName] = useState('');

  const onDrop = useCallback((acceptedFiles) => {

    let numCallbackRuns = 1

    acceptedFiles.forEach((file) => {

      const reader = new FileReader()
      reader.onload = (file) => {

        if (numCallbackRuns === 1){

          const text = file.target.result.split(TEXT_DELIMITER);

          user = delimeter(mapFor1Customer, text)

          setLastName1(user.lastName)
          setFirstName1(user.firstName)
          setMiddleName1(user.middleName)
          setAddress1(user.address)
          user.city2 === undefined ? setCity1(user.city) : setCity1(user.city + ' ' + user.city2)
          setState1(user.state)
          setZip1(user.zipCode)
          setAddress2(user.address)
          user.city2 === undefined ? setCity2(user.city) : setCity2(user.city + ' ' + user.city2)
          setState2(user.state)
          setZip2(user.zipCode)
          setDriverLicense1(user.driverLicense)
           
        } else {

          const text = file.target.result.split(TEXT_DELIMITER);

          user = delimeter(mapFor2Customer, text)

          setLastName2(user.lastName2)
          setFirstName2(user.firstName2)
          setMiddleName2(user.middleName2)
          setAddress3(user.address2)
          user.city4 === undefined ? setCity3(user.city3) : setCity3(user.city3 + ' ' + user.city4)
          setState3(user.state2)
          setZip3(user.zipCode2)
          setAddress4(user.address2)
          user.city4 === undefined ? setCity4(user.city3) : setCity4(user.city3 + ' ' + user.city4)
          setState4(user.state2)
          setZip4(user.zipCode2)
          setDriverLicense2(user.driverLicense2)
          
        }
        
      if (user.vehicleID !== undefined) {setVehicleID(user.vehicleID)}
      setYear(user.year)
      setMake(user.make)
      setModel(user.model)
      setBody(user.vechBody)
      setFuel(user.fuelType)
      user.middleName === undefined ? setName(user.firstName + ' ' + user.lastName) : setName(user.firstName + ' ' + user.middleName + ' ' + user.lastName)
      if (user.weight !== undefined) {setWeight(user.weight.replace(/^0+/, ''))}

      numCallbackRuns++

      }
      reader.readAsText(file)
      
    })
    
  }, [])

  

  function checkValue(e) {

    let value = e.target.value;

    if (value === 'ExampleFormPage'){

      if (!arrValues.includes(value)) {
        setArrForms([...arrForms, ExampleFormPage1, ExampleFormPage2]);
        setArrValues([...arrValues, value]);
      } else {
        setArrForms(arrForms.filter(function(f) { return (f !== ExampleFormPage1 && f !== ExampleFormPage2)}))
        setArrValues(arrValues.filter(function(f) { return f !== value }));
      }
    }
    
    if (value === 'VP247Page'){

      if (!arrValues.includes(value)) {
        setArrForms([...arrForms, VP247Page]);
        setArrValues([...arrValues, value]);
      } else {
        setArrForms(arrForms.filter(function(f) { return f !== VP247Page}))
        setArrValues(arrValues.filter(function(f) { return f !== value }));
      }
    }

    if (value === 'VP222Page'){

      if (!arrValues.includes(value)) {
        setArrForms([...arrForms, VP222Page]);
        setArrValues([...arrValues, value]);
      } else {
        setArrForms(arrForms.filter(function(f) { return f !== VP222Page}))
        setArrValues(arrValues.filter(function(f) { return f !== value }));
      }
    }

    if (value === 'VP019Page'){

      if (!arrValues.includes(value)) {
        setArrForms([...arrForms, VP019Page]);
        setArrValues([...arrValues, value]);
      } else {
        setArrForms(arrForms.filter(function(f) { return f !== VP019Page}))
        setArrValues(arrValues.filter(function(f) { return f !== value }));
      }
    }

    if (value === 'VP185Page'){

      if (!arrValues.includes(value)) {
        setArrForms([...arrForms, VP185Page]);
        setArrValues([...arrValues, value]);
      } else {
        setArrForms(arrForms.filter(function(f) { return f !== VP185Page}))
        setArrValues(arrValues.filter(function(f) { return f !== value }));
      }
    }

    if (value === 'VP012Page'){

      if (!arrValues.includes(value)) {
        setArrForms([...arrForms, VP012Page1, VP012Page2]);
        setArrValues([...arrValues, value]);
      } else {
        setArrForms(arrForms.filter(function(f) { return (f !== VP012Page1 && f!== VP012Page2)}))
        setArrValues(arrValues.filter(function(f) { return f !== value }));
      }
    }
  
  }

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "VP247",
  });

  const contextObj = {vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, weight, setWeight, regNumber, setRegNumber, 
    representative, setRepresentative, phone, setPhone, fuel, setFuel, body, setBody, businessName, setBusinessName, driverLicense1, setDriverLicense1,
    zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, state1, lastName1, setLastName1, firstName1, setFirstName1,
    middleName1, setMiddleName1, zip2, setZip2, setAddress2, address2, setCity2, city2, setState2, state2, lastName2, 
    zip3, setZip3, setAddress3, address3, setCity3, city3, setState3, state3, setLastName2, firstName2, setFirstName2, 
    middleName2, setMiddleName2, zip4, setZip4, setAddress4, address4, setCity4, city4, setState4, state4, driverLicense2, setDriverLicense2, name, setName,}


  return (
    <Context.Provider value={contextObj}>
      <div className='formStyle'>
        <Drag getRootProps={getRootProps} getInputProps={getInputProps}/>
        <button className='btn' onClick={handlePrint}>
            <div><AiOutlineDownload/></div>
        </button>
      </div>

      <div className="menu">

        <div className="formsList">
      
          <h3>List of forms</h3>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox2">
              <input onChange={checkValue} type="checkbox" value="VP247Page" /><span></span>
            </label>
            <div className="listLinks"><Link to = "/vp247">Registration Service Transaction Request VP247</Link></div>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox3">
              <input onChange={checkValue} type="checkbox" value="VP222Page" /><span></span>
            </label>
            <div className="listLinks"><Link to = "/vp222">Application for Vehicle Registration VP222</Link></div>
          </div>

          <h3>Ownership Forms</h3>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox4">
              <input onChange={checkValue} type="checkbox" value="VP019Page" /><span></span>
            </label>
            <div className="listLinks"><Link to = "/vp019">Erasure Affidavit VP019</Link></div>
          </div>

          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox5">
              <input onChange={checkValue} type="checkbox" value="VP185Page" /><span></span>
            </label>
            <div className="listLinks"><Link to = "/vp185">One and the Same Affidavit VP185</Link></div>
          </div>


          <div className="formsListContainer">
            <label className="customCheckbox customCheckbox6">
              <input onChange={checkValue} type="checkbox" value="VP012Page" /><span></span>
            </label>
            <div className="listLinks"><Link to = "/vp012">Application for Duplicate Nevada Certificate of Title VP012</Link></div>
          </div>

        </div>


        <div className="infoList">
          <h4>Vehicle information</h4>

          <div className="vehicleInformation">
            <p>VIN</p><input className="vehicleID" type="text" value={vehicleID} onChange={(event)=>{setVehicleID(event.target.value)}}/>
          </div>

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


          <h4>Owner information</h4>

          <div className="ownersInformation">
            <p>First name</p><input className="firstName1" type="text" value={firstName1} onChange={(event)=>{setFirstName1(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>Middle name</p><input className="middleName1" type="text" value={middleName1} onChange={(event)=>{setMiddleName1(event.target.value)}}/>
          </div>

          <div className="ownersInformation">
            <p>Last name</p><input className="lastName1" type="text" value={lastName1} onChange={(event)=>{setLastName1(event.target.value)}}/>
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


          <div className="margin"></div>


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

        </div>


      </div>

      <div className='formStyle'>
        <Content ref={componentRef} pages={arrForms}/>
      </div>

          
          {/* <div><Link to = "/example">Bill of Sale VP104</Link></div>
          <div><Link to = "/example">Application for Expedited Processing/Shipping of Nevada Title VP265</Link></div>
          <div><Link to = "/example">Power of Attorney VP136</Link></div>
          <div><Link to = "/example">Lost, Stolen or Mutilated License Plate Affidavit VP202</Link></div>
          <div><Link to = "/example">Affidavit of Non-Operation VP018</Link></div>
          <div><Link to = "/example">Application for Duplicate Registration Certificate VP013</Link></div>
          <div><Link to = "/example">Emission Control Exemption Application EC008</Link></div>
          <div><Link to = "/example">Change of Address Notification by Mail DMV22</Link></div>
          <div><Link to = "/example">Declaration of Responsibility NLV019</Link></div>
          <div><Link to = "/example">Application sp66 – Personalized Plate</Link></div>
          <div><Link to = "/example">Application sp45 – Circa 1982 Replicate Plate</Link></div>
          <div><Link to = "/example">Application sp33 – Veterans</Link></div>
          <div><Link to = "/example">Application sp34 – Classic Vehicle</Link></div>
          <div><Link to = "/example">Application sp20 – Classic Rod</Link></div>
          <div><Link to = "/example">Odometer Certificate for Emissions Exemption Form EC018</Link></div>  */}
      
    </Context.Provider>
  );
}

export default FormsList;