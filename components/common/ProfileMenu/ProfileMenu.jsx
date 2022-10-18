import { useRef, useState } from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { ChevronDownThick, Home, Logout } from '@icons/index'
import styles from './ProfileMenu.module.css'

const ProfileMenu = ({ tech }) => {
  const iconRef = useRef(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
    iconRef.current.style.transform = 'scaleY(-1)'
    iconRef.current.querySelector('svg path').setAttribute('stroke', '#5475CA')
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
    iconRef.current.style.transform = 'scaleY(1)'
    iconRef.current.querySelector('svg path').setAttribute('stroke', '#44495B')
  }

  return (
    <>
      <IconButton
        className={styles.profileMenu_button}
        onClick={handleOpenUserMenu}
        sx={{
          '&:hover path': {
            stroke: '#6992FC',
          },
        }}
      >
        <Avatar
          alt="Donovan Mitchell"
          src="./avatar.jpg"
          sx={{ marginRight: '12px' }}
        />
        <Typography
          variant="h3"
          component="p"
          color="textPrimary"
          sx={{
            marginRight: '25px',
          }}
        >
          Donovan Mitchell
        </Typography>
        <div ref={iconRef}>
          <ChevronDownThick sx={{ fontSize: '16px' }} />
        </div>
      </IconButton>
      <Menu
        className={styles.profileMenu_menu}
        sx={{
          '& .MuiPaper-root': {
            width: '228px',
            border: '1px solid #EDEFF5',
            boxShadow: '0px 4px 14px rgba(243, 245, 250, 0.92)',
            borderRadius: '12px',
            padding: '0',
            '& ul': {
              padding: '8px 4px',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '6px',
              '& li.MuiMenuItem-root path': {
                transition: 'all 0.3s ease-out',
              },
              '& li.MuiMenuItem-root:hover path': {
                stroke: '#6A6E83',
              },
            },
          },
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {tech ? (
          <MenuItem className={styles.profileMenu_menuItem_btn}>
            <Button
              variant="contained"
              size="medium"
              disableElevation
              onClick={handleCloseUserMenu}
              fullWidth
            >
              Request Help
            </Button>
          </MenuItem>
        ) : (
          <MenuItem
            onClick={handleCloseUserMenu}
            className={styles.profileMenu_menuItem}
          >
            <Home size={16} stroke="#A8B1CE" />
            <Typography variant="subtitle1" component="p" color="textSecondary">
              My summary
            </Typography>
          </MenuItem>
        )}
        <MenuItem
          onClick={handleCloseUserMenu}
          className={styles.profileMenu_menuItem}
        >
          <Logout size="16" stroke="#A8B1CE" />
          <Typography variant="subtitle1" component="p" color="textSecondary">
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default ProfileMenu
