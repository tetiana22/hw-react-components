import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.4);
  width: 280px;
  padding: 24px;
  gap: 16px;
  border-radius: 8px;
  background:  #F0FCFF;;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const FriendIcon = styled.img`
  width: 60px;
  height: 60px;
  padding: 8px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const UserStatus = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.$statusType ? 'green' : 'red')};
`;


