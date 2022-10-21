import * as React from 'react'
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormHelperText,
} from '@mui/material'

import { useRouter } from 'next/router'
import {
  Visibility,
  ValidationAlertIcon,
} from '@icons/index'
import { useFormik } from 'formik'
import * as yup from 'yup'

const ResetPasswordForm = ({ onClickSignIn }) => {

  const [emailReset, setEmailReset] = React.useState('');
  const [resetPassForm, setResetPassForm] = React.useState(true);

  const handleSignIn = () => {
    onClickSignIn(true)
  }

  const validationSchema = yup.object({
    email_reset: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  })

  const ResetForm = () => {
    const formik = useFormik({
      initialValues: {
        email_reset: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log('reset password form submitted')
        console.log(values)
        setResetPassForm(false);
        setEmailReset(values.email_reset);
      },
    })

    return (
      <Grid
        container
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0 2rem 0 0',
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '0 0 4rem 0',
          }}
        >
          <span
            style={{
              fontStyle: 'normal',
              fontWeight: '800',
              fontSize: '24px',
              lineHeight: '24px',
              color: '#44495B',
            }}
          >
            Reset Password
          </span>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingBottom: '1rem',
          }}
        >
          <span
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'flex-end',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '20px',
              color: '#44495B',
            }}
          >
            Enter your e-mail and we will send you new password for your account
          </span>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <form
            action=""
            style={{
              width: '100%',
              paddingBottom: '6rem'
            }}
            onSubmit={formik.handleSubmit}
          >
            <Grid
              item
              xs={12}
              md={12}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontWeight: '700',
                  fontSize: '14px',
                  lineHeight: '16px',
                  color: '#44495b',
                }}
              >
                E-mail
              </span>
              <TextField
                id="input-with-icon-textfield"
                label=""
                variant="outlined"
                fullWidth
                style={{
                  background: 'white',
                  width: '100%',
                  height: '36px',
                  borderRadius: '12px',
                  marginTop: '0.5rem',
                }}
                name="email_reset"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter E-mail"
                InputProps={{
                  sx: {
                    height: 36,
                    fontSize: 14,
                    color: '#000',
                    borderRadius: '12px',
                    border: '1px solid #EDEFF5',
                  },
                }}
                error={formik.touched.email_reset && Boolean(formik.errors.email_reset)}
              />
              {
                formik.touched.email_reset && formik.errors.email_reset ? (
                  <FormHelperText error id="email-reset-error">
                    <span style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}><ValidationAlertIcon />&nbsp;{formik.errors.email_reset}</span>
                  </FormHelperText>
                ) : null
              }
            </Grid>

            <Grid
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: '2rem',
              }}
              item
              xs={12}
              md={12}
            >
              <Grid
                item
                xs={6}
                md={6}
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '16px',
                    textAlign: 'right',
                    color: '#6992FC',
                    cursor: 'pointer',
                  }}
                  onClick={handleSignIn}
                >Back to sign in</span>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
              >
                <button
                  style={{
                    background: '#6992fc',
                    borderRadius: '12px',
                    fontSize: '16px',
                    width: '100%',
                    border: 'none',
                    color: '#fff',
                    padding: '10px 5px',
                    cursor: 'pointer',
                  }}
                  type="submit"
                >
                  Request new password
                </button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    )
  }

  const ResetFormSuccess = () => {
    return (
      <Grid
        container
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0 2rem 0 0',
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          mt={12}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'flex-end',
              fontStyle: 'normal',
              fontWeight: '800',
              fontSize: '24px',
              lineHeight: '24px',
              color: '#44495B',
            }}
          >
            Success
          </span>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingBottom: '1rem',
          }}
        >
          <span
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'flex-end',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '20px',
              color: '#44495B',
            }}
          >
            Password was sent to {emailReset}. Please check your inbox and use new password to sign in to the system.
          </span>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
          }}
          mb={12}
        >
          <button
            style={{
              background: '#6992fc',
              borderRadius: '12px',
              fontSize: '16px',
              width: '100%',
              border: 'none',
              color: '#fff',
              padding: '10px 5px',
              cursor: 'pointer',
            }}
            onClick={handleSignIn}
          >
            Go to sign in
          </button>
        </Grid>
      </Grid>
    )
  }

  const router = useRouter()

  return (
    <>
      {
        resetPassForm ? <ResetForm /> : <ResetFormSuccess />
      }
    </>
  )
}

export default ResetPasswordForm