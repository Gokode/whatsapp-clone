
import React from 'react';
import { Button } from '@mui/material';
import "./Login.css";
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';



 function Login(){
  const[{}, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>{ 
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });

        })
        .catch((error) => alert(error.message));
    };
 
  return (
    <div className="login">
        <div className="login_container">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRdp34OxwwRqufNQmF3CvkHEAIDTTMBpoeZtoCyhqfZvQjEi5e0lPAWPq0pK_BpqtyWc&usqp=CAU"
                alt="whatsapp"
            />
            <div className="login_text">
                <h1>Sign in to WhatsApp</h1>
            </div>
            <Button onClick={signIn}>
                Sign In With Google
            </Button>
        </div>
    </div>
  );
}

export default Login