import { createTheme } from '@mui/material/styles'

// MUI theme customization
export const muiCustomTheme = createTheme({
  palette: {
    primary: {
      main: '#6992FC',
      dark: '#5475CA',
      light: '#87A8FD',
    },
    error: {
      main: '#FF5B51',
      light: '#FF9D97',
      dark: '#CC4941',
    },
    text: {
      primary: '#44495B',
      secondary: '#6A6E83',
      disabled: '#A8B1CE',
      error: '#FF5B51',
    },
  },
  typography: {
    fontFamily: "'Manrope', sans-serif",
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    h1: {
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: '3rem',
    },
    h2: {
      fontWeight: 800,
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: '0.875rem',
      lineHeight: '1rem',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    body1: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    body2: {
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    body3: {
      fontWeight: 500,
      fontSize: '0.625rem',
      lineHeight: '1rem',
    },
    button1: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    button: {
      fontWeight: 700,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    button3: {
      fontWeight: 700,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    caption: {
      fontWeight: 700,
      fontSize: '0.875rem',
      lineHeight: '1rem',
    },
    overline: {
      fontWeight: 700,
      fontSize: '0.75rem',
      lineHeight: '0.75rem',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #EDEFF5',
          minHeight: '65px',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0 20px',
          zIndex: 1,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          width: '20px',
          height: '16px',
          backgroundColor: '#6992fc',
          color: '#fff',
          borderRadius: '4px',
          right: '-8px',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          '&:hover, &:active': {
            boxShadow: 'none',
          },
        },
        contained: {
          background: '#6992FC',
          color: '#fff',
          '&:hover': {
            background: '#5475CA',
          },
          '&:active': {
            background: '#3F5897',
          },
        },
        sizeLarge: {
          paddingTop: '12px',
          paddingBottom: '12px',
          borderRadius: '12px',
        },
        sizeMedium: {
          padding: '9px 16px 7px',
          borderRadius: '12px',
        },
        sizeSmall: {
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          height: '100%',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: 0,
          },
        },
      },
    },
  },
})
