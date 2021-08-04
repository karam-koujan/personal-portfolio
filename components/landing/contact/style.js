import styled from "styled-components";

const Bullet = styled.span`
 color:var(--blue);
 font-size:var(--size);
 margin-right:.5rem;
`
const ContactLink = styled.a`
background-color:var(--blue);
  border:2px solid white;
  border-radius:1000px;
  color: white;
  display:block;
  font-size:1.4rem;
  margin:2rem auto;
  max-width:305px;
  padding:1.5rem 2.3rem;
  text-align:center;
  text-transform:capitalize;
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
`

const Text = styled.p`
 color:var(--primary);
 line-height:25px;
 text-align:center;
`
const Title = styled.h2`
color:var(--primary);
 font-size:3.4rem;
 text-transform:capitalize;
`
 
const Wrapper = styled.div`
 max-width:600px;
 width:90%;
`

export {
    Bullet,
    ContactLink,
    Section,
    Text,
    Title,
    Wrapper
}