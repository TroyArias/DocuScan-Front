function ContractPage() {

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

            <input className="input4" type="text"/>
            <input className="input5" type="text"/>
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
    
        </div>
        
      </div>
    );
  }
  
  export default ContractPage;