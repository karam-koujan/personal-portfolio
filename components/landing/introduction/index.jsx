import Link from "next/link";
import {GetInTouch,Section,Text,Title, Wrapper} from "./style";

const Introduction = ()=>{
  return(
      <Section>
        <Wrapper>
          <Title>
          Hey, I’m Seb.
          </Title>
          <Text>
          A web designer and developer from Southampton in the UK. I create bespoke websites to help people go further online.
          </Text>
          <Link href="/contact">
            <GetInTouch>
              get in touch
            </GetInTouch>
          </Link>
        </Wrapper>
      </Section>
  )
}

export default Introduction;