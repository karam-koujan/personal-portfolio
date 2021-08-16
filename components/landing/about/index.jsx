import bruno from "../../../assets/images/bruno.jpg";
import Image from "next/image";
import { useOnScreen } from "../../../hooks";
import {Bullet,Title} from "../../../templates/";
import {Section,ImgWrapper,TechList,TechItem,Text,TextWrapper,Wrapper} from "./style";

const About = ({data:{text,skills}})=>{
  const [isVisible,ref] = useOnScreen({rootMargin:'0px 0px 0px 0px',threshold:0.1}) 
   
  return(
       <Section id="about"  ref={ref} tabIndex="0">
           <Title isVisible={isVisible}>About Me<Bullet style={{'--size':'4.5rem'}} >.</Bullet>

           </Title>
          <Wrapper >
              <TextWrapper isVisible={isVisible}>
              <Text>
       {text}
              </Text>
              <TechList>
                  {skills.map((skill,idx)=>(
                  <TechItem key={idx}>
                      {skill}
                      </TechItem>
                  ))}
              </TechList>
              </TextWrapper>
              <ImgWrapper isVisible={isVisible}>
               <Image src={bruno} layout="responsive" placeholder="blur" />
              </ImgWrapper>
          </Wrapper>           
       </Section>
    )
}
export default About ;