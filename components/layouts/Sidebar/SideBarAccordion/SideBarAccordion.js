import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Fade from '@mui/material/Fade';
import * as Icon from 'react-feather';
import SideBarTabs from "@components/layouts/Sidebar/SideBarTabs/SideBarTabs";
import NavIcon from './NavIcon';

export default function SimpleAccordion() {
  return (
    <Fade in={true} timeout={3500}>
      <Box sx={{ width: "100%" }}>

        <Accordion
          sx={{
            bgcolor: "#52586B",
          }}
        >
          <AccordionSummary
            expandIcon={<Icon.ChevronDown style={{ color: "#A8B1CE" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&.Mui-expanded": {
                minHeight: 0
              },
              "& .MuiAccordionSummary-content.Mui-expanded": {
                margin: "12px 0 12px 0"
              }
            }}
          >

            <div style={{ display: "flex", alignItems: "center" }}>
              <NavIcon/>

              <Box sx={{ display: "flex", flexDirection: "column", ml: ".75rem" }}>
                <span style={{ color: "#FFF", fontSize: "16px" }}>Princeton Plainsboro</span>
                <span style={{ color: "#A8B1CE", fontSize: "12px" }}>Site level</span>
              </Box>

            </div>

          </AccordionSummary>

          <AccordionDetails style={{ padding: "0px" }}>
            <SideBarTabs />
          </AccordionDetails>

        </Accordion>

      </Box>
    </Fade>
  );
}