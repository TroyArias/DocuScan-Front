import React, { useState, useCallback, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {useDropzone} from 'react-dropzone';
import { AiOutlineDownload} from 'react-icons/ai';
import Drag from "./dragDrop"
import {TEXT_DELIMITER, delimeter, mapFor1Customer, mapFor2Customer} from "./constants.jsx"
import { Content } from './forPrint/content';
import ListOfForms from './listOfForms';
import FirstOwner from './1owner';
import SecondOwner from './2owner';
import VehicleInfo from './vehicleInfo';
import { Context } from "./context.jsx";

function FormsList() {

  let user = {};

  const [businessName, setBusinessName] = useState('ARIAS LLC')
  const [regNumber, setRegNumber] = useState('RS90')
  const [representative, setRepresentative] = useState('T.ARIAS, F.ARIAS, J.GLENN, B.OCHOA')
  const [phone, setPhone] = useState('702-315-4402')
  const [vehicleID, setVehicleID] = useState('');
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
  const [name, setName] = useState({firstName: '', middleName: '', lastName: ''});
  const [variant, setVariant] = useState('');
  const [checked, setChecked] = useState(true);

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
      if(user.firstName !== undefined && user.lastName !== undefined){setName({...name, firstName: user.firstName, lastName: user.lastName, middleName: user.middleName})}
      if (user.weight !== undefined) {setWeight(user.weight.replace(/^0+/, ''))}

      numCallbackRuns++

      }
      reader.readAsText(file)
      
    })
    
  }, [])

  function changeOwners(e) {

    if (e.target.value === '1'){
      setVariant("1")
      setChecked(!checked);
    } else { 
     setVariant("2")
     setChecked(!checked);
    }
  
  }

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "forms",
  });

  const contextObj = {vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, weight, setWeight, regNumber, setRegNumber, 
    representative, setRepresentative, phone, setPhone, fuel, setFuel, body, setBody, businessName, setBusinessName, driverLicense1, setDriverLicense1,
    zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, state1, lastName1, setLastName1, firstName1, setFirstName1,
    middleName1, setMiddleName1, zip2, setZip2, setAddress2, address2, setCity2, city2, setState2, state2, lastName2, 
    zip3, setZip3, setAddress3, address3, setCity3, city3, setState3, state3, setLastName2, firstName2, setFirstName2, 
    middleName2, setMiddleName2, zip4, setZip4, setAddress4, address4, setCity4, city4, setState4, state4, driverLicense2, setDriverLicense2, 
    name, setName, arrValues, setArrValues, arrForms, setArrForms}


  return (
    <Context.Provider value={contextObj}>
      <div className='formStyle'>
        <Drag getRootProps={getRootProps} getInputProps={getInputProps}/>
        <button className='btn' onClick={handlePrint}>
            <div><AiOutlineDownload/></div>
        </button>
      </div>

      <div className="menu">

        <ListOfForms/>

        <div className="infoList">
          <h4>Vehicle information</h4>
          
          <VehicleInfo/>

          <h4>Owner information</h4>

          <div className ="ownerRadio">
            <div className ="ownerList">
              <input type="radio" id="html" value="1" name="owners" onChange={changeOwners} defaultChecked={checked}/>
              <label htmlFor="html">1 owner</label>
            </div>
              
            <div className ="ownerList">
              <input type="radio" id="2owner" value="2" name="owners" onChange={changeOwners}/>
              <label htmlFor="2owner">2 owners</label>
            </div>
          </div>
          {variant == 2? <><FirstOwner/><div className="margin"></div><SecondOwner/></> : <FirstOwner/>}
         
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