import React, { useState} from 'react';
import PropTypes from 'prop-types';
import './AuthForm.css'

function AuthForm(props) {
    const { handlerLogin, handlerDisableError } = props;
    const [ form, setForm] = useState({login: '', password: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        handlerLogin(form);
        setForm({login: '', password: ''});
    }

    const handleChange = (event) => {
        const nameValue = event.target.name;
        setForm( prev => ({...prev, [nameValue]: event.target.value}))
    }


    return (
        <form className='auth-form' onSubmit={handleSubmit}>
            {props.children}
            <div className="block-auth block-auth-username">
                <input className='auth-input input-username' name='login' 
                id='login' type="text" onChange={handleChange} 
                onFocus={handlerDisableError}
                value={form.login} placeholder='USERNAME'/>
            </div>
            <div className="block-auth block-auth-password">
                <input className='auth-input input-password' name='password' 
                id='password' type="password" onChange={handleChange}
                onFocus={handlerDisableError}
                value={form.password} placeholder='PASSWORD'/>
            </div>
            <button className="button-submit">Login</button>
        </form>
    )
}

AuthForm.propTypes = {
    handlerLogin: PropTypes.func.isRequired,
    handlerDisableError: PropTypes.func.isRequired,
}

export default AuthForm;

