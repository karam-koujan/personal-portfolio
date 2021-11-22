import styled from "styled-components";
import {devices} from "../../../../styles/media";
import { fadeInDown } from "../../../../styles/animation";

const Hamburger = styled.div`
display:none;
@media(${devices.medium}){
    display:block;
}
`
const Header = styled.header`
 background-color:var(--primary);
 padding:0 0 1rem 0;
 transition:background-color .5s .5s ease;
 width:100%;
 
 ${({showNavBar})=>showNavBar?`
 background-color:white;
 position:fixed;
 transition:background-color .5s ease-out !important;
 z-index:1;
 `:null}
 
`

const MobileNavLink = styled.a`
 color:#5E5E5E;
 text-transform:uppercase;
 transition:color .2s ease-in-out;
 &:hover,&:focus{
     color:var(--primary);
 }
`
const MobileNavList = styled.ul`
background-color:white;
bottom:0%;
margin:0;
height:0vh;
left:0%;
overflow:auto;
padding:0rem 0 0 2rem;
position:fixed;
top:110%;
transition :height .5s  ease-out  ;
width:100%;
z-index:1;
${({showNavBar})=>showNavBar?`
height:100vh;
 transition :height .3s 1s ease-out !important;
}`:null}

@media(${devices.medium}){
  display:block;
}
 ::-webkit-scrollbar {
    width: 5px;
  }
   

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
const MobileNavItem = styled.li`
 border-bottom:1px solid var(--nav-link);
 font-size:1.3rem;
 font-weight:200;
 letter-spacing:1px;
 list-style :none;
 margin-bottom:2rem;
 padding:0 0 1rem 0;
`

const Nav = styled.nav`
 animation-duration:.4s;
 animation-fill-mode:forwards;
 animation-timing-function:linear;
 animation-name:${fadeInDown};
 display:flex;
 justify-content:space-between;
 opacity:0;
 padding:2.5rem 2rem;
 transform:translateY(-20%);
`

const NavLink = styled.a`
 color:var(--nav-link);
 font-size:.8rem;
 letter-spacing:2px;
 text-transform:uppercase;
 
`
const NavList = styled.ul`
display:flex;
justify-content:space-between;
margin:0;
 @media(${devices.medium}){
     display:none;
 }
`
const NavItem = styled.li`
 list-style :none;
 margin:0 2rem;
 position:relative;

 &::before,&::after{
     background-color:var(--blue);
     bottom:-0%;
     border-radius:6px;
     content:"";
     height:6px;
     left:50%;
     position:absolute;
     right:50%;
     transform:translate(-50%);
     transition:width .5s ease-in-out;
     width:0%;
 }
 &:hover::before, &:focus::after{
     width:100%;
 }
`



export{
    Hamburger,
    Header,
    MobileNavLink,
    MobileNavList,
    MobileNavItem,
    Nav,
    NavLink,
    NavList,
    NavItem,
}
