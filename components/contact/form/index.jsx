import * as Yup from "yup";
import {useFormik} from "formik";
import {Email,Error,Form as Wrapper,Label,Section,Send,Strong,Input,Text,TextArea} from "./styles"




const Form = ({contact:{contactSource:{link,email}}})=>{
    const validationSchema = Yup.object({
        fullName:Yup.string().required("Full name is required"),
        email:Yup.string().email("Please enter a valid email!").required("Email is required"),
        message:Yup.string().required("message is required")
    }) 
    const {errors,values,touched,handleChange,handleBlur,handleSubmit} = useFormik({
          initialValues:{
              fullName:"",
              email:"",
              message:""
          },
          validationSchema,
          onSubmit :()=>{
               fetch("https://formsubmit.co/455e550f85f6a23e8191f90a4df86f42",{
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(values)
            })     
            }})
  return(
    <Section>
    <Wrapper action="https://formsubmit.co/455e550f85f6a23e8191f90a4df86f42" method="POST" onSubmit={handleSubmit}>
    <Strong>
        Feel free to email me via <Email href={link} target={link}>{email}</Email>
    </Strong>
    <Text>
        Or fill the contact form down bellow
    </Text>
    <Label>
        Full name:
    </Label>
    <Input type="text" name="fullName" error={errors.fullName&&touched.fullName} aria-label="full name" onBlur={handleBlur} onChange={handleChange} value={values.fullName} required/>
    {errors.fullName&&touched.fullName?<Error>{errors.fullName}</Error>:null}
    <Label>
        Your Email:
    </Label>
    <Input type="email" name="email" error={errors.email&&touched.email} aria-label="email" onBlur={handleBlur} onChange={handleChange} value={values.email} required/>
    {errors.email&&touched.email?<Error>{errors.email}</Error>:null}
     <Label>
         Message:
     </Label>
     <TextArea name="message" error={errors.message&&touched.message} aria-label="message" onBlur={handleBlur} onChange={handleChange} value={values.message} required/>
     {errors.message&&touched.message?<Error>{errors.message}</Error>:null}
     <Send type="submit" onClick={handleSubmit}>
         send
     </Send>
  </Wrapper>
 </Section>
    )
}

export default Form ;
