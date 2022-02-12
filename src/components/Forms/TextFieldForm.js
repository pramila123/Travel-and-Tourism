import { TextField } from '@mui/material';
import React from 'react';

const TextFieldForm = ({label,name, ...otherProps}) => {
    const TextFieldConfig={
    fullWidth:true,
        variant:"outlined",
        size:"small",
       
       ...otherProps
    }
  return <>
  <TextField  {...TextFieldConfig} label={label} multiline />
  </>;
};

// TextFieldForm.propTypes={
//   name:propTypes.string.isRequired,
  
// }
export default TextFieldForm;
