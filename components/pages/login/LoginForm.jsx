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
  VisibilityOff,
  ValidationAlertIcon,
} from '@icons/index'
import { useFormik } from 'formik'
import * as yup from 'yup'

const LoginForm = ({ onClickResetPassword }) => {

  const handleResetPassword = () => {
    onClickResetPassword(true)
  }
  
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('login form submitted')
      console.log(values)
    },
  })

  const router = useRouter()

  return (
    <>
      <Grid
        item
        xs={12}
        md={12}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
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
          Sign in
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
              name="email"
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
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            {
              formik.touched.email && formik.errors.email ? (
                <FormHelperText error id="email-error">
                  <span style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}><ValidationAlertIcon />&nbsp;{formik.errors.email}</span>
                </FormHelperText>
              ) : null
            }
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            mt={1}
          >
            <span
              style={{
                display: 'inline-block',
                fontWeight: '700',
                fontSize: '14px',
                lineHeight: '16px',
                color: '#44495b',
                marginTop: '0.5rem',
              }}
            >
              Password
            </span>

            <OutlinedInput
              id="outlined-adornment-password"
              fullWidth
              style={{
                background: 'white',
                height: '36px',
                borderRadius: '12px',
                marginTop: '0.5rem'
              }}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter password"
              type={formValues.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {formValues.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            {
              formik.touched.password && formik.errors.password ? (
                <FormHelperText error id="password-error">
                  <span style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}><ValidationAlertIcon />&nbsp;{formik.errors.password}</span>
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
              <input type="checkbox" id="remember" name="remember" />
              <label
                style={{
                  paddingLeft: '0.75rem',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#44495B',
                }}
                htmlFor="remember"
              >
                Remember me
              </label>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '16px',
                  textAlign: 'right',
                  color: '#6992fc',
                  cursor: 'pointer',
                }}
                onClick={handleResetPassword}
              >
                Forgot Password?
              </span>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            mt={3}
          >
            <button
              style={{
                background: '#6992fc',
                borderRadius: '12px',
                width: '100%',
                border: 'none',
                color: '#fff',
                padding: '10px 5px',
                cursor: 'pointer',
              }}
              type="submit"
              // onClick={(e) => {
              //   e.preventDefault()
              //   router.push('/practice')
              // }}
            >
              Login
            </button>
          </Grid>
        </form>
      </Grid>
    </>
  )
}

export default LoginForm