import { Icon,Wrapper } from "./style";
const Hamburger = ({showNavBar,handleShowNavBar})=>{
 return (
     <Wrapper onClick={handleShowNavBar} showNavBar={showNavBar}>
         <Icon showNavBar={showNavBar}>

         </Icon>
     </Wrapper>
    )
}
export default Hamburger;