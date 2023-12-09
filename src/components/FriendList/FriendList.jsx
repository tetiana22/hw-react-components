import React from 'react';
import { FriendWrap } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendWrap>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
        />
      ))}
    </FriendWrap>
  );
};