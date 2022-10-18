import { useState, useForm, useCallback } from 'react';
import { Grid } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import GroupButton from "@components/common/GroupButton/GroupButton";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useFormik } from 'formik';

// import * as Icon from 'react-feather';

import { CloseWindow, Trash } from '@icons/index';
// import Checkboxes from '@components/common/Checkboxes/Checkboxes';

const tech_list = [
  {
    id: '1',
    name: 'Nipple not in profile',
    is_checked: true,
  },
  {
    id: '2',
    name: 'Nipple not in midline',
    is_checked: false,
  },
  {
    id: '3',
    name: 'Droopy breast',
    is_checked: true,
  },
  {
    id: '4',
    name: 'Not enough muscle',
    is_checked: false,
  },
  {
    id: '5',
    name: 'IMF not open',
    is_checked: false,
  },
]

const FilterExpanded = ( { data } ) => {

  const formik = useFormik({
    initialValues:{
      tech_list: tech_list
    },
    // add validation later
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
  });

  const [timeRange, setTimeRange] = useState("year");
  const [formData, setFormData] = useState(tech_list);

  const handleClose = (e) => {
    e.preventDefault();
    console.log('Close button was clicked.');
  }

  const handleClearAll = (e) => {
    e.preventDefault();
    console.log('Clear all was clicked.');
  }

  const handleTimeRange = (event) => {
    setTimeRange(event.target.value);
    console.log(timeRange)
  };

  // const handleApplyFilters = (e) => {
  //   e.preventDefault();
  //   console.log('Apply filters was clicked.');
  //   console.log(e);
  // }


  return (
    <Card sx={{ width: "330px", height: "100%", borderRadius: "0px", boxShadow: "none" }}>
      <CardContent>
        <Grid container spacing={0}>
          <Grid
            item xs={6} sm={6} md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '16px',
                color: '#44495B',
              }}
            >
              Filters
            </span>
          </Grid>
          <Grid
            item xs={6} sm={6} md={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <div
              style={{ cursor: 'pointer' }}
              onClick={handleClose}
            >
              <CloseWindow />
            </div>
          </Grid>
        </Grid>
      </CardContent>

      <div style={{ borderTop: "1px solid #EDEFF5" }}></div>

      <CardContent>
        <Grid container spacing={0}>
          <Grid
            item xs={12} sm={12} md={12}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '16px',
                color: '#44495B',
              }}
            >
              Time range
            </span>
          </Grid>
          <Grid
            item xs={12} sm={12} md={12}
            mt={1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <GroupButton buttons={["Year", "Quarter", "Month", "Week"]} buttonOnClickHandler={handleTimeRange} />
          </Grid>


          <Grid
            item xs={12} sm={12} md={12}
            mt={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '16px',
                color: '#44495B',
              }}
            >
              Positioning issues
            </span>
          </Grid>

          <form
            style={{ width: "100%" }}
            onSubmit={formik.handleSubmit}
          >
            <Grid
              item xs={12} sm={12} md={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {/* <Checkboxes data={data} checkboxOnChangeHandler={handleCheckboxes} /> */}
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row={false}>
                  {formData.map((data, index) => (
                    <FormControlLabel
                      key={index}
                      value="end"
                      control={
                        <Checkbox
                          checked={formik.values.tech_list[index].is_checked}
                          onChange={formik.handleChange}
                          name={`tech_list[${index}].is_checked`}
                          sx={{ color: '#44495B', p: '8px' }}
                        />
                      }
                      label={data.name}
                      labelPlacement="end"
                      sx={{
                        fontStyle: 'normal',
                        '& .MuiTypography-root': {
                          fontSize: '14px',
                          fontWeight: '700',
                          color: '#44495B',
                        },
                      }}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>

            <Grid
              item xs={12} sm={12} md={12}
              mt={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  cursor: 'pointer',
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}
                onClick={handleClearAll}
              >
                <span
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#6992FC',
                  }}
                >
                  Clear All
                </span>
                &nbsp;<Trash size={14} color={"#6992FC"} />
              </div>
            </Grid>

            <Grid
              item xs={12} sm={12} md={12}
              mt={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                style={{
                  padding: '4px 8px',
                  background: '#6992FC',
                  borderRadius: '12px',
                  color: 'white',
                  textTransform: 'none',
                  width: '100%',
                }}
                type="submit"
              >
                <span
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: 'white',
                    lineHeight: "24px"
                  }}
                >
                  Apply filters
                </span>
              </Button>
            </Grid>
          </form>

        </Grid>
      </CardContent>
    </Card>

  )
}

export default FilterExpanded