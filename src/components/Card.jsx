import React from 'react';
import { styled } from 'styled-components';

const CardContainer = styled.div`
  margin-bottom: 1em;
  padding: 1.5em 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  &:last-child{
    margin-bottom: 0;
  }
  
`;
const Avatar = styled.div`
  background-color: #0077c5;
  width: 6em;
  height: 6em;
  border-radius: 3em;
  margin-bottom: 1em;
  img{
    width: 100%;
    height: 100%;
    border: 2px solid #0077c5;
    border-radius: 3em;
    object-fit: contain;
  }
`;
const UserName = styled.div`
  font-size: 1.65em;
  margin-bottom: 8px;
`;
const Email = styled.div`
  font-size: 1.35em;
`;

const Card = ({ user }) => {
  return (
    <CardContainer>
      <Avatar>
        <img src={`https://xsgames.co/randomusers/assets/avatars/male/${user.id}.jpg`} />
      </Avatar>
      <UserName>{user.name}</UserName>
      <Email>{user.email}</Email>
    </CardContainer>
  )
}

export default Card