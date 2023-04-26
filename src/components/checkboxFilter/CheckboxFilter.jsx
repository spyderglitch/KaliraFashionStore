import { useState, useEffect } from "react";

//MUI components

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const CheckboxFilter = ({ filterName, onFilterChange }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) onFilterChange(filterName);
  }, [checked]);

  const handleChange = (e) => {
    setChecked(!checked); if(checked) onFilterChange(e.target.value)
  }

  return (
    // <FormControl>
    //   <RadioGroup
    //     row
    //     aria-labelledby="demo-row-radio-buttons-group-label"
    //     name="row-radio-buttons-group"
    //   >
    //     <FormControlLabel value="Sareemall" control={<Radio />} label="Sareemall" onChange={handleChange} />
    //     <FormControlLabel value="Saree Shop" control={<Radio />} label="Saree Shop" onChange={handleChange}  />
    //   </RadioGroup>
    // </FormControl>

    <FormGroup row>
      <FormControlLabel
        control={<Radio />}
        label={filterName}
        onChange={() => setChecked(!checked)}
      />
    </FormGroup>
  );
};

export default CheckboxFilter;
