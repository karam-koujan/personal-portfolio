import styled from "styled-components";


const GetInTouch = styled.a`
  background-color:var(--blue);
  border:none;
  border-radius:1000px;
  color: white;
  display:inline-block;
  font-size:1.4rem;
  padding:1.5rem 2.3rem;
  text-transform:capitalize;
  transition:background-color .2s ease-in-out , transform .2s ease-in-out;

  &:hover,&:focus{
      background-color:transparent;
      border:2px solid var(--blue);
      transform:scale(1.1);
  }
`

const Section = styled.section`
 background-color:var(--primary);
 display:flex;
 justify-content:center;
 height:500px;
 padding: 5rem  2rem 0 0 ;
 position:relative;
 &::before{
   background-color:transparent;
   border-top:0px solid white;
   border-left:1400px solid transparent;
   border-bottom:70px solid white;
   border-right:0px solid white;
   bottom:0; 
   content:"";   
   height:40px;
   position:absolute;
   width:100%;
  }
`

const Text = styled.p`
 color:var(--nav-link);
 font-family:Roboto,sans-serif;
 font-size:1.12rem;
 line-height:35px;
 margin:2rem 0;
`
const Title = styled.h1`
  color:var(--main-title);
  font-size:4rem;
  font-weight:400;
  margin:0;
`

const Wrapper = styled.div`
 max-width:800px;
 width:100%;
animation-timing-function:ease-in-out;
animation-name:fade-out;
 animation-duration:.3s;
  @keyframes fade-out{
      0%{
          transform:translateY(30%);
      }
      100%{
          transform:translateY(0%);
      }
  }
`

export {
    GetInTouch,
    Section,
    Text,
    Title,
    Wrapper
}