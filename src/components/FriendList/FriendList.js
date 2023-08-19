
import {FriendListItem, FriendIsOnline, FriendIsOfline} from './FriendList.styled'
export const FriendList =({friends}) => {
    return (
    <ul className="friend-list">
        {friends.map( friend=>(
        
        <FriendListItem className="item" key={friend.id}>
          {friend.isOnline ? 
        <FriendIsOnline className="status online">  {friend.isOnline}</FriendIsOnline>
        : <FriendIsOfline className="status">  {friend.isOnline}</FriendIsOfline>
      }
        <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
        <p className="name">{friend.name} </p>
      </FriendListItem>
        ))}
</ul>
    )
}