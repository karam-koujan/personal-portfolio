import styled from "styled-components";


const Project = styled.div`
 background-color:var(--white);
 box-shadow:0px 1px 5px 0px rgba(0,0,0,.5) , 0px 0px 0px 0px rgba(0,0,0,.5);
 color:var(--primary);
 max-width:300px;
 width:100%;
`
const ProjectImg = styled.div`
 cursor:pointer;
 transition:transform .2s ease-in-out;
 &:hover,&:focus{
    box-shadow: 8px 3px 40px 20px rgba(0,0,0,.2); 
    transform:scale(1.04);
     & img{
         border-radius:3px;
     }
 }
`
const ProjectTitle = styled.h3`
 font-size:1rem;
 margin:1rem 1rem;
 text-transform:capitalize;
`
const Section = styled.section`
 padding:4rem 2rem;
`

const Text = styled.p`
 line-height:22px;
 margin: 1.5rem 2rem;
`

const Wrapper = styled.div`
 display:flex;
 flex-wrap:wrap;
 padding:4rem 0;
 gap:4rem;
`

export {
    Project,
    ProjectImg,
    ProjectTitle,
    Section,
    Text,
    Wrapper
}