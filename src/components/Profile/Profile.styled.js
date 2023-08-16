import styled from 'styled-components'

export const ProfileDiv = styled.div`
text-align: center;

 width: 200px;
 padding: 15px;
 margin: 20px;
 border: 2px  solid black;
`;
export const Description = styled.div`
width: 200px;
 
 
`;

export const  Avatar = styled.img`
 width: 70px;
 height: 70px;
 border-radius: 100px;
 
 
 `;
 export const Name = styled.p`
 list-style: none;
 text-decoration: none;
 padding: 0px;
 margin: 0;
 font-weight: 800;
 font-size: 18px;
 line-height: 1.3;
 `;
 export const ListItem = styled.li`
 text-align: center;
 display: flex;
 flex-wrap: wrap;
 border:1px  solid darkgrey ;
 align-items: center;
 justify-content: center;
 padding-top:15px ;
 padding-bottom: 15px ;
 width: 100px;
 `;
 export const List = styled.ul`
 display: flex;

text-align: center;
padding: 0;
margin: 0;
background-color:  grey;

 `;
 export const NameTag = styled.p`
 padding: 0px;
 margin: 0;
 color:  grey;
 `;