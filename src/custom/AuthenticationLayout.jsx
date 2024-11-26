import React from 'react';
import loginImage from '../assets/images/loginImage.jpg';


const AuthenticationLayout = ({ heading,children }) => {
    return (
        <div className="relative min-h-screen flex">
            <div className="absolute inset-0 md:flex items-center justify-center bg-cover bg-center "
                style={{ backgroundImage: `url(${loginImage})` }}>
            </div>
            <div className="fixed flex w-1/2 right-0 min-h-screen items-center justify-center p-4 bg-bgColor rounded-tl-3xl rounded-bl-3xl">
                <div className="relative w-full max-w-md">
                    { heading }
                <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md overflow-y-auto max-h-screen">
                    {children}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default AuthenticationLayout;