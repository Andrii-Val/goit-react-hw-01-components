import {FriendListTitl, FriendIsOnline, FriendIsOfline, Avatarname} from './FriendList.styled'

export function  FriendListItem ({avatar, name, isOnline}){
    <>
    return(

<FriendListTitl className="item" >
{isOnline ? 
<FriendIsOnline className="status online">  {isOnline}</FriendIsOnline>
: <FriendIsOfline className="status">  {isOnline}</FriendIsOfline>
}
<img className="avatar" src={avatar} alt={name} width="48" />
<Avatarname className="name">{name} </Avatarname>
</FriendListTitl>
    )</>;}