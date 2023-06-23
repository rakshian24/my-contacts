import { styled } from 'styled-components';
import Header from './components/Header';
import AppBody from './components/AppBody';

const AppWrapper = styled.div`
  height: 100vh;
  padding: 1.25em;
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppWrapper>
      <AppContainer>
        <Header />
        <AppBody />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
