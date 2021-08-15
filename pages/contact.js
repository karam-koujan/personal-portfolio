import { queryMarkdown } from "../lib/queryMarkdown";
import path from "path";
const Contact = ({data:{title}})=>{
 return(
     <div>{title}</div>
 )
}

export const getStaticProps = async ()=>{
 const {data,content} = queryMarkdown(path.join(__dirname,"content","introduction.md"))
     return {
         props :{data}
     }
}
export default Contact ;