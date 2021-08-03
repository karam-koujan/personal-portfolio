import Link from "next/link";
import { Header as Wrapper,Nav,NavLink,NavList,NavItem} from "./style";

const Header = ()=>{
 return(
     <Wrapper >
     <Nav>
         <span>Logo</span>

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