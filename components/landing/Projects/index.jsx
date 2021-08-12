import bruno from "../../../assets/images/bruno.jpg"
import Image from "next/image";
import {useOnScreen} from "../../../hooks/"
import { Bullet,Title } from "../../../templates";
import {Project,ProjectImg,ProjectTitle,Section,Text,Wrapper} from "./style";
 
 
const Projects = ()=>{
    const [isVisible,ref] = useOnScreen({rootMargin:'0px',threshold:0}) 
 return(
     <Section id="projects" ref={ref}>
         <Title isVisible={isVisible}>
             Experemental Projects<Bullet style={{'--size':'4.5rem'}}>.</Bullet>
         </Title>
         <Wrapper isVisible={isVisible}>
             <Project>
                 <ProjectTitle>Instegam clone</ProjectTitle>
                 <ProjectImg>
                     <Image src={bruno} layout="responsive" height={400}/>
                 </ProjectImg>
                 <Text>estiae obcaecati, necessitatibus deserunt? Quod, tempora!</Text>
             </Project>

             <Project>
                 <ProjectTitle>Instegam clone</ProjectTitle>
                 <ProjectImg>
                     <Image src={bruno} layout="responsive" height={400}/>
                 </ProjectImg>
                 <Text>estiae obcaecati, necessitatibus deserunt? Quod, tempora!</Text>
             </Project>

             <Project>
                 <ProjectTitle>Instegam clone</ProjectTitle>
                 <ProjectImg>
                     <Image src={bruno} layout="responsive" height={400}/>
                 </ProjectImg>
                 <Text>estiae obcaecati, necessitatibus deserunt? Quod, tempora!</Text>
             </Project>
           
         </Wrapper>
     </Section>
 )
}

export default Projects;