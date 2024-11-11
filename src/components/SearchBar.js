import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import TextField from '@mui/material/TextField';
import { styled as muiStyled } from '@mui/material/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { wines, fetchWineResults } from '../reducers/wines';
import { SearchButton } from './lib/Buttons';
import { SearchHeading } from './lib/Text';
import { InputTextDiv, SearchWrapper } from './lib/Containers';

const RootDiv = muiStyled('div')(() => ({
  margin: 0,
  display: 'flex',
  flexWrap: 'wrap',
  fontSize: '20px',
  width: '100%',
  '& .MuiTextField-root': {
    margin: '16px',
    borderRadius: 0,
    fontSize: '20px',
  },
}));

const CustomTextField = muiStyled(TextField)(() => ({
  width: '25ch',
  fontSize: '20px',
}));

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((store) => store.wines.searchTerm);
  const sortOrder = useSelector((store) => store.wines.sortOrder);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.length > 0) {
      dispatch(fetchWineResults(searchTerm, sortOrder));
    }
  };

  return (
    <SearchWrapper>
      <SearchHeading>Search</SearchHeading>
      <FormSearch onSubmit={handleSubmit}>
        <RootDiv>
          <InputTextDiv>
            <CustomTextField
              id="outlined-full-width"
              style={{ width: '100%', margin: 8, fontSize: `${16}px` }}
              placeholder="Search..."
              type="search"
              fullWidth
              variant="outlined"
              value={searchTerm}
              onChange={(event) =>
                dispatch(wines.actions.setSearchTerm(event.target.value))
              }
              autoComplete="off"
              spellCheck="false"
            />
            <SearchButton type="submit" onSubmit={handleSubmit}>
              <SearchOutlinedIcon style={{ fontSize: 36, fill: '#ffffff' }} />
            </SearchButton>
          </InputTextDiv>
        </RootDiv>
      </FormSearch>
    </SearchWrapper>
  );
};

export default SearchBar;
const FormSearch = styled.form`
  background: none;
  font-size: 16px;
  border-radius: 8px;
  display: block;
  margin: 25px 20px 30px 20px;
  width: 60vw;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 90vw;
  }
  @media (max-width: 560px) {
    margin: 15px 15px 20px 15px;
    width: 100vw;
  }
`;
