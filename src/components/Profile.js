export const Profile =({items}) => {
    return (
   <div className="profile" >
    {items.map( item=>(
         < >
        <div  className="description" >
        <img src={item.avatar} alt={item.username}  />
        <p className="name">{item.username}</p>
        <p className="tag">@{item.tag}</p>
        <p className="location">{item.location}</p>
        </div>
        <ul className="stats" >
            <li key={'1'} >
                <span className="label">Followers</span>
                <span className="quantity">{item.stats.followers} </span>
            </li>
            <li key={'2'}>
                <span className="label">Views</span>
                <span className="quantity">{item.stats.views} </span>
            </li>
           
            <li key={'3'}>
                <span className="label">Likes</span>
                <span className="quantity">{item.stats.likes} </span>
            </li>
           
           </ul>
            
        </>
   ))}
   </div> 
  

    );
}; 