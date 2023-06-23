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