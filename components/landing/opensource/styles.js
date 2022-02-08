import styled,{css} from "styled-components";
import { devices } from "../../../styles/media";
import { fadeInUp} from "../../../styles/animation";


const Repo = styled.div`
 background-color:white;
 border-radius:2px;
 box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 3px 1px -2px;
 cursor:pointer;
 padding:2rem  1.5rem;
 width:100%;
 transition:all .5s ease;
 &:hover,&:focus{
  box-shadow:rgb(0 0 0 / 9%) 0px 8px 26px 0px;
 }
 @media(${devices.medium}){
    width:100%;   
  }
`
const RepoLink = styled.a`
 background-color:black;
 border-radius:3px;
 color:white;
 display:block;
 margin:3rem auto;
 max-width:200px;
 padding:.5rem 2rem;
 text-align:center;
 transition:all .5s ease-in-out;
 width:70%;
 &:hover,&:focus{
     opacity:.9;
 }
`
const RepoStats = styled.div`
 align-items:center;
 display:flex;
 gap:2rem;
 margin:2rem 0 0 0;
 &>div{
   align-items:center;
   display:flex;
 }
`
const RepoStatsNum = styled.span`
margin:0 0 0 .5rem;
font-size:.9rem;
`
const RepoText = styled.p`
 color:var(--primary);
 line-height:25px;
 margin: 2rem 0 0 0;
 text-transform:lowercase;
 &::first-letter{
   text-transform:uppercase;
 }
 `
const RepoTitle = styled.h3`
 color:var(--primary);
 font-weight:100;
 letter-spacing:.5px;
 margin:0;
`

const Section = styled.section`
  padding:0 2rem 4rem 2rem ;
`

const Icon = styled.div`
 width:15px;
`

const Wrapper = styled.div`
display:grid;
margin:5rem 0 0 0;
grid-template-columns:1fr 1fr 1fr;
gap :1rem;
opacity:0;
transform:translateY(20%);
${({isVisible})=>isVisible?css`
 animation-delay:1s;
 animation-duration:.6s;
 animation-fill-mode:forwards;
 animation-name :${fadeInUp}; 
 animation-timing-function:ease;  
 `:null}
@media(${devices.medium}){
    grid-template-columns:1fr;

}
`



export {
    Repo,
    RepoLink,
    RepoStats,
    RepoStatsNum,
    RepoText,
    RepoTitle,
    Section,
    Icon,
    Wrapper
}
