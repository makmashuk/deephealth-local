import * as React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { SiteIcon, LoginImage } from '@icons/index'
import LoginForm from './LoginForm'
import ResetPasswordForm from './ResetPasswordForm'

function Login() {
  const [loginPage, setLoginPage] = React.useState(true)

  const handleResetPassword = () => {
    setLoginPage(false)
  }

  const handleSignIn = () => {
    setLoginPage(true)
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: '100vh',
        width: '100%',
        background: '#fff',
        margin: '0',
        padding: '2rem',
      }}
    >
      <Grid
        item
        xs={6}
        md={6}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
          padding: '0rem 8rem 0rem 6rem',
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <SiteIcon />
        </Grid>

        {loginPage ? (
          <LoginForm onClickResetPassword={handleResetPassword} />
        ) : (
          <ResetPasswordForm onClickSignIn={handleSignIn} />
        )}

        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
          }}
        >
          <span
            style={{
              position: 'relative',
              color: '#6a6e83',
            }}
          >
            © 2022 Saige-QA. All rights reserved.
          </span>
        </Grid>
      </Grid>

      <Grid
        item
        xs={6}
        md={6}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#F5F6F8',
          padding: '0',
          borderRadius: '0px 24px 24px 0px',
        }}
      >
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <LoginImage />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
