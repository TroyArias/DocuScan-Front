import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import moment from "moment"

function ContractPage() {

    const {name} = useContext(Context);
    const [area, setArea] = useState('NV20151689040');
    const [area2, setArea2] = useState('11/30/22');
    const [area3, setArea3] = useState('BL107980');
    const [area4, setArea4] = useState('07/31/2022');
    const [area5, setArea5] = useState('NV5127185');
    const [area6, setArea6] = useState('$50,000.00');
    const [date, setDate] = useState(moment().format('L'));

    useEffect(()=>{
        let area = localStorage.getItem('area')
        let area2 = localStorage.getItem('area2')
        let area3 = localStorage.getItem('area3')
        let area4 = localStorage.getItem('area4')
        let area5 = localStorage.getItem('area5')
        let area6 = localStorage.getItem('area6')

        setArea(area)
        setArea2(area2)
        setArea3(area3)
        setArea4(area4)
        setArea5(area5)
        setArea6(area6)
    }, [])

    function saveArea(value) {
        localStorage.setItem('area', value)
        setArea(value)
    }

    function saveArea2(value) {
        localStorage.setItem('area2', value)
        setArea2(value)
    }

    function saveArea3(value) {
        localStorage.setItem('area3', value)
        setArea3(value)
    }

    function saveArea4(value) {
        localStorage.setItem('area4', value)
        setArea4(value)
    }

    function saveArea5(value) {
        localStorage.setItem('area5', value)
        setArea5(value)
    }

    function saveArea6(value) {
        localStorage.setItem('area6', value)
        setArea6(value)
    }

    return (
      <div className="App">
          
        <div className="contractPage">

            <input className="dropdown1" list="1dropdown" />
            <datalist id="1dropdown">
                <option value="---n/a---"/>
                <option value="Title"/>
                <option value="Title + Registration"/>
                <option value="Registration"/>
                <option value="Renewals"/>
                <option value="Cancel Plates"/>
                <option value="Moving Permit"/>
                <option value="Change of Address"/>
                <option value="Reinstatement"/>
                <option value="Birth Certificate Translation"/>
                <option value="Attempt to Contact"/>
                <option value="Disabled Placards"/>
                <option value="Duplicate Registration"/>
                <option value="Substitute Registration"/>
            </datalist>

            <input className="dropdown2" list="2dropdown" />
            <datalist id="2dropdown">
                <option value="---n/a---"/>
                <option value="Title"/>
                <option value="Title + Registration"/>
                <option value="Registration"/>
                <option value="Renewals"/>
                <option value="Cancel Plates"/>
                <option value="Moving Permit"/>
                <option value="Change of Address"/>
                <option value="Reinstatement"/>
                <option value="Birth Certificate Translation"/>
                <option value="Attempt to Contact"/>
                <option value="Disabled Placards"/>
                <option value="Duplicate Registration"/>
                <option value="Substitute Registration"/>
            </datalist>

            <input className="dropdown3" list="3dropdown" />
            <datalist id="3dropdown">
                <option value="---n/a---"/>
                <option value="Title"/>
                <option value="Title + Registration"/>
                <option value="Registration"/>
                <option value="Renewals"/>
                <option value="Cancel Plates"/>
                <option value="Moving Permit"/>
                <option value="Change of Address"/>
                <option value="Reinstatement"/>
                <option value="Birth Certificate Translation"/>
                <option value="Attempt to Contact"/>
                <option value="Disabled Placards"/>
                <option value="Duplicate Registration"/>
                <option value="Substitute Registration"/>
            </datalist>

            <input className="input1" type="text"/>
            <input className="input2" type="text"/>
            <input className="input3" type="text"/>

            <input className="dropdown4" list="4dropdown" />
            <datalist id="4dropdown">
                <option value="1-2 Weeks"/>
                <option value="1-2 Days"/>
                <option value="5 Days"/>
                <option value="2 Months"/>
            </datalist>

            <input className="input5" type="text" value={date} onChange={(event)=>{setDate(event.target.value)}}/>
            <input className="input4" type="text" value={name.middleName === undefined ? name.firstName + " " + name.lastName : name.firstName + " " + name.middleName + " " + name.lastName} />
            <input className="input6" type="text"/>
            <input className="input7" type="text"/>
            
            <input className="dropdown5" list="5dropdown" placeholder="Select A Rep"/>
            <datalist id="5dropdown">
                <option value="Francisco Arias NVDP2014515174"/>
                <option value="Troy U Arias NVDP20145172"/>
                <option value="Jonathan Rosas NVDP2015326546"/>
                <option value="Angel D Rosas NVDP2021834988"/>
                <option value="Blanca Y Ochoa NVDP2021854993"/>
                <option value="Jessica Glenn NVPD2014515171"/>
                <option value="Carmen Arias NVDP20188202809"/>
            </datalist>

            <input className="input8" type="text" placeholder={area} onChange={(event)=>{saveArea(event.target.value)}} value={area}/>
            <input className="input9" type="text" placeholder={area2} onChange={(event)=>{saveArea2(event.target.value)}} value={area2}/>
            <input className="input10" type="text" placeholder={area3} onChange={(event)=>{saveArea3(event.target.value)}} value={area3}/>
            <input className="input11" type="text" placeholder={area4} onChange={(event)=>{saveArea4(event.target.value)}} value={area4}/>
            <input className="input12" type="text" placeholder={area5} onChange={(event)=>{saveArea5(event.target.value)}} value={area5}/>
            <input className="input13" type="text" placeholder={area6} onChange={(event)=>{saveArea6(event.target.value)}} value={area6}/>
    
        </div>
        
      </div>
    );
  }
  
  export default ContractPage;