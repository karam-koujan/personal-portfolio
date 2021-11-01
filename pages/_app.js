import { ThemeProvider } from 'styled-components';

import {GlobalStyle} from "../styles/globalstyle";
function MyApp({ Component, pageProps}) {
  return(
    <ThemeProvider theme={{primary:"fffff"}}>    
   <GlobalStyle/>
   <Component {...pageProps} />   
  </ThemeProvider>
  )
}



export default MyApp
