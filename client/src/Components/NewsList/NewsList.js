import React from 'react';
import PropTypes from 'prop-types';
import News from './News/News';

import './NewsList.css';

function NewsList(props) {
    const { list } = props;
    return (
        <div className='news-list'>
            {
                list.map( item => <News key={item.id} item={item}/>)
            }
        </div>
    )
}

NewsList.propTypes = {
    list: PropTypes.array.isRequired,
};

export default NewsList;

