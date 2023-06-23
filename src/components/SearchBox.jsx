import React from 'react';
import { styled } from 'styled-components';
import { useWindowSize } from '../hooks/useWindowResize';
import SearchIcon from './icons/SearchIcon';

const SearchBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  grid-gap: 38px;
`;

const StyledInput = styled.input`
  padding: 0.5em;
  font-size: 1.25em;
  outline: none;
  border: 1px solid #0077c5;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.45em;
  font-size: 1.25em;
  outline: none;
  border: 1px solid #0077c5;
  border-radius: 4px;
  background-color: #0076c5cd;
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;
`;

const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
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
        <SearchIcon fill='#0077c5' stroke='#0077c5' />
      </SearchIconContainer>}

    </SearchBoxContainer>
  )
}

export default SearchBox