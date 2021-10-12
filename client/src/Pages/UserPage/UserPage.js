import React, { useState, useEffect, useContext } from 'react';
import Header from '../../Components/Header/Header';
import NewsList from '../../Components/NewsList/NewsList';
import Profile from '../../Components/Profile/Profile';
import AuthContext from '../../Contexts/AuthContext/AuthContext';

function UserPage(props) {
    const { token, handlerLogout } = useContext(AuthContext);
    const [ newsList, setNews ] = useState([]);
    const [ profile, setProfile ] = useState({name: '', avatar: ''});

    useEffect( () => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/private/news`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then( resp => {
                if (resp.status === 401) {
                    throw new Error('пользователь не авторизован')
                }
                return resp.json()
            })
            .then( data => setNews(data) )
            .catch(e => {
                console.log(e.message);
                handlerLogout();
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/private/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then( resp => {
                if (resp.status === 401) {
                    throw new Error('пользователь не авторизован')
                }
                return resp.json()
            })
            .then( data => setProfile(data) )
            .catch(e => {
                console.log(e.message);
                handlerLogout();
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
            <div className='auth-page'>
                <Header>
                    <Profile profile={profile} handlerLogout={handlerLogout}/>  
                </Header>
                <NewsList list={newsList}/>
            </div>
    )
}

export default UserPage

