import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'
import user from '../data/user.json'

import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './Transaction/TransactionHistory'; 
import { Container } from './App.styled';



export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      
    </Container>
  );
};
