import Link from "next/link"
import {Bullet,ContactLink,Section,Text,Title,Wrapper} from "./style";


const Contact = ()=>{
  return(
      <Section>
          <Title>
              Contact Me<Bullet size={{'--size':'4.3rem'}}>.</Bullet>
          </Title>
          <Wrapper>
              <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat hic labore similique itaque error ex quasi voluptatem dolores dolorem alias natus, maxime in dolor, dolorum animi recusandae quod vitae cum!
              </Text>
              <Link href="/contact">
              <ContactLink>
                  Contact Me Via Email.
              </ContactLink>
              </Link>
          </Wrapper>
      </Section>
  )
}

export default Contact ;