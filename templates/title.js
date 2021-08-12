import styled,{css} from "styled-components";
import {devices} from "../styles/media";
import {fadeInUp} from "../styles/animation";
const Bullet = styled.span`
 border-radius:50%;
 color:var(--blue);
 font-size:var(--size);
 margin-right:.5rem;
`
const Title = styled.h2`
color:var(--primary);
font-size:3.4rem;
text-transform:capitalize;
transform :translateY(100%);
opacity:0;
${({isVisible})=>isVisible?`
transition :opacity .5s  ease-out,transform .5s ease-out;
opacity:1;  
transform:translateY(0%); 
 `:null}
@media(${devices.small}){
 font-size:2.4rem;
}
`
export {
    Bullet,
    Title
}