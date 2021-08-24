import {Button} from "../../../templates";
import {blink,Climb,fadeInUp,typeWriter} from "../../../styles/animation.js";
import {devices} from "../../../styles/media";
import styled from "styled-components";
 

const GetInTouch = styled(Button)`
  max-width:210px;
  transition:background-color .2s ease-in-out , transform .2s ease-in-out;
  width:90%;
  &:hover,&:focus{
      background-color:transparent;
      border:2px solid var(--blue);
      transform:scale(1.1);
  }
  @media(${devices.small}){
    margin:0 auto;
  }
`

const Section = styled.section`
 background-color:var(--primary);
 display:flex;
 justify-content:center;
 height:500px;
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

const Text = styled.p`
 color:var(--nav-link);
 font-family:Roboto,sans-serif;
 font-size:1.12rem;
 line-height:35px;
 margin:2rem 0;
 
 
`
const Title = styled.h1`
  color:var(--main-title);
  font-size:clamp(2.5rem,8vw,4rem);
  font-weight:400;
  margin:0;
  position:relative;
  text-transform:capitalize;

 
`

const Wrapper = styled.div`
 max-width:800px;
 width:100%;
 transform:translateY(80%);
 animation-fill-mode:forwards;
 animation-timing-function:ease-out;
 animation-name:${fadeInUp};
 animation-duration:.3s;
 @media(${devices.medium}){
   padding:0  2rem;
 } 
 
` 

export {
    GetInTouch,
    Section,
    Text,
    Title,
    Wrapper
}