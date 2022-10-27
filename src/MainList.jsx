import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { BsFileArrowDownFill, BsFileEarmarkFontFill, BsFillTrashFill} from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { Content } from './forPrint/content';
import ListOfForms from './components/listOfForms';
import FirstOwner from './components/fisrtOwnerInfo';
import SecondOwner from './components/secondOwnerInfo';
import VehicleInfo from './components/vehicleInfo';
import { Context } from "./context.jsx";
import moment from "moment";
import PropTypes from 'prop-types';

function MainList({setToken}) {

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
  const [date, setDate] = useState(moment().format('L'));
  const [cost1, setCost1] = useState('');
  const [cost2, setCost2] = useState("0.00");
  const [cost3, setCost3] = useState("0.00");
  const [cost4, setCost4] = useState("0.00");
  const [fee1, setFee1] = useState('');
  const [fee2, setFee2] = useState('');
  const [fee3, setFee3] = useState('');


  const logout = async () => {
    return await fetch(`http://67.205.156.196/auth/logout`, {
    method: 'POST',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
    .then(res => res.json())
    .then(data => {
      setToken(data.token)     
  })}

  const changeOwners = () => {
      setChecked(!checked)
  }

  const clearDocument = async () => {
    return await fetch(`http://67.205.156.196/document/clearDoc`, {
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
  }})}

  const getData = async () => {
    return await fetch(`http://67.205.156.196/document/getDoc`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }})
    .then(res => res.json())
    .then(data => {
      if(Object.keys(data).length !== 0){
        if(data.firstOwner.firstName !== undefined && data.firstOwner.lastName !== undefined){setName({...name, firstName: data.firstOwner.firstName, lastName: data.firstOwner.lastName, middleName: data.firstOwner.middleName})}
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

        if (data.certOfTitle.vehicleID !== undefined) {setVehicleID(data.certOfTitle.vehicleID)}
        setYear(data.certOfTitle.year);
        setMake(data.certOfTitle.make);
        setModel(data.certOfTitle.model);
        if (data.certOfTitle.weight !== undefined) {setWeight(data.certOfTitle.weight.replace(/^0+/, ''))}
        setBody(data.certOfTitle.vechBody);
        setFuel(data.certOfTitle.fuelType);

        if (data.regist.vehicleID !== undefined) {setVehicleID(data.regist.vehicleID)}
        setYear(data.regist.year);
        setMake(data.regist.make);
        setModel(data.regist.model);
        if (data.regist.weight !== undefined) {setWeight(data.regist.weight.replace(/^0+/, ''))}
        setBody(data.regist.vechBody);
        setFuel(data.regist.fuelType);
  }})}

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "forms",
  });

  const contextObj = {vehicleID, setVehicleID, year, setYear, make, setMake, model, setModel, weight, setWeight, regNumber, setRegNumber, 
    representative, setRepresentative, phone, setPhone, fuel, setFuel, body, setBody, businessName, setBusinessName, driverLicense1, setDriverLicense1,
    zip1, setZip1, setAddress1, address1, setCity1, city1, setState1, state1, lastName1, setLastName1, firstName1, setFirstName1,
    middleName1, setMiddleName1, zip2, setZip2, setAddress2, address2, setCity2, city2, setState2, state2, lastName2, date, setDate,
    zip3, setZip3, setAddress3, address3, setCity3, city3, setState3, state3, setLastName2, firstName2, setFirstName2, 
    middleName2, setMiddleName2, zip4, setZip4, setAddress4, address4, setCity4, city4, setState4, state4, driverLicense2, setDriverLicense2, 
    name, setName, arrValues, setArrValues, arrForms, setArrForms, cost1, setCost1, cost2, setCost2, cost3, setCost3, cost4, setCost4, fee1, setFee1, fee2, setFee2, fee3, setFee3}

  return (
    <Context.Provider value={contextObj}>
      <div className='formStyle'>
        
        <button className='btn' onClick={handlePrint} title="PRINT">
            <div><BsFileEarmarkFontFill/></div>
        </button>
      
        <button className='btn_2' onClick={() => getData()} title="GET DATA">
          <div><BsFileArrowDownFill/></div>
        </button>

        <button className='btn_3' onClick={() => clearDocument()} title="CLEAR SHEET">
          <div><BsFillTrashFill/></div>
        </button>

        <button className='btn_4' onClick={() => logout()} title="EXIT">
          <div><ImExit/></div>
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
      
      </div> 
    </Context.Provider>
  );
}

MainList.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default MainList;