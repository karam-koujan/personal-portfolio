import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//import hamburger from "../../../../assets/icons/hamburger.svg";
import Hamburger from "../../hamburger";
import { Header as Wrapper,MobileNavLink,MobileNavList,MobileNavItem,Nav,NavLink,NavList,NavItem} from "./style";

const Header = ({data})=>{
    const [showNavBar,setShowNavBar] = useState(false);
    useEffect(()=>{
         document.body.onscroll = ()=>setShowNavBar(false)
    },[showNavBar])
 return(
     <Wrapper showNavBar={showNavBar} >
     <Nav showNavBar={showNavBar} >
         <span>Logo</span>
      <Hamburger showNavBar={showNavBar} handleShowNavBar={_=>setShowNavBar(!showNavBar)} />
      <MobileNavList showNavBar={showNavBar}>
      {data.map((navigationItem,idx)=>(
              <MobileNavItem key={idx} tabIndex="0">
                  <Link href={`#${navigationItem}`} >
                      <MobileNavLink onClick={_=>setShowNavBar(false)}>
                         {navigationItem}
                      </MobileNavLink>
                  </Link>
              </MobileNavItem>
      ))}
              
          </MobileNavList>
          
         <NavList>
             {data.map((navigationItem,idx)=>(

              <NavItem key={idx} tabIndex="0">
                  <Link href={`#${navigationItem}`}>
                      <NavLink>
                          {navigationItem}
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