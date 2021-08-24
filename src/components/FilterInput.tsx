import React, {useState} from "react"
import {Box, FormControl, IconButton, Input, InputAdornment, InputLabel} from "@material-ui/core";
import {Clear} from "@material-ui/icons";

export type FilterInputProps = {
  placeholder: string,
  onChange: Function
}

export function FilterInput({placeholder, onChange}: FilterInputProps) {
  const [value, setValue] = useState('');

  const clearInput = (_e): void => {
    setValue('');
    onChange('');
  }

  const handleChange = e => {
    console.log(e.target.value);
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <Box mb={4}>
      <FormControl fullWidth>
        <InputLabel htmlFor="filter">{placeholder}</InputLabel>
        <Input
          id="filter"
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Clear Input"
                onClick={clearInput}
              >
                <Clear />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  )
}
