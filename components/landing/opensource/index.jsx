import Link from "next/link";
import { Title , Bullet } from "../../../templates";
import {Repo,RepoLink,RepoText,RepoTitle,Section,Wrapper} from "./styles";
import { useOnScreen } from "../../../hooks";


const OpenSource = ({data})=>{
    const [isVisible,ref] = useOnScreen({rootMargin:'0px 0px 0px 0px',threshold:0.1}) 

    return(
   <Section ref={ref}>
       <Title isVisible={isVisible}>
           open source <Bullet style={{'--size':'4.5rem'}}>.</Bullet>
       </Title>
       <Wrapper isVisible={isVisible}>
           {data.map(({title,text},idx)=>(
         <Repo key={idx} tabIndex="0">
          <RepoTitle>
          {title}
          </RepoTitle>
          <RepoText>
              {text}
          </RepoText>     
       </Repo>
           ))}
       </Wrapper>
       {data.length>6?(
       <Link href="github">
       <RepoLink>
        See More
       </RepoLink>
       </Link>
       ):null}
   </Section>
    )
}

export default OpenSource ;