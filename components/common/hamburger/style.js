import styled from "styled-components";
import {devices} from "../../../styles/media"

const Icon = styled.span`
 background-color:var(--nav-link);
 border-radius:6px;
 display:block;
 height:3px;
 transition:transform .5s ease-out , opacity .6s ease-out;
 width:100%;
 ${({showNavBar})=>showNavBar?`
  transform : translateX(-100%);
  opacity:0;
 `:null}
`
const Wrapper = styled.div`
align-items:center;
display:none;
flex-direction:column;
justify-content:center;
position:relative;
height:26px;
width:26px;
 &::before,&::after{
     background-color:var(--nav-link);
     border-radius:6px;
     content:"";
     height:3px;
     position:absolute;
     transition :top .6s ease-out , bottom .6s ease-out , left .6s ease-out,transform .6s ease-out ;
     width:100%;
 }
 &::before{
     top:0%;
 }
 &::after{
     bottom:0%;
 }
 ${({showNavBar})=>showNavBar?`
 &::before{
     left:0%;
     top:50%;
     transform:rotate(45deg);
}
&::after{
    bottom:30%;
    transform:rotate(-45deg);
    left:0%;
}
`:null}
 @media(${devices.medium}){
     display:flex;
 }
`

export {
    Icon,
    Wrapper
}