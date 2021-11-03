import styled from "styled-components";
import {devices} from "../../../styles/media";



export const Wrapper = styled.div`
 cursor:pointer;
 transform:translateY(-30%);
 width:50px;
 & img {
      transition:all 1s ease;
 }
 & img:hover,& img:focus{
     transform:rotate(360deg);
 }
 @media(${devices.small}){
     transform:translateY(-20%);
 }
 `