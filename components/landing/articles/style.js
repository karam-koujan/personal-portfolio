import styled,{css} from "styled-components";
import { devices } from "../../../styles/media";
import { fadeInUp} from "../../../styles/animation";
import {Button} from "../../../templates";

const ArticleTitle = styled.h3`
 font-size:1.5rem;
`
const ArticleText = styled.p`
 line-height:22px;
`
const BtnWrapper = styled.div`
display:flex;
justify-content:center; 
width:100%;
`
const Btn = styled(Button)`
  border:2px solid var(--blue);
  display:block;
  max-width:210px;
  margin:1rem auto !important;
  transition:background-color .2s ease-in-out , transform .2s ease-in-out;
  width:90%;
  &:hover,&:focus{
      background-color:transparent;
      border:2px solid var(--blue);
      color:var(--blue);
  }
  &+&{
    margin-left:2rem;

  }
  @media(${devices.small}){
    margin:0 auto;
    &+&{
      margin:2rem auto 0 auto;
    }
  }
`
const ArticleImg = styled.div`
 background-color:${({placeholderColor})=>placeholderColor};
 cursor:pointer;
 width:100%;
 
`
const ArticleWrapper = styled.div`
display:grid;
grid-gap:5%;
grid-template-columns :repeat(auto-fit,minmax(30%,200px));
opacity:0;
padding:1rem 0 4rem 0;
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

const Section = styled.section`  
padding:0 2rem 10rem 2rem ;
`
const Wrapper = styled.div`
 background-color:var(--white);
 border-top-left-radius:8px;
 border-top-right-radius:8px;
 box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
 color:var(--primary);
 cursor:pointer;
 padding:0 0 1rem 0;
 position:relative;
 transition:all 0.5 ease;
 &>img{
  border-top-left-radius:8px;
  border-top-right-radius:8px;
 }
 &:hover,&:focus{
    box-shadow:rgba(0, 0, 0, 0.09) 0px 8px 26px 0px;
  
}
 }
 @media(max-width:1038px ){
   margin:0 auto 4rem auto;
   max-width:60%;
  }
 @media(${devices.medium}){
     margin:0 0 4rem 0;
     max-width:100%;
    }
    `
const TagWrapper = styled.div`
 display:flex;
 gap:1rem;
 padding:.8rem 0 1rem 0;
 width:100%;
 flex-wrap:wrap;
`    
const Tag = styled.div`
 background-color:var(--blue);
 border-radius:20px;
 color:white;
 padding:.4rem .9rem;
`   
const Date = styled.span`
 font-weight:100;
 font-size:.9rem;
 padding-bottom:.5rem;
`
const Duration = styled.span`
font-weight:100;
font-size:.9rem;
 padding-left:1rem;
`
const TextWrapper = styled.div`
 padding:0 1rem 5rem 1rem;
`
const ArticleMetaData = styled.div`
 bottom:0;
 width:100%;
 left:0;
 right:0;
 padding:0 1rem 1rem 1rem;
 position:absolute;
`   
export {
    ArticleImg,
    ArticleMetaData,
    ArticleText,
    ArticleTitle,
    ArticleWrapper,
    Btn,
    BtnWrapper,
    Date,
    Duration,
    Section,
    Wrapper,
    Tag,
    TextWrapper,
    TagWrapper
}
