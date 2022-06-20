import { VP185print } from '../forPrint/VP185';
import { useReactToPrint } from 'react-to-print';
import React, { useState, useCallback, useRef } from 'react';
import { AiOutlineDownload} from 'react-icons/ai';
import {useDropzone} from 'react-dropzone';
import Drag from "../dragDrop"
import { Context } from "../context.jsx";
import {TEXT_DELIMITER, delimeter, mapFor1Customer} from "../constants.jsx"

function VP185() {

  let user = {};

  const [name, setName] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [address1, setAddress1] = useState('');
  const [city1, setCity1] = useState('');
  const [state1, setState1] = useState('');
  const [zip1, setZip1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city2, setCity2] = useState('');
  const [state2, setState2] = useState('');
  const [zip2, setZip2] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (file) => {
 
        const text = file.target.result.split(TEXT_DELIMITER);

        user = delimeter(mapFor1Customer, text)
    
        user.middleName === undefined ? setName(user.firstName + ' ' + user.lastName) : setName(user.firstName + ' ' + user.middleName + ' ' + user.lastName)
        setAddress1(user.address)
        user.city2 === undefined ? setCity1(user.city) : setCity1(user.city + ' ' + user.city2)
        setState1(user.state)
        setZip1(user.zipCode)
        setAddress2(user.address)
        user.city2 === undefined ? setCity2(user.city) : setCity2(user.city + ' ' + user.city2)
        setState2(user.state)
        setZip2(user.zipCode)
        setDriverLicense(user.driverLicense)

      }
      reader.readAsText(file)
    })
    
  }, [])
  
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "VP222",
  });

  const contextObj = [name, setName, driverLicense,setDriverLicense, 
    setAddress1, address1, setCity1, city1, setState1, state1, setZip1, zip1,
    setAddress2, address2, setCity2, city2, setState2, state2, setZip2, zip2]

 
  return (
    <Context.Provider value={contextObj}>
      <div className='formStyle'>
        <Drag getRootProps={getRootProps} getInputProps={getInputProps}/>
        <VP185print ref={componentRef}/>
        <button className='btn' onClick={handlePrint}>
            <div><AiOutlineDownload/></div>
        </button>
      </div>
    </Context.Provider>
  );
}

export default VP185;