import Footer from "./footer";
import Header from "./header";


const Layout = ({children,data})=>{
  return(
      <>
       <Header data={data}/>
       <main>
       {children}
       </main>
       <Footer />
      </>
  )
}


export default Layout ;