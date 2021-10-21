import FirstSection from "../../common/firstSection";
import {Heading,Text,Wrapper} from "./style";

const Introduction = ({contact:{paragraph}})=>{
  return(
       <FirstSection>
           <Wrapper>
               <Heading>Contact Me</Heading>
               <Text>{paragraph}</Text>
           </Wrapper>
       </FirstSection>
  )
}

export default Introduction;

