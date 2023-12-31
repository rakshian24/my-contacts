import React from 'react';
import { styled } from 'styled-components';
import Card from './Card';
import LoadingSpinner from '../components/icons/LoadingSpinner';
import { useWindowSize } from '../hooks/useWindowResize';

const AppBodyContainer = styled.div`
  margin-bottom: 1em;
  padding: 1.5em 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px){
    padding: 2em 0;
  }

  //Styles for tablet device and small screen laptop
  @media only screen and (min-width: 768px) and (max-width: 1024px) { 
    grid-template-columns: 1fr 1fr;
  }

  //Styles for small screen laptops to big screen laptops
  @media only screen and (min-width: 1025px) and (max-width: 1800px) { 
    grid-template-columns: 1fr 1fr 1fr;
  }

  //Styles for bigger monitor screens
  @media screen and (min-width: 1801px) { 
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const LoadingSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em 0;
  width: 100%;
`;

const NoUserFoundDiv = styled.div`
  font-size: 1.5em;
`;

const AppBody = ({users, isLoading}) => {
  const [screenWidth] = useWindowSize();

   const getLoadingSpinnerWidth = (screenSize) => {
    if (screenSize > 500 && screenSize < 1200) {
      return '135px'
    } else if (screenSize > 1200) {
      return '200px'
    } else {
      return '90px'
    }
  }

  if (isLoading) {
    return (
      <LoadingSpinnerContainer>
        <LoadingSpinner width={getLoadingSpinnerWidth(screenWidth)} />
      </LoadingSpinnerContainer>
    )
  }

  return (
    <AppBodyContainer>
      {users.length > 0 ? users.map((user) => {
        return <Card key={user.id} user={user} />
      }) : (
        <NoUserFoundDiv>No contacts found.</NoUserFoundDiv>
      )}
    </AppBodyContainer>
  )
}

export default AppBody