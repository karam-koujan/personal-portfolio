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
            <Btn tabIndex="0" href="https://drive.google.com/file/d/1-4H7Kh83-JzM7V5anX1Wj65z4R47wCnM/view" target="https://drive.google.com/file/d/1-4H7Kh83-JzM7V5anX1Wj65z4R47wCnM/view">
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