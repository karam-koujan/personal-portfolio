import Head from "next/head";
import {title,discription} from "../../../data/config";


const SEO = ()=>{
  return(
      <Head>
           <title>{title}</title>
           <meta name="discription" content={discription}/>
           <meta name="robots" content="index, follow" />
      </Head>
  )
}
export default SEO ;