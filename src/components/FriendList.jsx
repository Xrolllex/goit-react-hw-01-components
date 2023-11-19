import React from "react";
import PropTypes from 'prop-types';
import './FriendList.css'

const FriendListItem = ({avatar, name, isOnline }) => (
    <li className="item">
    <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
    <img className="avatar" src={avatar} alt={`Avatar of ${name}`} width="48" />
    <p className="name">{name}</p>
  </li>

);

const FriendList = ({friends}) => (
    <ul className="friend-list">
        {friends.map(friend =>(
            <FriendListItem
                key = {friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                />
            
        ))}
    </ul>
)

  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };
  
  export default FriendList;