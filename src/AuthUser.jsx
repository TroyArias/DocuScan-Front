import React, {useState} from 'react';
import PropTypes from 'prop-types';

function AuthUser ({setToken}) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState()

    const logUser = async () => {

        let user = {
            email: email,
            password: password
        };

        return await fetch(`https://urchin-app-id7ax.ondigitalocean.app/auth/login`, {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.token){
                setToken(data.token)
            }
            setError(data.message)
    })}

        return (

        <div className = "Registration">
            <div className="ui-form">

                <div className="logo2">
                    <img src="https://aadmvservices.com/ws/resized-images/2e548bf58078492b83c8234acfb85373/2017-logo.png" height="60"></img>
                </div>

                <h2>LOG IN</h2>

                <div className="form-row">
                    <input type="text" id="email" required onChange={e => setEmail(e.target.value)}/><label>Email</label>
                </div>

                <div className="form-row">
                    <input type="password" id="password" required onChange={e => setPassword(e.target.value)}/><label>Password</label>
                </div>

                <a className="button-7" onClick={logUser}><span>log in</span></a>

                {error ? <div className='error'>{error}</div> : <> </>}
            </div>
        </div>
            
        )
}

AuthUser.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default AuthUser
