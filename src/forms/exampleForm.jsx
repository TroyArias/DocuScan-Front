import { Content } from '../forPrint/content';
import { useReactToPrint } from 'react-to-print';
import React, { useState, useCallback, useRef } from 'react';
import { AiOutlineDownload} from 'react-icons/ai';
import {useDropzone} from 'react-dropzone';
import Drag from "../dragDrop"
import { Context } from "../context.jsx";
import {TEXT_DELIMITER, delimeter, mapFor1Customer,} from "../constants.jsx"
import ExampleFormPage1 from '../formPages/Example/Form1';
import ExampleFormPage2 from '../formPages/Example/Form2';

function ExampleForm(props) {

  let user = {};

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [street, setStreet] = useState('');
  const [cityStateZip, setCityStateZip] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (file) => {
   
        const text = file.target.result.split(TEXT_DELIMITER);

        user = delimeter(mapFor1Customer, text)
  
        setLastName(user.lastName)
        setFirstName(user.firstName)
        setMiddleName(user.middleName)
        setDateOfBirth(user.dateOfBirth.slice(0,2) + '.' + user.dateOfBirth.slice(2,4) +'.'+ user.dateOfBirth.slice(4))
        setStreet(user.street)
        setCityStateZip(user.city + ' ' + user.state + ' ' + user.zipCode)
        setPlaceOfBirth(user.state + ' ' + user.placeOfBirth)

      }
      reader.readAsText(file)
    })
    
  }, [])
  
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "AwesomeFileName",
  });

  const contextObj = {lastName, setLastName, firstName, setFirstName, middleName, setMiddleName, 
    dateOfBirth, setDateOfBirth, street, setStreet, cityStateZip, setCityStateZip, placeOfBirth, setPlaceOfBirth}

 
  return (
    <Context.Provider value={contextObj}>
      <div className='formStyle'>
        <Drag getRootProps={getRootProps} getInputProps={getInputProps}/>
        <Content ref={componentRef} pages={[ExampleFormPage1, ExampleFormPage2]}/>
        <button className='btn' onClick={handlePrint}>
            <div><AiOutlineDownload/></div>
        </button>
      </div>
    </Context.Provider>
  );
}

export default ExampleForm;
