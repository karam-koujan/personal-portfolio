import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Title , Bullet } from "../../../templates";
import {ArticleImg,ArticleMetaData, ArticleWrapper, Section,TextWrapper,Wrapper,Tag, TagWrapper,Date,Duration,Btn, ArticleTitle, ArticleText, BtnWrapper} from "./style";
import {useOnScreen} from "../../../hooks";


const Articles = ({data})=>{
    const [isVisible,ref] = useOnScreen({rootMargin:'0px 0px 0px 0px',threshold:0.1})

    return (
      <Section ref={ref}>
          <Title isVisible={isVisible}>
        Articles <Bullet  style={{'--size':'4.5rem'}}>.</Bullet>
          </Title>
          <ArticleWrapper isVisible={isVisible}>
          {data.map(({title,image,placeholder,introduction,tags,date,link,duration},idx)=>(
            <Wrapper key={idx}>
            <Link href={link}>
            <a target={link}>
             <ArticleImg placeholderColor={placeholder}>
             <Image layout="responsive"  height={60} width={100} src={image}   alt={`${title} image`}/>
            </ArticleImg>
            <TextWrapper>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleText>{introduction}</ArticleText>
            <ArticleMetaData>
            <TagWrapper>
            {tags.map((tag,idx)=>(
                <Tag key={idx}>{tag}</Tag> 
            ))}
            </TagWrapper>
            <Date>{date}</Date><Duration>{duration}</Duration>
          </ArticleMetaData>
            </TextWrapper>
            </a>     
          </Link>
          </Wrapper>
          ))
        }
        </ArticleWrapper>
        {data.length>3?(
        <BtnWrapper>
            <Btn href="https://dev.to/karamkoujan" target="https://dev.to/karamkoujan">see more</Btn>
        </BtnWrapper>
        ):null}
      </Section>
  )
}


export default Articles
