import Link from "next/link"
import {useOnScreen} from "../../../hooks"
import {Bullet,Title} from "../../../templates/"
import {ContactLink,Section,Text,Wrapper} from "./style";


const Contact = ({data:{text}})=>{
    const [isVisible,ref] = useOnScreen({rootMargin:'0px',threshold:0.4}) 
 
  return(
      <Section ref={ref} >
          <Title isVisible={isVisible}>
              Contact Me<Bullet size={{'--size':'4.3rem'}}>.</Bullet>
          </Title>
          <Wrapper isVisible={isVisible}>
              <Text >
                 {text}              
                </Text>
              <Link href="/contact">
              <ContactLink tabIndex="0">
                  Contact Me Via Email.
              </ContactLink>
              </Link>
          </Wrapper>
      </Section>
  )
}

export default Contact ;