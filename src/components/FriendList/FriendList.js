
import {FriendListItem, FriendIsOnline} from './FriendList.styled'
export const FriendList =({friends}) => {
    return (
    <ul className="friend-list">
        {friends.map( friend=>(
        
        <FriendListItem className="item" key={friend.id}>
        <FriendIsOnline className="status">  {friend.isOnline}</FriendIsOnline>
        <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
        <p className="name">{friend.name} </p>
      </FriendListItem>
        ))}
</ul>
    )
}