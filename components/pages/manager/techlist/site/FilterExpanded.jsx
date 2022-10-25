import { useState } from 'react';
import GroupButton from "@components/common/GroupButton/GroupButton";

import { Grid, Card, CardContent, Radio, Button, FormGroup, FormControl, FormControlLabel, MenuItem } from '@mui/material';

import { Formik, Form, Field } from "formik";
import { CloseWindow, Trash } from '@icons/index';

const FilterExpanded = ( { data, selectedData, setData, selectedPosData, setDisplayFilter, setClearAll } ) => {

  const [showModal, setShowModal] = useState(false);
  const [positionData, setPositionData] = useState(data.positioning_issues);
  const [timeRange, setTimeRange] = useState("year");
  const [selected, setSelected] = useState(selectedData);

  const handleClose = () => {
    setShowModal(!showModal);
    setDisplayFilter(!showModal)
  }

  const handleClearAll = (e) => {
    e.preventDefault();
    console.log('Clear all was clicked from filter');
    setClearAll(true)
    setData({
      positioning_issues: []
    })
  }

  const handleTimeRange = (event) => {
    console.log(timeRange)
    setTimeRange(event.target.value);
  };

  return (
    <Card
      sx={{ width: "330px", height: "92.75vh", borderRadius: "0px", boxShadow: "none", position: "absolute", right: "0px", top: "68px", zIndex: "1000", backgroundColor: "#fff", overflowY: "scroll" }}
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

          <Formik
            initialValues={{
              positioning_issues: selectedPosData.length == positionData.length ? positionDataWithAll : selectedPosData
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // const filteredFieldsCounts = {
              //   positioning_issues: values?.positioning_issues?.length ?? undefined,
              // };
              console.log('submitted values')
              console.log(values)
              setSubmitting(false);
              setSelected(values)
              setData(values)
              handleClose()
              resetForm();
            }}
            enableReinitialize
          >
            {({ values }) => (
              <Form style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                <div>
                  {/* Positioning Issues */}
                  <Grid
                    item xs={12} sm={12} md={12}
                    mt={1}
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
                      Positioning Issues
                    </span>
                  </Grid>
                  <Grid
                    item xs={12} sm={12} md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      role="group"
                      aria-labelledby="checkbox-group"
                      style={{
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      {positionData.map((positioning_issues, index) => (
                        <label
                          key={index}
                          style={{ display: "flex", alignItems: "center", lineHeight: "1.6" }}
                        >
                          <Field
                            type="checkbox"
                            name="positioning_issues"
                            value={positioning_issues}
                            style={{
                              marginRight: "10px",
                              width: "14px",
                              height: "14px",
                            }}
                          />
                          <span
                            style={{
                              fontStyle: 'normal',
                              fontWeight: 700,
                              fontSize: '14px',
                              color: '#44495B',
                            }}
                          >
                            {positioning_issues}
                          </span>
                        </label>
                      ))}
                    </div>
                  </Grid>
                </div>


                {/* clear all */}
                <div>
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
                </div>



                {/* submit button  */}
                <div
                  style={{
                    marginTop: '1rem',
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
                </div>

                </div>
              </Form>
            )}
          </Formik>
        </Grid>

      </CardContent>
    </Card>

  )
}

export default FilterExpanded