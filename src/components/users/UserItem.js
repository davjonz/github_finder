import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: {login, avatar_url, html_url }}) => {

    return (
        <div className='card text-center'>
            <img 
                alt=''
                src={avatar_url} 
                className='round-img'
                style={{ width: '60px' }}
                />
            <div>{login}</div>
            <div>
                <a href={html_url} target='_blank' rel="noreferrer" className="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    )
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
    
}

export default UserItem
