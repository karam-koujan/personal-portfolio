import styled from "styled-components";
import {blink,Climb,fadeInUp,typeWriter} from "../../../styles/animation.js";
import {devices} from "../../../styles/media";




const Heading = styled.h1`
  color:var(--main-title);
  font-size:clamp(2.5rem,8vw,4rem);
  font-weight:400;
  margin:0;
  position:relative;
  text-transform:capitalize;
`

const Text = styled.p`
  color:var(--nav-link);
 font-family:Roboto,sans-serif;
 font-size:1.12rem;
 line-height:35px;
 margin:2rem 0;
`
const Wrapper = styled.div`
max-width:800px;
width:100%;
transform:translateY(20%);
animation-fill-mode:forwards;
animation-timing-function:linear;
animation-name:${fadeInUp};
animation-duration:.4s;
@media(${devices.medium}){
  padding:0  2rem;
} 
`




export{
    Heading,
    Text,
    Wrapper
}