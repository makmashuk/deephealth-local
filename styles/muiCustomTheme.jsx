import { createTheme, ThemeProvider } from "@mui/material/styles";

// MUI theme customization
export const muiCustomTheme = createTheme({
	typography: {
		fontFamily: "'Manrope', sans-serif",
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
		fontWeightExtraBold: 800,
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					backgroundColor: "#FFFFFF",
					borderBottom: "1px solid #EDEFF5",
					minHeight: "68px",
					flexDirection: "row",
					alignItems: "center",
					padding: "0 25px",
				},
			},
		},
		MuiBadge: {
			styleOverrides: {
				badge: {
					width: "20px",
					height: "16px",
					backgroundColor: "#6992fc",
					color: "#fff",
					borderRadius: "4px",
					right: "-8px",
				},
			},
		},
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
				disableTouchRipple: true,
			},
		},
	},
});
