import Link from "next/link";
import Image from "next/image";
import hamburger from "../../../../assets/icons/hamburger.svg";
import { Header as Wrapper,Nav,NavLink,NavList,NavItem, Hamburger} from "./style";

const Header = ()=>{
 return(
     <Wrapper >
     <Nav>
         <span>Logo</span>
      <Hamburger>
          <Image src={hamburger} height={26} width={26}/>
          </Hamburger> 
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
                  <Link href="#contacts">
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