import { useState } from 'react';
import { Grid } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import GroupButton from "@components/common/GroupButton/GroupButton";
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';

import { CheckboxWithLabel } from 'formik-mui';
import { useFormik, Formik, Form, Field, FormikProvider } from "formik";
import { CloseWindow, Trash } from '@icons/index';

const FilterExpanded = ( { data, checkedData, setDisplayFilter, setData, setClearAll } ) => {

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(data);
  const [checked, setChecked] = useState(checkedData);
  const [timeRange, setTimeRange] = useState("year");

  let checkedKeys = checked.map((item) => item.key);
  const [checkedKeysX, setCheckedKeysX] = useState(checkedKeys);


  const formik = useFormik({
    initialValues: {
      keys: checkedKeysX
    },
    onSubmit: (values) => {
      let checkedItems = values.keys.map((key) => {
        return data.find((item) => item.key === key);
      });
      console.log("checkedItems", checkedItems)
      setChecked(checkedItems);
      setData(checkedItems);
      setCheckedKeysX(checkedItems.map((item) => item.key));
      console.log(checkedKeysX)
      handleClose();
    },
    enableReinitialize: true,
  });

  const handleClose = () => {
    setShowModal(!showModal);
    setDisplayFilter(!showModal)
  }

  const handleClearAll = (e) => {
    e.preventDefault();
    console.log('Clear all was clicked from filter');
    setClearAll(true)
    setData([])
    setChecked([])
    setCheckedKeysX({
      keys: []
    })
  }

  const handleTimeRange = (event) => {
    console.log(timeRange)
    setTimeRange(event.target.value);
  };

  return (
    <Card
      sx={{ width: "330px", height: "100%", borderRadius: "0px", boxShadow: "none", position: "absolute", right: "0px", top: "68px", zIndex: "1000", backgroundColor: "#fff" }}
    >
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

          <FormikProvider value={formik}>
            <Form
              onSubmit={formik.handleSubmit}
              style={{ width: "100%" }}
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
                <FormControl
                  component="fieldset"
                  style={{ display: "flex" }}>
                  <FormGroup
                    // do not disable after submit
                    // disabled={formik.isSubmitting}
                  >
                    {formData.map(opt => (
                      <Field
                        type="checkbox"
                        component={CheckboxWithLabel}
                        name="keys"
                        key={opt.key}
                        value={opt.key}
                        Label={{ label: opt.title }}
                        onChange={formik.handleChange}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
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
            </Form>
          </FormikProvider>
        </Grid>

      </CardContent>
    </Card>

  )
}

export default FilterExpanded