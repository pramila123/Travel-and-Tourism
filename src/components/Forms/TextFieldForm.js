import { TextField } from '@mui/material';
import React from 'react';

const TextFieldForm = ({name,label,...otherProps}) => {
 
    const TextFieldConfig={
    fullWidth:true,
        variant:"outlined",
        size:"small",
        ...otherProps
      
    }
  return <>
  <TextField  {...TextFieldConfig} label={label} multiline name={name} />
   
  </>;
};

// TextFieldForm.propTypes={
//   name:propTypes.string.isRequired,
  
// }
export default TextFieldForm;
