import Footer from "./footer";
import Header from "./header";


const Layout = ({children,data})=>{
  return(
      <>
       <Header data={data}/>
       {children}
       <Footer/>
      </>
  )
}


export default Layout ;