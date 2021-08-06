import styled from "styled-components";
import {devices} from "../../../styles/media";


const Section = styled.section`
 padding:4rem 2rem;
`
const ImgWrapper = styled.div`
 max-width:300px;
 width:100%;
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
 grid-column-gap:4rem;
 grid-row-gap:1rem;
 grid-template-columns:  auto auto  auto;
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

