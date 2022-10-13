import '../styles/globals.css'
import { BreadcrumbProvider } from '../contexts/BreadcrumbContext';
import { muiCustomTheme } from "../styles/muiCustomTheme"
import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ThemeProvider theme={muiCustomTheme}>
    <BreadcrumbProvider>
        <Component {...pageProps} />
    </BreadcrumbProvider>
    </ThemeProvider>
  );
}

export default MyApp
