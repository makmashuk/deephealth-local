/**
 * This is the component that pops up with the actual table when the select-like element is clicked
 */

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Searchbox from '@components/common/Searchbox/Searchbox'
import { AlertTriangle } from '@icons/index'
import styles from './DropdownTable.module.css'

const DropdownTable = ({
  selected,
  handleSelection,
  tableDataBase,
  columns,
  handleSearch,
}) => {
  return (
    <Card sx={{ minWidth: 476, padding: 0, transition: 'all 0.3s' }}>
      <CardHeader
        title={`List of ${columns[0].header}`}
        sx={{ padding: '20px 20px 12px' }}
        titleTypographyProps={{ variant: 'h3', color: 'text.primary' }}
      />
      <div style={{ padding: '0 20px 16px' }}>
        <Searchbox fullWidth handleSearch={handleSearch} />
      </div>
      <CardContent sx={{ padding: 0 }}>
        {tableDataBase.length > 0 ? (
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader className={styles.table}>
              <TableHead>
                <TableRow className={styles.row}>
                  {columns.map((column) => (
                    <TableCell key={column.id} className={styles.cell_th}>
                      <Typography variant="h3" color="text.secondary">
                        {column.header}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableDataBase.map((row) => {
                  return (
                    <TableRow
                      key={row.id}
                      className={styles.row}
                      onClick={(e) => handleSelection(e)}
                    >
                      {Object.keys(row)
                        .filter((el) => el !== 'id')
                        .map((cell, idx) => (
                          <TableCell key={idx} className={styles.cell_td}>
                            <Typography
                              variant="body1"
                              noWrap
                              rowid={row.id}
                              className={
                                row.id == selected ? `${styles.selected}` : ''
                              }
                            >
                              {row[cell]}
                            </Typography>
                          </TableCell>
                        ))}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography
            variant="body2"
            color="text.error"
            sx={{
              p: '0 0 10px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AlertTriangle sx={{ fontSize: '16px' }} /> Sorry, no matching data
            found!
          </Typography>
        )}
      </CardContent>
      {tableDataBase && Object.keys(tableDataBase[0])[1] === 'sites' && (
        <CardActions
          sx={{ padding: '24px 20px 22px', borderTop: '1px solid #EDEFF5' }}
        >
          <Button variant="contained" size="medium" disableElevation fullWidth>
            Compare Sites
          </Button>
        </CardActions>
      )}
    </Card>
  )
}

export default DropdownTable
