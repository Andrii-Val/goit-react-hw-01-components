import {Profile} from './Profile'
import userProfile from '../json/user.json'
import {Statistics} from './Statistics'
import dataStatistics from '../json/data.json'
import {FriendList} from './FriendList'
import friends from '../json/friends.json'
import{TransactionHistory} from './TransactionHistory'
import transactions from '../json/transactions.json'

export const App = () => {
  return (
    <>
     <Profile items={userProfile}/>
     <Statistics  datas= {dataStatistics} />
     <FriendList friends={friends}/>
     <TransactionHistory  transactions={ transactions}/>
     </>
  );
};
