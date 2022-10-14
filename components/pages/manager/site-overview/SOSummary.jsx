import { ArrowNarrowDown, ArrowNarrowUp, Site, Search } from '../../../icons'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'

const Summary = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#FFF' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              padding: '25px 25px 12px 25px',
            }}
          >
            <h1 style={{ fontSize: '1.25rem' }}>Summary statistics</h1>

            {/* get options from api?? */}
            <select
              style={{
                border: 'unset',
                outline: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: '1rem',
                lineHeight: '20px',
                fontWeight: '700',
                color: '#44495B',
                marginLeft: '16px',
              }}
            >
              <option value="1mo">1 Month</option>
              <option value="2mo">2 Months</option>
            </select>
            {/* get options from api?? */}
          </div>

          <Box
            component="form"
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '25px',
              '& > :not(style)': { width: '272px' },
              '& .MuiInputBase-root': {
                border: '1px solid #EDEFF5',
                borderRadius: '8px',
              },
              '& .MuiInputBase-input': {
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '16px',
                color: '#A8B1CE',
                padding: '8px 8px 8px 0',
              },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl sx={{ width: '25ch' }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                startAdornment={
                  <InputAdornment position="start">
                    <Search edge="end" stroke="#A8B1CE"></Search>
                  </InputAdornment>
                }
                placeholder="Type to search..."
                sx={{ paddingLeft: '8px' }}
              />
            </FormControl>
          </Box>
        </div>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          style={{
            backgroundColor: '#fff',
            boxShadow: '0px 4px 14px rgba(243, 245, 250, 0.92)',
            borderRadius: '0px 0px 0px 44px',
            padding: '0 25px 20px 0',
          }}
        >
          <Grid md={2} style={{ height: '100%', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Site width="89" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '18px',
              }}
            >
              <select
                style={{
                  border: 'unset',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '0.875rem' /* 14px */,
                }}
              >
                <option value="0">Princeton Plain</option>
              </select>
            </div>
          </Grid>

          <Grid md={4}>
            <div
              style={{
                backgroundColor: '#F5F6F8',
                borderRadius: '12px',
                padding: '20px 20px 14px 20px',
              }}
            >
              <div
                style={{
                  color: '#44495B',
                  fontSize: '1rem' /* 16px */,
                  fontWeight: '700',
                  lineHeight: '20px',
                  marginBottom: '6px',
                }}
              >
                Top 3 positioning issues
              </div>
              <div
                className="fw-semi-bold fs-400 text-primary-250"
                style={{
                  fontWeight: '500',
                  fontSize: '0.875rem' /* 14px */,
                  color: '#6A6E83',
                  lineHeight: '20px',
                }}
              >
                Here you can see top 3 most frequent positioning issues present
                in the images.
              </div>
              <div
                style={{
                  paddingTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '0.875rem', color: '#A8B1CE' }}>
                  Calculated on:
                </span>
                &nbsp;
                <span style={{ fontSize: '0.875rem', color: '#6992FC' }}>
                  10251 images
                </span>
              </div>
            </div>
          </Grid>

          <Grid md={2}>
            <div
              style={{
                marginLeft: '1rem',
                background: '#fff',
                border: '1px solid #EDEFF5',
                borderRadius: '12px',
                padding: '16px 16px 12px 16px',
              }}
            >
              <div
                sx={{
                  fontWeight: '700',
                  fontSize: '0.875rem',
                  color: '#6A6E83',
                  lineHeight: '16px',
                }}
              >
                PNL diff {'>'} 1cm
              </div>
              <div
                style={{
                  fontWeight: '800',
                  fontSize: '3rem',
                  color: '#6992FC',
                  lineHeight: '48px',
                  marginTop: '4px',
                }}
              >
                42%
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '8px',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    borderRadius: '0.57rem',
                    fontSize: '0.75rem' /* 12px */,
                    lineHeight: '16px',
                    color: '#FF5B51',
                    backgroundColor: '#FFEAE9',
                    padding: '2px 7.5px',
                    marginRight: '8px',
                    columnGap: '2px',
                  }}
                >
                  <ArrowNarrowUp size="12" stroke="#FF5B51" /> +5%
                </span>
                <span style={{ fontSize: '0.75rem', color: '#A8B1CE' }}>
                  since last month
                </span>
              </div>
            </div>
          </Grid>
          <Grid md={2}>
            <div
              style={{
                marginLeft: '1rem',
                background: '#fff',
                border: '1px solid #EDEFF5',
                borderRadius: '12px',
                padding: '16px 16px 12px 16px',
              }}
            >
              <div
                sx={{
                  fontWeight: '700',
                  fontSize: '0.875rem',
                  color: '#6A6E83',
                  lineHeight: '16px',
                }}
              >
                Pec does not reach PNL
              </div>
              <div
                style={{
                  fontWeight: '800',
                  fontSize: '3rem',
                  color: '#6992FC',
                  lineHeight: '48px',
                  marginTop: '4px',
                }}
              >
                27%
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '8px',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    borderRadius: '0.57rem',
                    fontSize: '0.75rem' /* 12px */,
                    lineHeight: '16px',
                    color: '#00AD5A',
                    backgroundColor: '#C8F5E0',
                    padding: '2px 7.5px',
                    marginRight: '8px',
                    columnGap: '2px',
                  }}
                >
                  <ArrowNarrowDown size="12" stroke="#00AD5A" /> -8%
                </span>
                <span style={{ fontSize: '0.75rem', color: '#A8B1CE' }}>
                  since last month
                </span>
              </div>
            </div>
          </Grid>
          <Grid md={2}>
            <div
              style={{
                marginLeft: '1rem',
                background: '#fff',
                border: '1px solid #EDEFF5',
                borderRadius: '12px',
                padding: '16px 16px 12px 16px',
              }}
            >
              <div
                sx={{
                  fontWeight: '700',
                  fontSize: '0.875rem',
                  color: '#6A6E83',
                  lineHeight: '16px',
                }}
              >
                Nipple not in profile
              </div>
              <div
                style={{
                  fontWeight: '800',
                  fontSize: '3rem',
                  color: '#6992FC',
                  lineHeight: '48px',
                  marginTop: '4px',
                }}
              >
                12%
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '8px',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    borderRadius: '0.57rem',
                    fontSize: '0.75rem' /* 12px */,
                    lineHeight: '16px',
                    color: '#FF5B51',
                    backgroundColor: '#FFEAE9',
                    padding: '2px 7.5px',
                    marginRight: '8px',
                    columnGap: '2px',
                  }}
                >
                  <ArrowNarrowUp size="12" stroke="#FF5B51" /> +3%
                </span>
                <span style={{ fontSize: '0.75rem', color: '#A8B1CE' }}>
                  since last month
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Summary
