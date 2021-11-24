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
  background-color:transparent;
  border-top:0px solid white;
  border-left:1400px solid transparent;
  border-bottom:70px solid white;
  border-right:0px solid white;
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

