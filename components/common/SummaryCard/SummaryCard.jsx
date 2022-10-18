import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Zoom from '@mui/material/Zoom'
import { ArrowNarrowDown, ArrowNarrowUp } from '../../icons'
import styles from './SummaryCard.module.css'

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    followCursor
    TransitionComponent={Zoom}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#F5F6F8',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    borderRadius: '8px',
  },
}))

const SummaryCard = ({ title, amount, variance, increased, success }) => {
  return (
    <HtmlTooltip
      title={
        <>
          <Typography color="inherit" variant="body2">
            {title}
          </Typography>
          <Typography variant="body3">{'Click to see details'}</Typography>
        </>
      }
    >
      <Link underline="none" href="#">
        <div className={styles.card}>
          <div>
            <Typography
              variant="subtitle1"
              component="div"
              color="textSecondary"
              noWrap
            >
              {title}
            </Typography>
          </div>
          <div
            className={styles.card_content}
            style={{
              color: '#6992FC',
            }}
          >
            <Typography variant="h1" component="div">
              {amount}
            </Typography>
          </div>
          <div className={styles.card_footer}>
            <span
              className={
                success
                  ? `${styles.card_footer_chip} ${styles.success}`
                  : `${styles.card_footer_chip} ${styles.warning}`
              }
            >
              {increased ? (
                <ArrowNarrowUp
                  size="12"
                  stroke={success ? '#00ad5a' : '#ff5b51'}
                />
              ) : (
                <ArrowNarrowDown
                  size="12"
                  stroke={success ? '#00ad5a' : '#ff5b51'}
                />
              )}{' '}
              <Typography variant="subtitle2">{variance}</Typography>
            </span>
            <span className={styles.card_footer_label}>
              <Typography variant="subtitle2">since last month</Typography>
            </span>
          </div>
        </div>
      </Link>
    </HtmlTooltip>
  )
}

export default SummaryCard
