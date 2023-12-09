
import {
    FriendItem,
    FriendIcon,
    FriendName,
    UserStatus,
  } from './FriendListItem.styled';

  export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
        <FriendItem>
            <UserStatus $statusType={isOnline}></UserStatus>
            <FriendIcon src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    );
}