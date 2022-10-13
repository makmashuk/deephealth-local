import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import * as Icon from 'react-feather';

export default function BasicTextFields() {

  const styles = theme => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important"
    }
  });
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '100%', border: '1px solid #44495B', borderRadius: '8px', background: '#44495B', fontWeight: '500', color: '#fff', height: '32px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="input-with-icon-textfield"
        label=""
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon.Search size={20} color={"#A8B1CE"} />
            </InputAdornment>
          ),
          sx: { height: 32, fontSize: 12},
        }}
      />
    </Box>
  );
}