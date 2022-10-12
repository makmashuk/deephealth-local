import '../styles/globals.css'
import { BreadcrumbProvider } from '../contexts/BreadcrumbContext';
function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <BreadcrumbProvider>
        <Component {...pageProps} />
    </BreadcrumbProvider>
  );
}

export default MyApp
