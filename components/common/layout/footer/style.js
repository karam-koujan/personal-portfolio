import styled from "styled-components";
import {Button} from "../../../../templates/";

const Footer = styled.footer`
 background-color:var(--primary);
 bottom:0;
 flex-wrap:wrap;
 display:flex;
 justify-content:space-around;
 padding:10rem 10rem 5rem 3rem; 
 position:relative;
 &::before{
    background-color:transparent;
    border-bottom:0px solid white;
    border-left:1400px solid transparent;
    border-top:70px solid white;
    border-right:0px solid white;
    top:0; 
    content:"";   
    height:40px;
    position:absolute;
    width:100%;
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
 font-size:3rem;
 font-weight:normal;
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