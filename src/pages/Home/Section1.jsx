import React from 'react';
import { Header } from '../../components/Header';
import { useSelector } from 'react-redux';


export const Section1 =()=>{
    const state1=useSelector((state)=>
    {
        return state.reducer1.refreshToken
    }
    );
    const jwt = useSelector((state)=>{
        return state.reducer1.JWTToken;
    });
    const name = useSelector((state)=>{
        return state.reducer1.first_name;
    });
    const status = document.cookie.includes('refreshToken');
    return(
        <>
    <Header/>
        {<h1>Welcome to {name} for visiting the MandA</h1>}
        {<h1>your store cookie here:{status?state1:' Expired'}</h1>}
        {<h1>your JWT Token here:{status?jwt:'JWT Expired'}</h1>}

       

        </>
    )
}