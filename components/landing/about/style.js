import styled from "styled-components";



const Section = styled.section`
 padding:4rem 2rem;
`
const ImgWrapper = styled.div`
 max-width:300px;
 width:70%;
 & img{
     border-radius:3px;
 }
`
const TechList = styled.ul`
 background-color:var(--light-grey);
 display:grid;
 grid-column-gap:4rem;
 grid-row-gap:1rem;
 grid-template-columns: auto auto auto ;
 margin:3rem 0;
 max-width:480px;
 padding:1rem 2rem;
 position:relative;
 width:70%;
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
`

const Wrapper = styled.div`
 display:flex;
 justify-content:space-between;
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

