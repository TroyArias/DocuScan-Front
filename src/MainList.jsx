import React, { useState, useCallback, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {useDropzone} from 'react-dropzone';
import { BsFileEarmarkFontFill} from 'react-icons/bs';
import { BsFileArrowDownFill } from "react-icons/bs";
import Drag from "./components/dragDrop"
import {TEXT_DELIMITER, mapFor1Customer, mapFor2Customer} from "./constants.jsx"
import {delimeter} from "./functions"
import { Content } from './forPrint/content';
import ListOfForms from './components/listOfForms';
import FirstOwner from './components/fisrtOwnerInfo';
import SecondOwner from './components/secondOwnerInfo';
import VehicleInfo from './components/vehicleInfo';
import { Context } from "./context.jsx";

function MainList() {

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
  const [checked, setChecked] = useState(true);
  const [cost1, setCost1] = useState('');
  const [cost2, setCost2] = useState("0.00");
  const [cost3, setCost3] = useState("0.00");
  const [cost4, setCost4] = useState("0.00");

  const onDrop = useCallback((acceptedFiles) => {

    let numCallbackRuns = 1

    acceptedFiles.forEach((file) => {

      const reader = new FileReader()
      reader.onload = (file) => {

        if (numCallbackRuns === 1){

          const text = file.target.result.split(TEXT_DELIMITER)

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

          const text = file.target.result.split(TEXT_DELIMITER)

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
      setChecked(!checked)
  }

  const getData = async () => {
    return await fetch(`http://67.205.156.196/document/getDoc`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.certOfTitle.vehicleID)
      setLastName1(data.firstOwner.lastName)
      setFirstName1(data.firstOwner.firstName)
      setMiddleName1(data.firstOwner.middleName)
      setAddress1(data.firstOwner.address)
      data.firstOwner.city2 === undefined ? setCity1(data.firstOwner.city) : setCity1(data.firstOwner.city + ' ' + data.firstOwner.city2)
      setState1(data.firstOwner.state)
      setZip1(data.firstOwner.zipCode)
      setAddress2(data.firstOwner.address)
      data.firstOwner.city2 === undefined ? setCity2(data.firstOwner.city) : setCity2(data.firstOwner.city + ' ' + data.firstOwner.city2)
      setState2(data.firstOwner.state)
      setZip2(data.firstOwner.zipCode)
      setDriverLicense1(data.firstOwner.driverLicense)
      if (data.certOfTitle.vehicleID !== undefined) {setVehicleID(data.certOfTitle.vehicleID)}
      setYear(data.certOfTitle.year);
      setMake(data.certOfTitle.make);
      setModel(data.certOfTitle.model);
      setBody(data.certOfTitle.vechBody);
      setFuel(data.certOfTitle.fuelType);
      setLastName2(data.secondOwner.lastName2)
      setFirstName2(data.secondOwner.firstName2)
      setMiddleName2(data.secondOwner.middleName2)
      setAddress3(data.secondOwner.address2)
      data.secondOwner.city4 === undefined ? setCity3(data.secondOwner.city3) : setCity3(data.secondOwner.city3 + ' ' + data.secondOwner.city4)
      setState3(data.secondOwner.state2)
      setZip3(data.secondOwner.zipCode2)
      setAddress4(data.secondOwner.address2)
      data.secondOwner.city4 === undefined ? setCity4(data.secondOwner.city3) : setCity4(data.secondOwner.city3 + ' ' + data.secondOwner.city4)
      setState4(data.secondOwner.state2)
      setZip4(data.secondOwner.zipCode2)
      setDriverLicense2(data.secondOwner.driverLicense2)
    }
    );
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
    name, setName, arrValues, setArrValues, arrForms, setArrForms, cost1, setCost1, cost2, setCost2, cost3, setCost3, cost4, setCost4}

  return (
    <Context.Provider value={contextObj}>
      <div className='formStyle'>
        <Drag getRootProps={getRootProps} getInputProps={getInputProps}/>
        <button className='btn' onClick={handlePrint}>
            <div><BsFileEarmarkFontFill/></div>
        </button>
      </div>

      <button className='btn_2' onClick={() => getData()}>
        <div><BsFileArrowDownFill /></div>
      </button>

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
          {checked === false ? <><FirstOwner/><div className="margin"></div><SecondOwner/></> : <FirstOwner/>}
         
        </div>
      </div>

      <div className='formStyle'>
        <Content ref={componentRef} pages={arrForms}/>
      </div>
      
    </Context.Provider>
  );
}

export default MainList;