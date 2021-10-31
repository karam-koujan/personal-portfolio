import { ThemeProvider } from 'styled-components';

import {GlobalStyle} from "../styles/globalstyle";
function MyApp({ Component, pageProps}) {
  return(    
   <ThemeProvider>
   <GlobalStyle/>
   <Component {...pageProps} />   
   </ThemeProvider>
  
  )
}



export default MyApp
