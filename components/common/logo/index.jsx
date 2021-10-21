import { useRouter } from "next/router";
import logo from "../../../assets/images/logo.svg";
import {Wrapper} from "./style"




const Logo = ()=>{
  const router = useRouter()
  return(
      <Wrapper>
          <img src={logo.src} alt="Logo" onClick={()=>router.replace("/")}/>
      </Wrapper>
  )
}

export default Logo ; 