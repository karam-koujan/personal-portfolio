import {Button} from "../../../templates";
import {fadeInUp} from "../../../styles/animation.js";
import {devices} from "../../../styles/media";
import styled from "styled-components";
 

const Btn = styled(Button)`
border:2px solid var(--blue);
  max-width:210px;
  transition:background-color .2s ease-in-out , transform .2s ease-in-out;
  width:90%;
  &:hover,&:focus{
      background-color:transparent;
      border:2px solid var(--blue);
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
const BtnWrapper = styled.div`
 padding:0 0 5.4rem 0;
 display:flex;
 @media(${devices.small}){
  flex-direction:column;
  justify-content:center;
}
`



const Text = styled.p`
 color:var(--nav-link);
 font-family:Roboto,sans-serif;
 font-size:1.15rem;
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
 transform:translateY(20%);
 animation-fill-mode:forwards;
 animation-timing-function:linear;
 animation-name:${fadeInUp};
 animation-duration:.4s;
 @media(${devices.medium}){
   padding:0  2rem;
 } 
 
` 

export {
    Btn,
    BtnWrapper,
    Text,
    Title,
    Wrapper
}