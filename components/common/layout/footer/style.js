import styled from "styled-components";
import {Button} from "../../../../templates/";
import {devices} from "../../../../styles/media";
const Footer = styled.footer`
 background-color:var(--primary);
 bottom:0;
 display:flex;
 justify-content:space-around;
 padding-block:min(7rem,30vh);
 position:relative;
 &::before{
    background-color:transparent;
    border-bottom:0px solid white;
    border-left:1400px solid transparent;
    border-top:80px solid white;
    border-right:0 solid white;
    content:"";   
    height:40px;
    left:-1%;
    position:absolute;
    top:-1px; 
    width:100%;
   }

 @media(${devices.small}){
     align-items:center;
     flex-direction:column;
   }
`
const ContactLink = styled(Button)`
background-color:var(--blue);
border:none;
max-width:210px;
width:90%;
transition:background-color .2s ease-in-out , transform .2s ease-in-out;
&:hover,&:focus{
    background-color:transparent;
    border:2px solid var(--blue);
    transform:scale(1.1);
}
@media(${devices.medium}){
    margin:0 auto;
   }
`
const Icon = styled.span`
  width:25px;

  & svg{
      fill:#4b6cc1;
  }
`
const SocialMediaList = styled.ul`
 padding:0;
 margin:4rem 0 0 0;
 
`
const SocialMediaLink = styled.a`
 color:var(--nav-link);
 font-size:1.15rem;
 font-weight:400;
 letter-spacing:1px;
 margin-left:.5rem;
 text-transform :uppercase;
 transition:color .5s ease-in-out;

 &:hover,&:focus{
     color:white;
 }
 
 
`
const SocialMediaItem = styled.li`
 align-items:center;
 display:flex;
 list-style :none;
 margin:0 0 2rem 0;
`
const Title = styled.h2`
 color:white;
 font-size:clamp(2.3rem , 6vw , 3rem);
 font-weight:normal;
 @media(${devices.medium}){
 text-align:center;  
}
`
const Wrapper = styled.div`
 height:100%;

`


export{
    ContactLink,
    Footer,
    Icon,
    SocialMediaList,
    SocialMediaLink,
    SocialMediaItem,
    Title,
    Wrapper
}