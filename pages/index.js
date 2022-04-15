import {getContentByFolderName} from "../lib/queryMarkdown";
import { About ,Contact , Introduction, Projects } from "../components/landing"
import Layout from "../components/common/layout";
import OpenSource from "../components/landing/opensource";
import SEO from "../components/common/SEO";
import Articles from "../components/landing/articles";
export default function Home({about,projects:{projects},introduction,articles:{articles},navigation:{navigation}}) {
  
  return (
    <>
    <SEO title="karam koujan | Front end Dev"/>
     <Layout data={navigation}>
     <Introduction data={introduction} />
     <About data={about}/>
     <Projects data={projects}/>
     <OpenSource/>  
     <Articles data={articles}/>
    </Layout>
    </>
  )
}

export const getStaticProps = async()=>{
  const introduction = getContentByFolderName("introduction");
  const navigation = getContentByFolderName("navigation");
  const about = getContentByFolderName("about");
  const projects = getContentByFolderName("projects");
  const articles = getContentByFolderName("articles");
  return {
    props : {
      about:about.data,
      articles:articles.data,
      projects:projects.data,
      introduction : introduction.data,
      navigation : navigation.data,
    }
  }
}
