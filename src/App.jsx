import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ExampleForm from "./forms/exampleForm";
import VP222 from "./forms/vp222";
import VP247 from "./forms/vp247";
import VP019 from "./forms/vp019";
import VP185 from "./forms/vp185";
import VP012 from "./forms/vp012";
import FormsList from "./FormsList";
import Navbar from "./Navbar";

export default function App () {

    return (
        <BrowserRouter>  
        <Navbar/>  
            <Routes>
                <Route exact path='/' element={<FormsList/>}/> 
                <Route exact path='/example' element={<ExampleForm/>}/>
                <Route exact path='/vp222' element={<VP222/>}/>
                <Route exact path='/vp247' element={<VP247/>}/>
                <Route exact path='/vp019' element={<VP019/>}/>
                <Route exact path='/vp185' element={<VP185/>}/>
                <Route exact path='/vp012' element={<VP012/>}/>
            </Routes>                
        </BrowserRouter>
    );
    
}

