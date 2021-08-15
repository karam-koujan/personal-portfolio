import styled,{css} from "styled-components";
import {devices} from "../../../styles/media";
import { fadeIn ,slideX} from "../../../styles/animation";

const Section = styled.section`
 padding:4rem 2rem;
 @media(${devices.small}){
    padding-top:0rem;
   }
`
const ImgWrapper = styled.div`
 max-width:300px;
 transform :translateX(1000%);
 width:100%;
 ${({isVisible})=>isVisible?css`
   animation-delay:1.6s;
   animation-duration:.6s;
   animation-fill-mode:forwards;
   animation-name:${slideX};
   animation-timing-function:ease;
  `:null}
 & img{
     border-radius:3px;
 }
 @media(${devices.medium}){
   margin:0 auto;
}
`
const TechList = styled.ul`
 background-color:transparent;
 display:grid;
 grid-gap:2rem 1rem;
 grid-template-columns:repeat(3,1fr);
 margin:3rem 0;
 max-width:700px;
 padding:1rem 0 1rem 2.5rem; 
 position:relative;
 width:100%;
 &::before{
     background-color:var(--blue);
     content:"";
     height:60%;
     position:absolute;
     left:0;
     top:50%;
     transform:translateY(-50%);
     width:2px;
 }
 @media(${devices.medium}){
    max-width:100%;
    grid-gap-rows:1rem;
  @media(${devices.small}){
     grid-template-columns:repeat(2,1fr);

} 
`
const TechItem = styled.li`
 align-self:center;
 color:var(--primary);
 font-weight:300;
 list-style:none;
 position:relative;
 &::before{
   background-color:var(--blue);
   content:"";
   height:5px;
   left:-7%;
   position:absolute;
   top:30%;
   width:5px;
 }
`
const Text = styled.p`
 color:var(--primary);
 font-family:Roboto,sans-serif;
 font-size:1.1rem;
 line-height:30px;
 margin:0;
`
const TextWrapper = styled.div` 
 self-align:center;
 width:50%;
 opacity:0;
 transform :translateY(50%);
 ${({isVisible})=>isVisible?`
 transition :opacity .2s 1s ease-out , transform .4s 1s ease-out;
   opacity:1; 
   transform:translateY(0);
  `
   :null}
 @media(${devices.medium}){
    width:100%;
}
`

const Wrapper = styled.div`
 display:flex;
 flex-wrap:wrap;
 justify-content:space-between;

 @media(${devices.medium}){
     display:block;
 }
`

 
export {
    Section,
    ImgWrapper,
    TechList,
    TechItem,
    Text,
    TextWrapper,
    Wrapper
}

