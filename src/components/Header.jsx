import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../assets/styles/Header.module.css";


export const Header =()=>{
    const navigate = useNavigate();
    const RouterLink=[
        {name:"Home",link:"/home"},
        {name:"Login",link:"/"},
        {name:"Register",link:"/home"},
        {name:"Logout",link:"/home"}
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
                        navigate(val?.link);
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