import {getContentByFolderName} from "../lib/queryMarkdown";
import { About ,Contact , Introduction, Projects } from "../components/landing"
import Layout from "../components/common/layout";

export default function Home({about,contact,projects:{projects},introduction,navigation:{navigation}}) {
  
  return (
     <Layout data={navigation}>
     <Introduction data={introduction}/>
     <About data={about}/>
     <Projects data={projects}/>
     <Contact data={contact}/>
    </Layout>
  )
}

export const getStaticProps = async()=>{
  const introduction = getContentByFolderName("introduction");
  const navigation = getContentByFolderName("navigation");
  const about = getContentByFolderName("about");
  const contact = getContentByFolderName("contact");
  const projects = getContentByFolderName("projects")
  return {
    props : {
      about:about.data,
      contact:contact.data,
      projects:projects.data,
      introduction : introduction.data,
      navigation : navigation.data
    }
  }
}
