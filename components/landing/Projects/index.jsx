import bruno from "../../../assets/images/bruno.jpg"
import Image from "next/image";
import { Bullet,Title } from "../../../templates";
import {Project,ProjectImg,ProjectTitle,Section,Text,Wrapper} from "./style";
 
 
const Projects = ()=>{
 return(
     <Section id="projects">
         <Title>
             Experemental Projects<Bullet style={{'--size':'4.5rem'}}>.</Bullet>
         </Title>
         <Wrapper>
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