import React from 'react';
import { styled } from 'styled-components';
import { colors } from '../constants/colors';
import { useWindowSize } from '../hooks/useWindowResize';

const { primaryBlue } = colors;

const SearchBoxContainer = styled.div`
  width: calc(100% - 20px);

  @media screen and (min-width: 768px){
    width: 50%;
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

const SearchBox = ({ query, handleQueryChange }) => {
  const [screenWidth] = useWindowSize();
  return (
    <SearchBoxContainer>
      <StyledInput type='text' placeholder={screenWidth > 500 ? 'Search contact by name or email' : 'Search contact'} value={query} onChange={handleQueryChange} />
    </SearchBoxContainer>
  )
}

export default SearchBox