import styled from 'styled-components'

export const FriendListItem = styled.li`
list-style: none;
display: flex;
border: 2px solid rgb(4, 18, 51);
text-align: center;
align-items: center;
justify-content: center;
width: 200px;
margin-top: 10px;
padding: 10px;
`;

export const FriendIsOnline = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: green;

`;
export const FriendIsOfline = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: red;

`;
export const Avatarname = styled.p`
color: black;
font-weight: 700;
    margin-left: 15px;
`;