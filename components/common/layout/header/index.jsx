import { useEffect, useState } from "react";
import Link from "next/link";
import Hamburger from "../../hamburger";
import { Header as Wrapper,MobileNavLink,MobileNavList,MobileNavItem,Nav,NavLink,NavList,NavItem} from "./style";
import Logo from  "../../logo"
const Header = ({data})=>{
    const [showNavBar,setShowNavBar] = useState(false);
    /*
    useEffect(()=>{
         document.body.onscroll = ()=>setShowNavBar(false)
    },[showNavBar])
    */
 return(
     <Wrapper showNavBar={showNavBar} >
     <Nav showNavBar={showNavBar} >
      <Logo/>
      <Hamburger showNavBar={showNavBar} handleShowNavBar={_=>setShowNavBar(!showNavBar)} />
      <MobileNavList showNavBar={showNavBar}>
      {data.map((navigationItem,idx)=>(
              <MobileNavItem key={idx} tabIndex="0">
                  <Link href={navigationItem.link} >
                      <MobileNavLink onClick={_=>setShowNavBar(false)}>
                         {navigationItem.text}
                      </MobileNavLink>
                  </Link>
              </MobileNavItem>
      ))}
              
          </MobileNavList>
          
         <NavList>
             {data.map((navigationItem,idx)=>(

              <NavItem key={idx} tabIndex="0">
                  <Link href={navigationItem.link}>
                      <NavLink>
                          {navigationItem.text}
                      </NavLink>
                  </Link>
              </NavItem>
             ))}
         </NavList>
     </Nav>

     </Wrapper>
 )
}


export default Header ;