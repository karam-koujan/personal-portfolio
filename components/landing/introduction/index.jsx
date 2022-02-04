import Link from "next/link";
import FirstSection from "../../common/firstSection";
import {GetInTouch,Section,Text,Title, Wrapper} from "./style";

const Introduction = ({data:{name,introduction}})=>{
  return(
      <FirstSection>
        <Wrapper>
          <Title style={{"--typeWriterChar":"14"}}>
          Hey, I’m {name}  ff
          </Title>
          <Text>
            {introduction}
          </Text>
          <Link href="/contact" >
            <GetInTouch tabIndex="0">
              get in touch
            </GetInTouch>
          </Link>
        </Wrapper>
      </FirstSection>
  )
}

export default Introduction;