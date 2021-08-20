import React,{ useState } from 'react';
import {  NavLink } from 'react-router-dom';

const SignIn = () => {
    const [userText,setUserText] = useState("");
    const [userPass,setUserPass] = useState("");

    const userChange = (e) => {
        setUserText(e.target.value);
    }

    const passChange = (e) => {
        setUserPass(e.target.value);
    }

    const onLoginButton = () => {
        if(userText !== ""){
            return false;
        }
        if(userPass !== ""){
            return false;
        }
        return true;
    }

    return (
        <div className="SignIn">
        <div className="formContainer center">
            <form >
                <h2>Sign In</h2>
                <label>
                    Username:<br />
                    <input type="text" value={userText} onChange={userChange} placeholder="Username"/>
                </label>
                <label>
                    Password:<br />
                    <input type="password" value={userPass} onChange={passChange} placeholder="Password"/>
                </label>
                    
                <NavLink to="/app" isActive={onLoginButton}>
                    <button>
                        Log In
                    </button>
                </NavLink>
                    
                
            </form>
        </div>
        </div>
    );
}

export default SignIn;