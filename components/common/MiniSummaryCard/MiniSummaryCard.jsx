import Typography from '@mui/material/Typography'
import styles from './MiniSummaryCard.module.css'

const MiniSummaryCard = ({ title, amount }) => {
  return (
    <div className={styles.card_item}>
      <Typography variant="body3" className={styles.card_item__title}>
        {title}
      </Typography>
      <Typography variant="h3" color="text.primary">
        {amount}
      </Typography>
    </div>
  )
}

export default MiniSummaryCard
