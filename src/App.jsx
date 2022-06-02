import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form1 from "./Form1";
import FormsList from "./FormsList";
import Navbar from "./Navbar";

export default function App () {

    return (
        <BrowserRouter>  
        <Navbar/>  
            <Routes>
                <Route exact path='/' element={<FormsList/>}/> 
                <Route exact path='/form1' element={<Form1/>}/>
            </Routes>                
        </BrowserRouter>
    );
    
}

