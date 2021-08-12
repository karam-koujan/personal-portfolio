import Link from "next/link"
import {useOnScreen} from "../../../hooks"
import {Bullet,Title} from "../../../templates/"
import {ContactLink,Section,Text,Wrapper} from "./style";


const Contact = ()=>{
    const [isVisible,ref] = useOnScreen({rootMargin:'0px',threshold:0.4}) 

  return(
      <Section ref={ref} >
          <Title isVisible={isVisible}>
              Contact Me<Bullet size={{'--size':'4.3rem'}}>.</Bullet>
          </Title>
          <Wrapper isVisible={isVisible}>
              <Text >
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