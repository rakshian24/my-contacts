import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Card from './Card';

const AppBodyContainer = styled.div`
  margin-bottom: 1em;
  padding: 2em 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 100%;


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

const AppBody = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(data => {
          setUsers(data)
        });
    }
  }, [])

  return (
    <AppBodyContainer>
      {users.length > 0 && users.map((user) => {
        return <Card key={user.id} user={user} />
      })}
    </AppBodyContainer>
  )
}

export default AppBody