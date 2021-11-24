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
          <Link href="/contact" >
            <Btn tabIndex="0">
              my resume
            </Btn>
          </Link>
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