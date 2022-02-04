import styled from "styled-components";
import {devices} from "../../../styles/media"



export const Section = styled.section`
 background-color:var(--primary);
 display:flex;
 justify-content:center;
 height:500px;
 padding-block:min(5rem,10vw);
 padding-top:0 2rem;
 position:relative;
 &::before{
  background-color:red;
  clip-path:polygon(100% 50%,100% 100%,100% 100%);
  bottom:-1px; 
  content:"";   
  height:40px;
  position:absolute;
  width:100%;
  }
  @media(${devices.small}){
    padding-left:0rem;
   }
`

