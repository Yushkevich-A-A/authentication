import React from 'react';
import PropTypes from 'prop-types';

import './Profile.css';

function Profile(props) {
    const { profile, handlerLogout } = props;

    return (
        <div className='profile-user'>
            <div className="login">
                Hello,{profile.name}
            </div>
            <img className='user-img' src={profile.avatar} alt="" />
            <button className='logout' onClick={handlerLogout}>Logout</button>
        </div>
    )
}

Profile.propTypes = {
    handlerLogout: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

export default Profile;
