import React, { useContext } from 'react';
import AuthForm from '../../Components/AuthForm/AuthForm';
import Header from '../../Components/Header/Header';
import SocialLogo from '../../Components/SocialLogo/SocialLogo';
import AuthContext from '../../Contexts/AuthContext/AuthContext';

import './AuthPage.css';

function AuthPage(props) {
    const { handlerLogin, handlerDisableError, error } = useContext(AuthContext);
    
    return (
            <div className='auth-page'>
                <Header>
                    <AuthForm handlerLogin={handlerLogin} handlerDisableError={handlerDisableError}>
                    { error && <div className="error">{error}</div>}
                    </AuthForm>
                </Header>
                <SocialLogo /> 
            </div>
    )
}

export default AuthPage;

