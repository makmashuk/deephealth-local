import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import * as Icon from 'react-feather';

export default function BasicTextFields() {
  return (
    // <Box
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { width: '100%', border: '1px solid #44495B', borderRadius: '8px', background: '#44495B', fontWeight: '500', color: '#fff' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //     <Icon.Search style={{ position: 'absolute', left: 22, top: 130, width: 18, height: 18, zIndex: 100 }}/>
    //     <TextField
    //       id="outlined-basic"
    //       label=""
    //       type="search"
    //       variant="outlined"
    //       placeholder="Type to search..."
    //       InputProps={{ }}
    //     />
    // </Box>
    <TextField
        id="input-with-icon-textfield"
        label=""
        sx ={{ borderRadius:'12px', color: "#fff" } } 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon.Home size={25} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        size='small'
      />
  );
}