import Link from "next/link"
import {useOnScreen} from "../../../hooks"
import {Bullet,Title} from "../../../templates/"
import {ContactLink,Section,Text,Wrapper} from "./style";


const Contact = ({data:{paragraph,contactSource}})=>{
    const [isVisible,ref] = useOnScreen({rootMargin:'0px',threshold:0.4}) 
 
  return(
      <Section ref={ref} id="contact">
          <Title isVisible={isVisible}>
              Contact Me<Bullet size={{'--size':'4.3rem'}}>.</Bullet>
          </Title>
          <Wrapper isVisible={isVisible}>
              <Text >
                 {paragraph}              
                </Text>
                {contactSource.map(({link,text},idx)=>(
              <Link href={link} key={idx}>
              <ContactLink tabIndex="0">
                  {text}
              </ContactLink>
              </Link>
                ))}
          </Wrapper>
      </Section>
  )
}

export default Contact ;