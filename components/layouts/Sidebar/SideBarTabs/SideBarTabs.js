import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from "next/router";


import SearchBox from "@components/layouts/Sidebar/SideBarSearch/SideBarSearch";
import styles from "@components/layouts/Sidebar/SideBarTabs/sidebartabs.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: '#52586B', width: "100%" }}>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
        sx={{ minHeight: "40px", height: "40px", textAlign: "center", borderTop: "1px solid #63697C", borderBottom: "1px solid #63697C" }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#FFF"
          }
        }}
      >
        <Tab
          label="Practice"
          sx={{ fontSize: "12px", color: "#FFF", py: "0px", minHeight: "40px", height: "40px", textTransform: "none" }}
          {...a11yProps(0)}
        />
        <Tab
          label="Site"
          sx={{ fontSize: "12px", color: "#FFF", py: "0px", minHeight: "40px", height: "40px", textTransform: "none" }}
          {...a11yProps(1)}
        />
        <Tab
          label="Technologist"
          sx={{ fontSize: "12px", color: "#FFF", py: "0px", minHeight: "40px", height: "40px", textTransform: "none" }}
          {...a11yProps(2)}
        />
      </Tabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box sx={{ p: 1 }}>
          <SearchBox />

          <ul className={styles.list}>
            <li onClick={()=> router.push('/manager/techlist/practice')} className={styles.listItem}>NYC CLinic Practice</li>
            <li onClick={()=> router.push('/manager/techlist/practice')} className={styles.listItem}>Detroit Practice</li>
            <li onClick={()=> router.push('/manager/techlist/practice')} className={styles.listItem}>Item Three</li>
          </ul>

        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Box sx={{ p: 1 }}>
          <SearchBox />

          <ul className={styles.list}>
            <li onClick={()=> router.push('/manager/techlist/site')} className={styles.listItem}>Princeton Plainsborough</li>
            <li onClick={()=> router.push('/manager/techlist/site')} className={styles.listItem}>Detroit Radiology</li>
            <li className={styles.listItem}>NYC Clinics of women health</li>
            <li className={styles.listItem}>California University Hospital</li>
          </ul>

        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Box sx={{ p: 1 }}>
          <SearchBox />

          <ul className={styles.list}>
            <li className={styles.listItem}>Eddie Guerrero</li>
            <li className={styles.listItem}>Ronald Trueman</li>
            <li className={styles.listItem}>Jason Derulo</li>
            <li className={styles.listItem}>Peggie Briggs</li>
            <li className={styles.listItem}>Joannah Bronson</li>
            <li className={styles.listItem}>Carolina McKenzie</li>
          </ul>

        </Box>
      </TabPanel>

    </Box>
  );
}
