import Box from '@mui/material/Box';
import Image from 'next/image';
import navigationImage from '/public/icons/navigation_icon.svg';

const NavIcon = () => {
  return (
    <Box
      sx={{ py: "0.75rem" }}
    >
      <Image src={navigationImage} height={40} width={40} alt="logo" />
    </Box>
  )
}

export default NavIcon