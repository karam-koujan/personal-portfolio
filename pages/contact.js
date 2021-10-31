import {getContentByFolderName} from "../lib/queryMarkdown";
import Layout from "../components/common/layout";
import Introduction from "../components/contact/introduction";
import  Form  from "../components/contact/form";
import SEO from "../components/common/SEO";
export default function Contact({navigation:{navigation},contact}) {
  
  return (
    <>
    <SEO title="karam koujan | Contact"/>
     <Layout data={navigation} >
       <Introduction contact={contact}/>
       <Form contact={contact}/>
    </Layout>
    </>
  )
}

export const getStaticProps = async()=>{
  const navigation = getContentByFolderName("navigation");
  const contact = getContentByFolderName("contact");

  return {
    props : {
      contact:contact.data,
      navigation : navigation.data
    }
  }
}





