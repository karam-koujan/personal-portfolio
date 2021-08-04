import Link from "next/link";
import Image from "next/image";
import {github,gmail,twitter} from "../../../../assets/icons";
import { ContactLink,Footer as FooterWrapper,SocialMediaList,SocialMediaLink,SocialMediaItem,Title,Wrapper} from "./style";

const Footer = ()=>{
 return(
   <FooterWrapper>
       <Wrapper>
           <Title>Let's Work Together</Title>
           <Link href="/contact">
           <ContactLink>
                Get In Touch   
            </ContactLink>           
           </Link>
       </Wrapper>
       <SocialMediaList>
           <SocialMediaItem>
               <Image src={twitter} width={30} height={30}/>
               <Link href="twitter.com">
                   <SocialMediaLink>On Twitter</SocialMediaLink>
               </Link>
           </SocialMediaItem>
           <SocialMediaItem>
           <Image src={gmail} width={23} height={23}/>
               <Link href="gmail.com">
                   <SocialMediaLink>On Gmail</SocialMediaLink>
               </Link>
           </SocialMediaItem>
           <SocialMediaItem>
           <Image src={github} width={23} height={23}/>
               <Link href="github">
                   <SocialMediaLink>On Github</SocialMediaLink>
               </Link>
           </SocialMediaItem>
       </SocialMediaList>
   </FooterWrapper>
 )
}

export default Footer ;