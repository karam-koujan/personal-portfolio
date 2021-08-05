import {keyframes} from "styled-components";


const Climb = keyframes`
0%{
    transform:translateY(30%);
}
100%{
    transform:translateY(0%);
}
`
const Fall = keyframes`
0%{
    transform :translateY(-100%);
}
100%{
    transform:translateY(0%);
}
`


export {
    Climb,
    Fall
}