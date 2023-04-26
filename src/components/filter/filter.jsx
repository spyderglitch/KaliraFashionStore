import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Filter({ filterName, filterValues, onFilterChange, width }) {
  const [value, setValue] = useState([]);

  useEffect(()=>{
    onFilterChange(filterName, value);
  }, [value])

  const handleChange = (event) => {
    setValue(event.target.value);
    
  };

  return (
    //<Box sx={{ maxWidth: 100,maxHeight:40, backgroundColor: 'lightGrey', borderRadius: 5 }}>
      <FormControl component='span' sx={{width: width?280:140, height: 100, borderRadius: 5}} >
        <InputLabel id="select-label" sx={{fontSize: 15}} >{filterName}</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={value}
          label={filterName}
          onChange={handleChange}
        >
          {filterValues.map((filterValue) => {
            return <MenuItem value={filterValue}>{filterValue}</MenuItem>
          }
          )}
        </Select>
       </FormControl>
    //</Box>
  );
}

export default Filter;
