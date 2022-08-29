import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainList from "./MainList";
import Navbar from "./components/navbar";

export default function App () {

    return (
        <BrowserRouter>  
        <Navbar/>  
            <Routes>
                <Route exact path='/' element={<MainList/>}/>
            </Routes>                
        </BrowserRouter>
    );    
}

