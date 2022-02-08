import matter from "gray-matter"
import fs from "fs";
import path from "path";
export const getContentByFolderName = (folder)=>{
  
  const file =  fs.readFileSync(path.resolve(process.cwd(),"content",folder,`${folder}.md`));
  const {data,content} = matter(file.toString())
 
  return {data,content}
}
