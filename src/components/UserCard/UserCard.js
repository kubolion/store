import React from 'react';

const UserCard = ({oneUserClick}) => {
    return (
        <div>
            {oneUserClick.email}
        </div>
    );
};

export default UserCard;