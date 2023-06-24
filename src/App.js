import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import AppBody from './components/AppBody';
import SearchBox from './components/SearchBox';
import { alphabeticRegex } from './utils';

const AppWrapper = styled.div`
  height: 100vh;
  padding: 1.25em;

  //Styles for tablet device
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) { 
   padding: 1.5em;
  }

  //Styles for laptops screens and above
  @media screen and (min-device-width: 1025px) { 
   padding: 2em;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`).then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  }, [query]);

  const handleQueryChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.match(alphabeticRegex)) {
      setQuery(inputValue)
    }
  }

  return (
    <AppWrapper>
      <AppContainer>
        <SearchBox query={query} handleQueryChange={handleQueryChange} />
        <AppBody users={users} isLoading={isLoading} />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
