import Link from "next/link";
import bruno from "../../../assets/images/bruno.jpg"
import Image from "next/image";
import {useOnScreen} from "../../../hooks/"
import { Bullet,Title } from "../../../templates";
import {Project,ProjectImg,ProjectTitle,Section,Text,Wrapper} from "./style";
 
 
const Projects = ({data})=>{
    const [isVisible,ref] = useOnScreen({rootMargin:'0px 0px -40px 0px',threshold:0.2}) 
 return(
     <Section id="projects" ref={ref} tabIndex="0" >
         <Title isVisible={isVisible}>
             Experemental Projects<Bullet style={{'--size':'4.5rem'}}>.</Bullet>
         </Title>
         <Wrapper isVisible={isVisible}>
             {data.map(({title,text,image,github,link},idx)=>(
                 <Project key={idx}  tabIndex="0">
                     <Link href={link}>
                 <a>
                 <ProjectTitle>{title}</ProjectTitle>
                 <ProjectImg>
                     <Image src={bruno} layout="responsive" height={400} placeholder="blur" />
                 </ProjectImg>
                 <Text>{text}</Text>
                 </a>
                 </Link>
             </Project>
             ))}

           
         </Wrapper>
     </Section>
 )
}

export default Projects;