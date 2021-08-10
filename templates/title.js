import styled from "styled-components";
import {devices} from "../styles/media";
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

@media(${devices.small}){
 font-size:2.4rem;
}
`
export {
    Bullet,
    Title
}