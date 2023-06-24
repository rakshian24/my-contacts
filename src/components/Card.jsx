import React from 'react';
import { styled } from 'styled-components';
import { colors } from '../constants/colors';
import { getRandomNumber } from '../utils';

const {lightBlueGrey, primaryBlue} = colors;

const CardContainer = styled.div`
  margin-bottom: 0.5em;
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
  background-color: ${lightBlueGrey};
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-bottom: 1em;
  img{
    width: 100%;
    height: 100%;
    border: 2px solid ${primaryBlue};
    border-radius: 45px;
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

const PhoneNumber = styled.div`
  font-size: 1.1em;
`;

const Card = ({ user }) => {
  const handleMouseOver = (e, user) => {
    const cardElement = e.currentTarget;
    const avatarDiv = cardElement.children[0];
    const avatarImage = avatarDiv.children[0];
    const userNameEle = cardElement.children[1];
    const emailEle = cardElement.children[2];
    const phoneNumberDiv = cardElement.children[3];

    cardElement.style.marginTop = '4em';
    cardElement.style.height = '12em';

    phoneNumberDiv.style.display = 'block';
    phoneNumberDiv.textContent = user.phone;
    avatarDiv.style.width = '125px';
    avatarDiv.style.height = '125px';
    avatarDiv.style.borderRadius = '62.5px';
    avatarImage.style.borderRadius = '62.5px';
    avatarDiv.style.transform = 'translate(0px, -90px)';
    avatarDiv.style.transition = 'width 1s ease, height 1s ease, border-radius 1s ease, transform 0.5s ease';

    userNameEle.style.transform = 'translate(0px, -70px)';
    emailEle.style.transform = 'translate(0px, -70px)';
    phoneNumberDiv.style.transform = 'translate(0px, -60px)';
  }
  const handleMouseOut = (e) => {
    const cardElement = e.currentTarget;
    const avatarDiv = cardElement.children[0];
    const avatarImage = avatarDiv.children[0];
    const userNameEle = cardElement.children[1];
    const emailEle = cardElement.children[2];
    const phoneNumberDiv = cardElement.children[3];

    cardElement.style.height = 'inherit';
    avatarDiv.style.width = '90px';
    avatarDiv.style.height = '90px';
    avatarDiv.style.borderRadius = '45px';
    avatarImage.style.borderRadius = '45px';
    avatarDiv.style.transform = 'translate(0px, 0px)';
    userNameEle.style.transform = 'translate(0px, 0px)';
    emailEle.style.transform = 'translate(0px, 0px)';
    phoneNumberDiv.style.display = 'none';
    cardElement.style.marginTop = '0';
  }
  const randomPicId = getRandomNumber(0, 70);

  return (
    <CardContainer onMouseOver={(e) => handleMouseOver(e, user)}
      onMouseOut={handleMouseOut}>
      <Avatar>
        <img src={`https://xsgames.co/randomusers/assets/avatars/male/${randomPicId}.jpg`} />
      </Avatar>
      <UserName>{user.name}</UserName>
      <Email>{user.email}</Email>
      <PhoneNumber />
    </CardContainer>
  )
}

export default Card