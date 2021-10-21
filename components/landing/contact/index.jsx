import Link from "next/link"
import {useOnScreen} from "../../../hooks"
import {Bullet,Title} from "../../../templates/"
import {ContactLink,Section,Text,Wrapper} from "./style";


const Contact = ({data:{paragraph,contactSource:{link,text}}})=>{
   // const [isVisible,ref] = useOnScreen({rootMargin:'0px',threshold:0.4}) 
 
  return(
      <Section ref={ref} id="contact">
          <Title isVisible={isVisible}>
              Contact Me<Bullet size={{'--size':'4.3rem'}}>.</Bullet>
          </Title>
          <Wrapper isVisible={isVisible}>
              <Text >
                 {paragraph}              
                </Text>
              <Link  href={link}>
              <ContactLink  href={link} tabIndex="0">
                  {text}
              </ContactLink>
              </Link>
            
          </Wrapper>
      </Section>
  )
}

export default Contact ;