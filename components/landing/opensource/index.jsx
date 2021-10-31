import * as React from "react";
import Link from "next/link";
import { Title , Bullet } from "../../../templates";
import {Repo,RepoLink,RepoStats,RepoStatsNum,RepoText,RepoTitle,Section,Icon,Wrapper} from "./styles";
import { useOnScreen } from "../../../hooks";
import star from "../../../assets/images/star.svg"
import fork from "../../../assets/images/fork.svg"
const OpenSource = ()=>{
    const [isVisible,ref] = useOnScreen({rootMargin:'0px 0px 0px 0px',threshold:0.1}) 
    const [repos,setRepos] = React.useState([])
    React.useEffect(()=>{
         fetch("https://api.github.com/users/karam-koujan/repos").then(res=>res.json())
         .then(data=>setRepos(data))
         
    },[]) 
    return(
   <Section ref={ref}>
       <Title isVisible={isVisible}>
           open source <Bullet style={{'--size':'4.5rem'}}>.</Bullet>
       </Title>
       <Wrapper isVisible={isVisible}>
           {repos.length?repos.map(({name,clone_url,description,forks_count,stargazers_count},idx)=>(
         <Repo key={idx} tabIndex="0">
         <Link href={clone_url}>
         <a  target={clone_url}>
          <RepoTitle>
          {name}
          </RepoTitle>
          <RepoText>
              {description}
          </RepoText>     
          <RepoStats>
              <div>
              <Icon>
              <img src={star.src} alt="star"/>
              </Icon>
              <RepoStatsNum>
                  {stargazers_count}
              </RepoStatsNum>
              </div>
              <div>
              <Icon>
              <img src={fork.src} alt="fork"/>
              </Icon>
              <RepoStatsNum>
                  {forks_count}
              </RepoStatsNum>
              </div>
          </RepoStats>
          </a>
          </Link>
       </Repo>
           )):null}
       </Wrapper>
       {repos.length>6?(
       <Link href="https://github.com/karam-koujan?tab=repositories">
       <RepoLink>
        See More
       </RepoLink>
       </Link>
       ):null}
   </Section>
    )
}

export default OpenSource ;