import React from 'react';
import PropTypes from 'prop-types';

import './News.css';

function News(props) {
    const { item } = props;
    return (
        <div className='news'>
            <img className='news-img' src={item.image} alt="" />
            <div className="description">
                <div className="title">{item.title}</div>
                <div className="content">{item.content}</div>
            </div>
        </div>
    )
}

News.propTypes = {
    item: PropTypes.object.isRequired,
};

export default News;

