
import {FriendListItem, FriendIsOnline, FriendIsOfline, Avatarname} from './FriendList.styled'
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
        <Avatarname className="name">{friend.name} </Avatarname>
      </FriendListItem>
        ))}
</ul>
    )
}