import Link from "next/link";
import Image from "next/image";
import Styles from "./styles.module.css"
import {useOnScreen} from "../../../hooks"
import { Bullet,Title } from "../../../templates";
import {Project,ProjectImg,ProjectLink,ProjectTitle,Section,TechItem,TechList,Text,Wrapper} from "./style";

 
const Projects = ({data})=>{
    const [isVisible,ref] = useOnScreen({rootMargin:'0px 0px 0px 0px',threshold:0.1})
  
 return(
     <Section id="projects" ref={ref} tabIndex="0" >
         <Title isVisible={isVisible}>
             Experimental Projects<Bullet style={{'--size':'4.5rem'}}>.</Bullet>
         </Title>
         <Wrapper isVisible={isVisible}>
             {data.map(({title,text,image,link,placeholder},idx)=>(
                 <Project key={idx}  tabIndex="0">
                  <Link href={link}>
                  <a>
                 <ProjectTitle>{title}</ProjectTitle>
                 <ProjectImg placeholderColor={placeholder}>
                 <Image layout="responsive"  className={Styles.image} height={70} width={100} src={image}   alt={`${title} image`}/>
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
