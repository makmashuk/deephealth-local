import { Grid } from '@mui/material'

export const StarredTooltip = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          background: '#44495B',
          boxShadow: '0px 12px 18px rgba(55, 63, 94, 0.2)',
          borderRadius: '12px',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '380px',
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          transition: 'all 2s ease-in-out',
        }}
      >
        <span
          style={{
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '20px',
            color: '#A8B1CE',
          }}
        >
          Starring an image means to add it to “Images to review” list. Use this
          feature to have a quick access to those list at any time.
        </span>
      </Grid>
    </>
  )
}