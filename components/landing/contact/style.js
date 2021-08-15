import {Button} from "../../../templates"
import {devices} from "../../../styles/media"
import {scale} from "../../../styles/animation";
import styled,{css} from "styled-components";


const ContactLink = styled(Button)`
  border:2px solid white;
  margin:2rem auto;
  max-width:320px;
  transition:background-color .3s linear;
  width:90%;
  &:hover,&:focus{
      background-color:transparent;
      border:2px solid var(--blue);
      color:var(--blue);
  }
`
const Section = styled.section`
 align-items:center;
 display:flex;
 flex-direction:column;
 justify-content:center;
 padding:0 0 8rem 0;
 
 @media(${devices.small}){
  padding-top:0rem;
 }
`

const Text = styled.p`
 color:var(--primary);
 line-height:25px;
 text-align:center;

`
 
const Wrapper = styled.div`
 max-width:600px;
 opacity:0;
 transform :scale(0);
 ${({isVisible})=>isVisible?css`
 animation-name:${scale};
 animation-duration:.6s;
 animation-delay:.5s;
 animation-timing-function:ease;
 animation-fill-mode:forwards;
 `:null}
 width:90%;
`
/*

*/

export {
    ContactLink,
    Section,
    Text,
    Wrapper
}