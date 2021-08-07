import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import hamburger from "../../../../assets/icons/hamburger.svg";
import { Header as Wrapper,Hamburger,MobileNavLink,MobileNavList,MobileNavItem,Nav,NavLink,NavList,NavItem} from "./style";

const Header = ()=>{
    const [showNavBar,setShowNavBar] = useState(false);
    
 return(
     <Wrapper showNavBar={showNavBar} >
     <Nav showNavBar={showNavBar}>
         <span>Logo</span>
      <Hamburger onClick={_=>setShowNavBar(!showNavBar)}>
          <Image src={hamburger} height={26} width={26}/>
          </Hamburger> 

          <MobileNavList showNavBar={showNavBar}>
              <MobileNavItem>
                  <Link href="#home">
                      <MobileNavLink>
                          Hom
                      </MobileNavLink>
                  </Link>
              </MobileNavItem>
              <MobileNavItem>
                  <Link href="#home">
                      <MobileNavLink>
                          Home
                      </MobileNavLink>
                  </Link>
              </MobileNavItem>
              <MobileNavItem>
                  <Link href="#home">
                      <MobileNavLink>
                          Home
                      </MobileNavLink>
                  </Link>
              </MobileNavItem>
              <MobileNavItem>
                  <Link href="#about">
                      <MobileNavLink>
                          About
                      </MobileNavLink>
                  </Link>
              </MobileNavItem>
              <MobileNavItem>
                  <Link href="#home">
                      <MobileNavLink>
                          Home
                      </MobileNavLink>
                  </Link>
              </MobileNavItem>
          </MobileNavList>
          
         <NavList>
              <NavItem>
                  <Link href="#home">
                      <NavLink>
                          Home
                      </NavLink>
                  </Link>
              </NavItem>
              <NavItem>
                  <Link href="#about">
                      <NavLink>
                          About
                      </NavLink>
                  </Link>
              </NavItem>
              <NavItem>
                  <Link href="#projects">
                      <NavLink>
                          Projects
                      </NavLink>
                  </Link>
              </NavItem>
              <NavItem>
                  <Link href="/contact">
                      <NavLink>
                          Contacts
                      </NavLink>
                  </Link>
              </NavItem>
         </NavList>
     </Nav>

     </Wrapper>
 )
}


export default Header ;