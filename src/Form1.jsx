import { Content } from './content';
import { useReactToPrint } from 'react-to-print';
import { useState, useCallback, useRef } from 'react';
import {useDropzone} from 'react-dropzone';
import Drag from "./drag&drop"

function Form1(props) {

  const TEXT_DELIMITER = '\n';
  const FIELDS_DELIMITER = ',';
  const WHITESPACE_DELIMITER = ' ';
  const user = {};

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

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = (file) => {

        const requiredFields = new Map([
          ['DCS', 'lastName'],
          ['DCT', 'firstName,middleName'],
          ['DBB', 'dateOfBirth'],
          ['DAG', 'street'],
          ['DAI', 'city'],
          ['DAJ', 'state'],
          ['DAK', 'zipCode'],
          ['DCG', 'placeOfBirth']
        ])
        
        const text = file.target.result.split(TEXT_DELIMITER);
        
        requiredFields.forEach((value, key) => {
          text.forEach(e => {
            if(e.startsWith(key)) {
  
              const textValue = e.replace(key, '').replace(' \r', '').trim();
              if(value.includes(FIELDS_DELIMITER)){
                const fields = value.split(FIELDS_DELIMITER);
                const values = textValue.split(WHITESPACE_DELIMITER);
  
                fields.forEach((field, i) => {
                  user[field] = values[i];
                })
  
              } else {
                user[value] = textValue;
              }
            }
          })
        });
  
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
 
  return (
    <div className='formStyle'>
      <Drag getRootProps={getRootProps} getInputProps={getInputProps}/>
      <Content ref={componentRef} lastName={lastName} firstName={firstName} middleName={middleName} dateOfBirth={dateOfBirth} street={street} cityStateZip={cityStateZip} placeOfBirth={placeOfBirth}
      setLastName={setLastName} setFirstName={setFirstName} setMiddleName={setMiddleName} setDateOfBirth={setDateOfBirth} setStreet={setStreet} setCityStateZip={setCityStateZip} setPlaceOfBirth={setPlaceOfBirth}/>
      <button className='btn' onClick={handlePrint}>PRINT FORM</button>
    </div>
  );
}

export default Form1;
