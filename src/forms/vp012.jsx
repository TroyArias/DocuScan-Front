import { useReactToPrint } from 'react-to-print';
import React, { useState, useCallback, useRef } from 'react';
import { AiOutlineDownload} from 'react-icons/ai';
import {useDropzone} from 'react-dropzone';
import Drag from "../dragDrop"
import { Context } from "../context.jsx";
import {TEXT_DELIMITER, delimeter, mapFor1Customer, mapFor2Customer} from "../constants.jsx"
import VP012Page1 from '../formPages/VP012/Form1';
import VP012Page2 from '../formPages/VP012/Form2';
import { Content } from '../forPrint/content';

function VP012() {

  let user = {};

  const [vehicleID, setVehicleID] = useState([]);
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
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
        
      if (user.vehicleID !== undefined) {setVehicleID(user.vehicleID.split(''))}
      setYear(user.year)
      setMake(user.make)
      setModel(user.model)

      numCallbackRuns++

      }
      reader.readAsText(file)
      
    })
    
  }, [])
  
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "VP012",
  });

  const contextObj = {vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, driverLicense1, setDriverLicense1,
    zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, state1, lastName1, setLastName1, firstName1, setFirstName1,
    middleName1, setMiddleName1, zip2, setZip2, setAddress2, address2, setCity2, city2, setState2, state2, lastName2, 
    zip3, setZip3, setAddress3, address3, setCity3, city3, setState3, state3, setLastName2, firstName2, setFirstName2, 
    middleName2, setMiddleName2, zip4, setZip4, setAddress4, address4, setCity4, city4, setState4, state4, driverLicense2, setDriverLicense2}

 
  return (
    <Context.Provider value={contextObj}>
      <div className='formStyle'>
        <Drag getRootProps={getRootProps} getInputProps={getInputProps}/>
        <Content ref={componentRef} pages={[VP012Page1, VP012Page2]}/>
        <button className='btn' onClick={handlePrint}>
            <div><AiOutlineDownload/></div>
        </button>
      </div>
    </Context.Provider>
  );
}

export default VP012;