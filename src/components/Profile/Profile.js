 import { ProfileList } from "./ProfileList"
export const Profile =({items}) => {
    return (
        <>
{items.map( user=> (
 <ProfileList
 username={user.username}
 tag={user.tag}
 location={user.location}
 avatar={user.avatar}
 stats={user.stats}
 />)
 )
}</>
 );
}