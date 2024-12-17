import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "../assets/styles/Header.module.css";
import { IsRefreshExpired } from './IsRefreshExpired';


export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [status, setSatus] = useState();
    useEffect(() => {
      const checkStatus=async()=>{
        const result= await IsRefreshExpired();
        console.log("use effect")
        setSatus(result)            
      }
      checkStatus()
    }, [location?.pathname])

    console.log("status: ",status)
    
    const RouterLink=[
        {name:"Home",link:"/home"},
        {name:"Login",link:"/"},
        {name:"Register",link:"/register"},
        {name:"Logout",link:"/logout"}
    ];
    return(


        <div className={styles.mainDiv}>
            {/* <p>homepage</p>
            <p>Home</p>
            <p>Login</p>
            <p>Register</p>
            <p>Logout</p> */}
            {
                RouterLink.map((val,i)=>(
                    <p key={String(i)} onClick={()=>{
                            navigate(status.valid===true?`${val?.link}`:`/`);
                            console.log("====>",status)
                        
                        
                    }
                    }><a className={styles.pages}>
                        {val?.name}
                        </a>
                    </p>
                    // console.log("===>",val?.link)
                ))
            }
            
        </div>

        
    )
}