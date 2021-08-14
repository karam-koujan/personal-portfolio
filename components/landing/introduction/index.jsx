import Link from "next/link";
import {GetInTouch,Section,Text,Title, Wrapper} from "./style";

const Introduction = ({data:{name,introduction}})=>{
  return(
      <Section>
        <Wrapper>
          <Title style={{"--typeWriterChar":"14"}}>
          Hey, I’m {name}
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
      </Section>
  )
}

export default Introduction;