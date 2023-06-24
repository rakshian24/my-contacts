import React from 'react';
import { styled } from 'styled-components';
import { useWindowSize } from '../hooks/useWindowResize';
import SearchIcon from './icons/SearchIcon';
import { colors } from '../constants/colors';

const { primaryBlue, primaryBlueLight, lightBlueGrey } = colors;

const SearchBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  grid-gap: 38px;

  @media screen and (min-device-width: 768px) { 
    grid-template-columns: 0.4fr 0fr;
  }
`;

const StyledInput = styled.input`
  padding: 0.5em;
  font-size: 1.25em;
  outline: none;
  border: 1px solid ${primaryBlue};
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.45em;
  font-size: 1.25em;
  outline: none;
  border: 1px solid ${primaryBlue};
  border-radius: 4px;
  background-color: ${primaryBlueLight};
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;

  &:hover{
    background-color: ${primaryBlue};
  }
`;

const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${lightBlueGrey};
  border-radius: 8px;
`;

const SearchBox = () => {
  const [screenWidth] = useWindowSize();

  return (
    <SearchBoxContainer>
      <div>
        <StyledInput type='text' placeholder='Enter user' />
      </div>
      {screenWidth > 500 ? <div>
        <Button id="search-btn">Search</Button>
      </div> : <SearchIconContainer>
        <SearchIcon fill={primaryBlue} stroke={primaryBlue} />
      </SearchIconContainer>}

    </SearchBoxContainer>
  )
}

export default SearchBox