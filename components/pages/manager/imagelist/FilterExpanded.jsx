import { useState } from 'react';
import GroupButton from "@components/common/GroupButton/GroupButton";

import { Grid, Card, CardContent, Radio, Button, FormGroup, FormControl, FormControlLabel, MenuItem, Checkbox } from '@mui/material';

import { Formik, Form, Field } from "formik";
import { CloseWindow, Trash } from '@icons/index';

const FilterExpanded = ( { data, selectedData, setData, selectedPosData, setDisplayFilter, setClearAll } ) => {

  const [showModal, setShowModal] = useState(false);
  const [qualityData, setQualityData] = useState(data.quality);
  const [viewsData, setViewsData] = useState(data.views);
  const [flagData, setFlagData] = useState(data.flag);
  const [densityData, setDensityData] = useState(data.density);
  const [positionData, setPositionData] = useState(data.positioning_issues);
  const [timeRange, setTimeRange] = useState("year");
  const [selected, setSelected] = useState(selectedData);

  const positionDataWithAll = [...positionData, 'Select All'];

  const handleClose = () => {
    setShowModal(!showModal);
    setDisplayFilter(!showModal)
  }

  const handleClearAll = (e) => {
    e.preventDefault();
    console.log('Clear all was clicked from filter');
    setClearAll(true)
    setData({
      quality: [],
      views: [],
      flag: [],
      density: [],
      positioning_issues: []
    })
  }

  const handleTimeRange = (event) => {
    console.log(timeRange)
    setTimeRange(event.target.value);
  };

  const handleOnChange = (event) => {
    console.log("Form::onChange");
    console.log(event.target.value)
    if (event.target.value) {
      setData({
        quality: selected.quality,
        views: selected.views,
        flag: selected.flag,
        density: selected.density,
        positioning_issues: positionDataWithAll
      })
    }
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
              quality: selected.quality,
              views: selected.views,
              flag: selected.flag,
              density: selected.density,
              positioning_issues: selectedPosData.length == positionData.length ? positionDataWithAll : selectedPosData
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // const filteredFieldsCounts = {
              //   quality: values?.quality?.length ?? undefined,
              //   views: values?.views?.length ?? undefined,
              //   flag: values?.flag?.length ?? undefined,
              //   density: values?.density?.length ?? undefined,
              //   positioning_issues: values?.positioning_issues?.length ?? undefined,
              // };
              console.log('submitted values')
              console.log(values)
              // if 'All' found in values.positioning_issues array then select all
              values.positioning_issues.forEach((pos, i) => {
                if (pos === 'Select All') {
                  console.log(selectedPosData)
                  console.log('Select All detected')
                  values.positioning_issues = positionData
                }
              });

              setSubmitting(false);
              setSelected(values)
              setData(values)
              handleClose()
              resetForm();
            }}
            enableReinitialize
          >
            {({ values }) => (
              <Form
                style={{ width: "100%" }}
                onChange={handleOnChange}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                <div>
                  {/* Quality */}
                  <Grid
                    item xs={12} sm={12} md={12}
                    mt={1.5}
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
                      Quality
                    </span>
                  </Grid>
                  <Grid
                    item xs={12} sm={12} md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginTop: "0.25rem",
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
                      {qualityData.map((quality, index) => (
                        <label
                          key={index}
                          style={{ display: "flex", alignItems: "center", lineHeight: "1.6" }}
                        >
                          <Field
                            type="checkbox"
                            name="quality"
                            value={quality}
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
                            {quality}
                          </span>
                        </label>
                      ))}
                    </div>
                  </Grid>

                  {/* views */}
                  <Grid
                    item xs={12} sm={12} md={12}
                    mt={1.5}
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
                      Views
                    </span>
                  </Grid>
                  <Grid
                    item xs={12} sm={12} md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginTop: "0.25rem",
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
                      {viewsData.map((view, index) => (
                        <label
                          key={index}
                          style={{ display: "flex", alignItems: "center", lineHeight: "1.6" }}
                        >
                          <Field
                            type="checkbox"
                            name="views"
                            value={view}
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
                            {view}
                          </span>
                        </label>
                      ))}
                    </div>
                  </Grid>

                  {/* Flag */}
                  <Grid
                    item xs={12} sm={12} md={12}
                    mt={1.5}
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
                      Flag
                    </span>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{
                      marginTop: "0.25rem",
                    }}
                  >
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                      }}
                    >
                      {flagData.map((flag, index) => (
                        <label
                          key={index}
                          style={{ display: "flex", alignItems: "center", lineHeight: "1.6", paddingRight: '1rem' }}
                        >
                          <Field
                            type="radio"
                            name="flag"
                            value={flag}
                            style={{
                              marginRight: "8px",
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
                            {flag}
                          </span>
                        </label>
                      ))}
                    </div>
                  </Grid>

                  {/* Density */}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    mt={1.5}
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
                      Density
                    </span>
                  </Grid>
                  <Grid
                    item xs={12} sm={12} md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginTop: "0.25rem",
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
                      {densityData.map((density, index) => (
                        <label
                          key={index}
                          style={{ display: "flex", alignItems: "center", lineHeight: "1.6" }}
                        >
                          <Field
                            type="checkbox"
                            name="density"
                            value={density}
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
                            {density}
                          </span>
                        </label>
                      ))}
                    </div>
                  </Grid>

                  {/* Positioning Issues */}
                  <Grid
                    item xs={12} sm={12} md={12}
                    mt={1.5}
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
                      marginTop: "0.25rem",
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
                      <label
                          key={0}
                          style={{ display: "flex", alignItems: "center", lineHeight: "1.6" }}
                        >
                          <Field
                            type="checkbox"
                            name="positioning_issues"
                            value="Select All"
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
                            Select All
                          </span>
                      </label>
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