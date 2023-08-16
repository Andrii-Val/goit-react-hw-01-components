import  {ProfileDiv , Avatar, Description, Name, ListItem, NameTag, List} from './Profile.styled'


export const Profile =({items}) => {
    return (
   <ProfileDiv className="profile" >
    {items.map( item=>(
         < >
        <Description  className="description" >
        <Avatar src={item.avatar} alt={item.username}  />
        <Name className="name">{item.username}</Name>
        <NameTag className="tag">@{item.tag}</NameTag>
        <NameTag className="location">{item.location}</NameTag>
        </Description>
        <List className="stats" >
            <ListItem key={'1'} >
                <span className="label">Followers</span>
                <span className="quantity">{item.stats.followers} </span>
            </ListItem>
            <ListItem key={'2'}>
                <span className="label">Views</span>
                <span className="quantity">{item.stats.views} </span>
            </ListItem>
           
            <ListItem key={'3'}>
                <span className="label">Likes</span>
                <span className="quantity">{item.stats.likes} </span>
            </ListItem>
           
           </List>
            
        </>
   ))}
   </ProfileDiv> 
  

    );
}; 