import styled from "styled-components";
import {devices} from "../../../styles/media"



export const Section = styled.section`
background-color:var(--primary);
display:flex;
 justify-content:center;
 padding-block:min(5rem,10vw);
 padding-top:0 2rem;
 position:relative;
 &::before{
  background-color:white;
  clip-path:polygon(100% 0%,0% 100%,100% 100%);
  bottom:-1px; 
  content:"";
  left:-40px;
  right:0px;   
  height:115px;
  position:absolute;
  }
  @media(${devices.small}){
    padding-left:0rem;
   }
`

