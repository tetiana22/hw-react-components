import {
    Section,
    UserWrapper,
    UserAvatar,
    Username,
    StatisticList,
    StatisticItem,
    StatNumber,
  } from './Profile.styled';
  
  export const Profile = ({ user }) => {
    return (
      <Section>
        <UserWrapper>
          <UserAvatar src={user.avatar} alt={user.username}></UserAvatar>
          <Username>{user.username}</Username>
          <p>@{user.tag}</p>
          <p>{user.location}</p>
        </UserWrapper>
        <StatisticList>
          <StatisticItem>
            <span>Followers</span>
            <StatNumber>{user.stats.followers}</StatNumber>
          </StatisticItem>
          <StatisticItem>
            <span>Views</span>
            <StatNumber>{user.stats.views}</StatNumber>
          </StatisticItem>
          <StatisticItem>
            <span>Likes</span>
            <StatNumber>{user.stats.likes}</StatNumber>
          </StatisticItem>
        </StatisticList>
      </Section>
    );
  };
  