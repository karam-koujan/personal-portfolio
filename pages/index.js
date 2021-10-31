import {getContentByFolderName} from "../lib/queryMarkdown";
import { About ,Contact , Introduction, Projects } from "../components/landing"
import Layout from "../components/common/layout";
import OpenSource from "../components/landing/opensource";
import SEO from "../components/common/SEO";
export default function Home({about,projects:{projects},introduction,navigation:{navigation}}) {
  
  return (
    <>
    <SEO title="karam koujan | Full-stack Dev"/>
     <Layout data={navigation}>
     <Introduction data={introduction} />
     <About data={about}/>
     <Projects data={projects}/>
     <OpenSource/>  
    </Layout>
    </>
  )
}

export const getStaticProps = async()=>{
  const introduction = getContentByFolderName("introduction");
  const navigation = getContentByFolderName("navigation");
  const about = getContentByFolderName("about");
  const projects = getContentByFolderName("projects");
  return {
    props : {
      about:about.data,
      projects:projects.data,
      introduction : introduction.data,
      navigation : navigation.data,
    }
  }
}
