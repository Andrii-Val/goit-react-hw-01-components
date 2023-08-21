import {Profile} from './Profile/Profile'
import userProfile from '../json/user.json'
import {Statistics} from './Statistics/Statistics'
import dataStatistics from '../json/data.json'
import {FriendList} from './FriendList/FriendList'
import friends from '../json/friends.json'
import{TransactionHistory} from './TransactionHistory/TransactionHistory'
import transactions from '../json/transactions.json'

export const App = () => {
  return (
    <>
     <Profile items={userProfile}/>
     <Statistics  datas= {dataStatistics}  title = 'Upload stats'/>
     <FriendList friends={friends}/>
     <TransactionHistory  items={ transactions}/>
     </>
  );
};
