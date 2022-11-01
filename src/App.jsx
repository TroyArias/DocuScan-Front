import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import MainList from "./MainList";
import AuthUser from "./AuthUser";
import Navbar from "./components/navbar";
import useToken from './useToken';

export default function App () {

    const { token, setToken } = useToken();

    if(!token) {
        return <AuthUser setToken={setToken} />
    }

    return (
        <BrowserRouter>  
        <Navbar/>  
            <Routes>
                <Route exact path='/' element={<MainList setToken={setToken} token={token}/>}/>
            </Routes>                
        </BrowserRouter>
    );    
}

