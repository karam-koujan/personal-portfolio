import styled,{css} from "styled-components";
import {devices} from "../../../styles/media";
import {fadeInUp} from "../../../styles/animation"


const Project = styled.div`
 background-color:var(--white);
 box-shadow:0px 1px 5px 0px rgba(0,0,0,.5) , 0px 0px 0px 0px rgba(0,0,0,1);
 color:var(--primary);
 padding:0rem 0 2rem 0;
 @media(max-width:1038px ){
   margin:0 auto 4rem auto;
   max-width:60%;
  }
 @media(${devices.medium}){
     margin:0 0 4rem 0;
     max-width:100%;
    }
`
const ProjectImg = styled.div`
 cursor:pointer;
 transition:transform .2s ease , box-shadow .2s ease;

 &:hover,&:focus{
    box-shadow: 8px 3px 40px 20px rgba(0,0,0,.2); 
    transform:scale(1.04);
     & img{
         border-radius:3px;
     }
`
const ProjectTitle = styled.h3`
 font-size:1rem;
 margin:0;
 padding:1rem;
 text-ransform:capitalize;
`
const Section = styled.section`
 padding:4rem 2rem;

 @media(${devices.small}){
    padding-top:0rem;
   }
`
const TechList = styled.ul`
align-items:center;
display:flex;
flex-wrap:wrap;
gap:.5rem;
 margin:0;
 padding:1rem .5rem;
`
const TechItem = styled.li`
 width:max-content;
 background-color:var(--blue);
 border-radius:2px;
 color:white;
 font-weight:100;
 list-style:none;
 margin:0;
 padding:.2rem .7rem;  

`
const Text = styled.p`
 line-height:22px;
 margin: 1.5rem 2rem;
`

const Wrapper = styled.div`
 display:grid;
 grid-gap:5%;
 grid-template-columns :repeat(auto-fit,minmax(30%,300px));
 opacity:0;
 padding:4rem 0;
 transform:translateY(20%);
 ${({isVisible})=>isVisible?css`
 animation-delay:1s;
 animation-duration:.6s;
 animation-fill-mode:forwards;
 animation-name :${fadeInUp}; 
 animation-timing-function:ease;  
 `:null}
 @media(max-width:1038px ){
  display:block;
 }
 
`

export {
    Project,
    ProjectImg,
    ProjectTitle,
    Section,
    TechList,
    TechItem,
    Text,
    Wrapper
}