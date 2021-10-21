import styled,{css} from "styled-components";
import {Button} from "../../../templates";



const Send = styled(Button)`
 align-self:center;
 font-size:1rem;
 padding:1rem 3rem;
 transition:opacity .5s ease-in-out;
 &:hover,&:focus{
    opacity:.8;
 }
 `
const Email = styled.a`
 color:var(--blue);
`
const Error = styled.span`
 color:red;
 font-weight:100;
 transform:translateY(-100%);
`
const Form = styled.form`
 display:flex;
 flex-direction:column;
 margin:0 auto;
 max-width:900px;
 padding:0 1rem;
 width:80%;
`
const Label = styled.label`
color:var(--primary);

`
const Section = styled.section`
 padding-block:6rem;
`


export const Strong = styled.strong`
 color:var(--primary);
 letter-spacing:.5px;
`
const Input = styled.input`
 color:var(--primary);
 font-size:1rem;
 padding:.8rem 1rem;
 margin:1rem 0 2rem 0;
 ${({error})=>error?css`
  border:1px solid red;
 `:null}
 &:focus{
     outline:none;
 }
`
const Text = styled.p`
 color:var(--primary);
 font-size:1.1rem;
 margin:2rem 0 2rem 0;
`
const TextArea = styled.textarea`
color:var(--primary);
font-size:1rem;
height:150px;
margin:1rem 0 2rem 0;
padding:.5rem 1rem;
resize:none;
${({error})=>error?css`
border:1px solid red;
`:null}
&:focus{
    outline:none;
}
`


export {
    Button,
    Email,
    Error,
    Form,
    Label,
    Section,
    Send,
    Input,
    Text,
    TextArea
}