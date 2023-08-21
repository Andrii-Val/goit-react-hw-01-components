import  {ProfileDiv , Avatar, Description, Name, ListItem, NameTag, List} from './Profile.styled'



export const ProfileList =({username, tag, avatar, location, stats}) => {
    return (
        <ProfileDiv className="profile" >
        <Description  className="description" >
        <Avatar src={avatar} alt={username}  />
        <Name className="name">{username}</Name>
        <NameTag className="tag">@{tag}</NameTag>
        <NameTag className="location">{location}</NameTag>
        </Description> 
        <List className="stats" >
            <ListItem  >
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers} </span>
            </ListItem>
            <ListItem >
                <span className="label">Views</span>
                <span className="quantity">{stats.views} </span>
            </ListItem>
           
            <ListItem >
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes} </span>
            </ListItem>
           
           </List>
            
        

   </ProfileDiv> 
)}