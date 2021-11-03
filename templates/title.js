import styled,{css} from "styled-components";
import {devices} from "../styles/media";
import {fadeInUp} from "../styles/animation";
const Bullet = styled.span`
 border-radius:50%;
 color:var(--blue);
 font-size:var(--size);
 margin-right:.5rem;
 @media(${devices.small}){
     font-size:var(--small-size,2.5rem);
 }
`
const Title = styled.h2`
color:var(--primary);
font-size:clamp(1.8rem,6vw,3.4rem);
text-transform:capitalize;
transform :translateY(100%);
opacity:0;
${({isVisible})=>isVisible?css`
animation-fill-mode:forwards;
animation-duration:.5s;
animation-name:${fadeInUp};
 animation-timing-function:ease-out;
 `:null}

`
export {
    Bullet,
    Title
}

