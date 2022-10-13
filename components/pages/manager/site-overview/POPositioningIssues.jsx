import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as Icon from 'react-feather';

import ProgressLineSingle from "@components/common/ProgressLineSingle";

export default function POPositioningIssues() {
  return (
    <Card
      sx={{ minWidth: 316, borderRadius: "12px" }}
    >
      <CardContent
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <span
            style={{
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              color: '#44495B',
            }}
          >Positioning issues
          </span>
        </Box>

        <Box sx={{ py:"1.25rem" }}>
          <ProgressLineSingle label="Nipple not in profile" width="42" size="medium" type="horizontal" bgColor="skyblue" />
          <ProgressLineSingle label="Dropy breast" width="27" size="medium" type="horizontal" bgColor="skyblue" />
          <ProgressLineSingle label="Not enough muscle" width="12" size="medium" type="horizontal" bgColor="skyblue" />
          <ProgressLineSingle label="Tissue cut off" width="7" size="medium" type="horizontal" bgColor="skyblue" />
          <ProgressLineSingle label="IMF not open" width="5" size="medium" type="horizontal" bgColor="skyblue" />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <Icon.Info size={14} color={"#A8B1CE"} />
          &nbsp;
          <span
              style={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "12px",
                color: "#A8B1CE",
              }}
            >Calculated of 10548 images (95% of total)
          </span>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            mt: "1.5rem",
          }}
        >
          <span
              style={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "14px",
                color: "#6992FC",
                cursor: "pointer",
              }}
            >View detailed breakdown {">"}
          </span>
        </Box>

      </CardContent>
    </Card>
  );
}
