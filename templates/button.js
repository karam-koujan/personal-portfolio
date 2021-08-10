import styled from "styled-components";
import {devices} from "../styles/media.js";

export const Button = styled.a`
background-color:var(--blue);
border:none;
border-radius:1000px;
color: white;
display:block;
font-size:1.4rem;
padding:1.5rem 2.3rem;
text-align:center;
text-transform:capitalize;

@media(${devices.small}){
 font-size:1rem;
}
`

