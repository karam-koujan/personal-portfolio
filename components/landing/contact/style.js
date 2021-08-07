import {Button} from "../../../templates"
import {devices} from "../../../styles/media"
import styled from "styled-components";


const ContactLink = styled(Button)`
  border:2px solid white;
  margin:2rem auto;
  max-width:305px;
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
 width:90%;
`

export {
    ContactLink,
    Section,
    Text,
    Wrapper
}