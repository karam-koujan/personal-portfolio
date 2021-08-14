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
 background-color:var(--light-grey);
 display:grid;
 grid-column-gap:10%;
 grid-row-gap:1rem;
 grid-template-columns:  repeat(3,4fr);
 margin:3rem 0;
 max-width:480px;
 padding:1rem 2rem;
 position:relative;
 width:100%;
 &::before{
     background-color:var(--blue);
     content:"";
     height:70%;
     position:absolute;
     left:0;
     top:50%;
     transform:translateY(-50%);
     width:2px;
 }
 @media(${devices.medium}){
    max-width:100%;
  @media(${devices.small}){
} 
`
const TechItem = styled.li`
 grid-columns:1/3;
 color:var(--primary);
 display:flex;
 list-style:none;
 text-transform:capitalize;
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

