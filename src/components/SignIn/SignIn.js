import React,{ useState } from 'react';


const SignIn = () => {
    const [userText,setUserText] = useState("");
    const [userPass,setUserPass] = useState("");

    const userChange = (e) => {
        setUserText(e.target.value);
    }

    const passChange = (e) => {
        setUserPass(e.target.value);
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
                <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
    );
}

export default SignIn;