/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { matchSorter } from 'match-sorter';
import Container from '@material-ui/core/Container';
import tora from '../../consts/tora.json';

const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

export default function Search({ onChange }) {
  return (
    <Container>

      <Autocomplete
        dir="rtl"
        id="free-solo-2-demo"
        disableClearable
        onChange={onChange}
        options={Object.keys(tora.parasha).map((option) => option)}
        filterOptions={filterOptions}
        renderInput={(params) => (
          <TextField
            dir="rtl"
            {...params}
            label="חפש פרשה"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />

    </Container>
  );
}
