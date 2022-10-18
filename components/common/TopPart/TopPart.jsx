import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SummaryCard from '@components/common/SummaryCard/SummaryCard'
import TableInSelect from '@components/common/Table/TableInSelect/TableInSelect'
import Searchbox from '@components/common/Searchbox/Searchbox'
import Dropdown from '@components/common/Dropdown/Dropdown'
import { Site, Technologist, Practice } from '@icons/index'
import styles from './TopPart.module.css'

const TopPart = ({
  summarySite,
  summaryTech,
  summaryPractice,
  cards,
  practice,
  site,
  tech,
  withSearch,
}) => {
  return (
    <Box
      className={
        summarySite || summaryTech || summaryPractice
          ? `${styles.container} ${styles.summary}`
          : `${styles.container} ${styles.single_strip}`
      }
    >
      <Grid container>
        <Grid
          xs={12}
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: '#FFF',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              columnGap: '20px',
            }}
          >
            {(summarySite || summaryTech || summaryPractice) && (
              <>
                <Typography variant="h2" color="textPrimary">
                  Summary statistics
                </Typography>
                <Dropdown />
              </>
            )}
            {tech && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  columnGap: '12px',
                }}
              >
                <Technologist />
                <TableInSelect forTech bigSelect />
              </Box>
            )}
            {practice && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  columnGap: '12px',
                }}
              >
                <Practice />
                <TableInSelect forPractice bigSelect />
              </Box>
            )}
          </div>

          {withSearch && (
            <div
              style={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <Searchbox />
            </div>
          )}
        </Grid>
      </Grid>

      {(summarySite || summaryTech || summaryPractice) && (
        <Grid container sx={{ rowGap: '1rem', paddingTop: '15px' }}>
          <Grid
            xs={12}
            sm={5}
            md={2}
            sx={{
              padding: '0 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Site />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {summarySite && <TableInSelect forSite />}
              {summaryPractice && <TableInSelect forPractice />}
              {summaryTech && <TableInSelect forTech />}
            </div>
          </Grid>
          {summaryTech && (
            <Grid md={1} className={styles.small_card}>
              <div className={styles.small_card__item}>
                <div>
                  <Typography variant="body3" sx={{ color: '#A8B1CE' }}>
                    Total studies
                  </Typography>
                </div>
                <div>
                  <Typography variant="h3" color="text.primary">
                    10 253
                  </Typography>
                </div>
              </div>
              <div className={styles.small_card__item}>
                <div>
                  <Typography variant="body3" sx={{ color: '#A8B1CE' }}>
                    Studies per day
                  </Typography>
                </div>
                <div>
                  <Typography variant="h3" color="text.primary">
                    8.3
                  </Typography>
                </div>
              </div>
              <div className={styles.small_card__item}>
                <div>
                  <Typography variant="body3" sx={{ color: '#A8B1CE' }}>
                    Images per study
                  </Typography>
                </div>
                <div>
                  <Typography variant="h3" color="text.primary">
                    2.1
                  </Typography>
                </div>
              </div>
            </Grid>
          )}
          <Grid xs={12} sm={7} md={summaryTech ? 3 : 4}>
            <div
              style={{
                backgroundColor: '#F5F6F8',
                borderRadius: '12px',
                padding: '20px 20px 14px 20px',
                height: '100%',
              }}
            >
              <div
                style={{
                  marginBottom: '6px',
                }}
              >
                <Typography variant="h3" color="text.primary">
                  Top 3 positioning issues
                </Typography>
              </div>
              <div>
                <Typography variant="body1" color="text.secondary">
                  Here you can see top 3 most frequent positioning issues
                  present in the images.
                </Typography>
              </div>
              <div
                style={{
                  paddingTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.875rem',
                    color: '#A8B1CE',
                    lineHeight: '20px',
                  }}
                >
                  Calculated on:
                </span>
                &nbsp;
                <span
                  style={{
                    fontSize: '0.875rem',
                    color: '#6992FC',
                    fontWeight: '700',
                  }}
                >
                  10251 images
                </span>
              </div>
            </div>
          </Grid>

          {cards.map((card) => (
            <Grid xs={12} sm={4} md={2} key={card.id}>
              <SummaryCard {...card} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default TopPart
