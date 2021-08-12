import {useState,useRef,useEffect} from "react"
export const useOnScreen = (options)=>{
    const ref = useRef(null);
    const [isVisible,setIsVisible] = useState(false)
  
   useEffect(()=>{
     const observer = new IntersectionObserver(([entry])=>{
         setIsVisible(entry.isIntersecting)
     },options)
     if(ref.current){
         observer.observe(ref.current)
     }
     return ()=> observer.unobserve(ref.current)

   },[ref,options])

   return [isVisible,ref]
}