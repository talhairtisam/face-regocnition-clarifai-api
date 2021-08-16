import React from 'react';


const SignIn = () => {
    return (
        <div className="SignIn">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={} onChange={} placeholder="Username"/>
                </label>
                <label>
                    Password:
                    <input type="password" value={} onChange={} placeholder="Password"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SignIn;