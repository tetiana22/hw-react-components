import React from 'react';
import {
  FriendWrap,
  FriendItem,
  FriendIcon,
  FriendName,
  UserStatus,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendWrap>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <UserStatus $isOnline={isOnline}></UserStatus>
          <FriendIcon src={avatar} alt={name}></FriendIcon>
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </FriendWrap>
  );
};