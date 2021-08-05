import { useEffect,useRef } from "react";
import bruno from "../../../assets/images/bruno.jpg";
import Image from "next/image";
import {onIntersectionAnimation} from "../../../lib/onIntersectionAnimation";
import {Bullet,Title} from "../../../templates/";
import {Section,ImgWrapper,TechList,TechItem,Text,TextWrapper,Wrapper} from "./style";

const About = ()=>{
    
    return(
       <Section id="about" >
           <Title>About Me<Bullet style={{'--size':'4.5rem'}}>.</Bullet>

           </Title>
          <Wrapper>
              <TextWrapper>
              <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim esse dolores optio temporibus placeat mollitia reiciendis, doloremque, fuga repudiandae libero eum non nulla nisi aperiam nostrum sed cumque adipisci!
              </Text>
              <TechList>
                  <TechItem>
                      <Bullet style={{'--size':'.7rem'}}>&#9632;</Bullet>
                      React
                      </TechItem>
                  <TechItem>
                  <Bullet style={{'--size':'.7rem'}}>&#9632;</Bullet>
                      HTML/CSS/JS</TechItem>
                  <TechItem>
                  <Bullet style={{'--size':'.7rem'}}>&#9632;</Bullet>
                      Next</TechItem>
                  <TechItem>
                  <Bullet  style={{'--size':'.7rem'}}>&#9632;</Bullet>
                      Node</TechItem>
                      <TechItem>
                  <Bullet  style={{'--size':'.7rem'}}>&#9632;</Bullet>
                      Node</TechItem>
                      <TechItem>
                  <Bullet  style={{'--size':'.7rem'}}>&#9632;</Bullet>
                      Node</TechItem>
              </TechList>
              </TextWrapper>
              <ImgWrapper>
               <Image src={bruno} layout="responsive" />
              </ImgWrapper>
          </Wrapper>           
       </Section>
    )
}
export default About ;