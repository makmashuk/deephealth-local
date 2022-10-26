import { useState, useRef } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Breadcrumb from '@components/common/Breadcrumb/Breadcrumb'
import Badge from '@mui/material/Badge'
import { Star, ChevronDownMedium, Home, Logout } from '@icons/index'

const Navbar = () => {
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

  const iconRef = useRef(null)

  return (
    <AppBar position="sticky">
      <Box sx={{ flexGrow: 1 }}>
        <Breadcrumb />
      </Box>
      <Box>
        <IconButton aria-label="favourites" sx={{ marginRight: '45px' }}>
          <Badge badgeContent={25} max={99}>
            <Star stroke="#44495B" strokeWidth="1.5" />
          </Badge>
        </IconButton>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{
            p: 0,
            '& path': { transition: 'all 300ms' },
            '&:hover': {
              backgroundColor: 'transparent',
              '& path': { stroke: '#6992FC' },
            },
          }}
        >
          <Avatar alt="Remy Sharp" src="/2.jpg" sx={{ marginRight: '12px' }} />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '20px',
              color: '#44495B',
              marginRight: '25px',
            }}
          >
            Donovan Mitchell
          </Typography>
          <div ref={iconRef}>
            <ChevronDownMedium sx={{ fontSize: '16px' }} />
          </div>
        </IconButton>
        <Menu
          sx={{
            mt: '45px',
            '& .MuiPaper-root': {
              width: '228px',
              border: '1px solid #EDEFF5',
              boxShadow: '0px 4px 14px rgba(243, 245, 250, 0.92)',
              borderRadius: '12px',
              padding: '8px 3px',
              '& ul': {
                padding: '0',
                '& li.MuiMenuItem-root': {
                  padding: '8px 12px',
                  borderRadius: '8px',
                  transition: 'all 300ms',
                  '& path': {
                    transition: 'fill 1000ms',
                  },
                  '&:hover': {
                    background: '#F5F6F8',
                    '& .MuiTypography-root': {
                      color: '#44495B',
                    },
                    '& svg path': {
                      stroke: '#6A6E83',
                    },
                  },
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
          <MenuItem onClick={handleCloseUserMenu} sx={{ columnGap: '16px' }}>
            <Home size="16" stroke="#A8B1CE" />
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '16px',
                fontWeight: '700',
                color: '#6A6E83',
              }}
            >
              My summary
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu} sx={{ columnGap: '16px' }}>
            <Logout size="16" stroke="#A8B1CE" />
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '16px',
                fontWeight: '700',
                color: '#6A6E83',
              }}
            >
              Logout
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </AppBar>
  )
}

export default Navbar
