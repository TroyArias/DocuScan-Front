import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FormsList from "./FormsList";
import Navbar from "./Navbar";

export default function App () {

    return (
        <BrowserRouter>  
        <Navbar/>  
            <Routes>
                <Route exact path='/' element={<FormsList/>}/>
            </Routes>                
        </BrowserRouter>
    );
    
}

