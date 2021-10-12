import React, { Fragment, useContext } from 'react';
import AuthPage from './../AuthPage/AuthPage';
import UserPage from './../UserPage/UserPage';
import AuthContext from '../../Contexts/AuthContext/AuthContext';

function PageProvider() {
    const { token } = useContext(AuthContext);
    return (
        <Fragment>
            {!token && <AuthPage/>}
            {token && <UserPage/>}
        </Fragment>
    )
}

export default PageProvider;

