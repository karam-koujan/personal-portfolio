import styled from "styled-components";

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
`
export {
    Bullet,
    Title
}