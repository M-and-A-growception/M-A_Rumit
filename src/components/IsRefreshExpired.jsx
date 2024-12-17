
import axios from "axios";

export const IsRefreshExpired = async() => {
    const RefreshToken=document.cookie;
    const token= RefreshToken.split('refreshToken=')[1];
    // console.log(token)
    // if(!RefreshToken){
    //   console.error("Refresh token was not found in cookie");
    //   alert("Refresh Token is missing please try to login again");
    //   return false;
    // }
        try{
            const response= await axios.get('http://localhost:8000/registration/checktoken',
               {headers: {withCredentials:true, Authorization:token}});
            alert("status:",response?.status)

            if(response?.status===200){

              return {valid:true, user: response.data?.user};
            }
          }
          catch (error) {
            // Handle errors, such as network issues or invalid responses
            if (error.response && error.response?.status===401) {
              console.error('Token is invalid or expired:', error.response.data.error);
              return { valid: false, error: error.response.data.error };
    
            }
            else{
              console.error('An unexpected error occurred:', error.message);
            return { valid: false, error: 'An unexpected error occurred' };
            }
          }
        }
    