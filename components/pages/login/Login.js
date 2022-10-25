import * as React from 'react'
import { Grid, Box } from '@mui/material'
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
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        background: '#fff',
        margin: '0',
        padding: '2rem',
      }}
    >
      {/* left */}
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#FFF',
          padding: '0rem',
        }}
      >
        <Grid
          container
          spacing={2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '55%',
            height: '100%',
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
          <Grid
            item
            xs={12}
            md={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              // padding: '0 0 2rem 0',
            }}
          >
            {loginPage ? (
              <LoginForm onClickResetPassword={handleResetPassword} />
            ) : (
              <ResetPasswordForm onClickSignIn={handleSignIn} />
            )}
          </Grid>
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
      </Grid>

      {/* right */}
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#F5F6F8',
          borderRadius: '0px 24px 24px 0px',
          padding: '0rem',
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoginImage />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
