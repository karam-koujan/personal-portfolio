import Link from "next/link";
import FirstSection from "../../common/firstSection";
import {Btn,BtnWrapper,Text,Title, Wrapper} from "./style";
const Introduction = ({data:{name,introduction}})=>{
  return(
      <FirstSection>
        <Wrapper>
          <Title style={{"--typeWriterChar":"14"}}>
          Hey, I’m {name}
          </Title>
          <Text>
            {introduction}
          </Text>
          <BtnWrapper>
            <Btn tabIndex="0" href="https://docs.google.com/document/d/1KVr1RVEndTo-YAUJNOWfa3bCNjYYdJke-_G4pobesIU/edit?usp=sharing" target="https://docs.google.com/document/d/1KVr1RVEndTo-YAUJNOWfa3bCNjYYdJke-_G4pobesIU/edit?usp=sharing">
              my resume
            </Btn>
          <Link href="/contact" >
            <Btn tabIndex="0">
              get in touch
            </Btn>
          </Link>
            </BtnWrapper>
        </Wrapper>
      </FirstSection>
  )
}

export default Introduction;
