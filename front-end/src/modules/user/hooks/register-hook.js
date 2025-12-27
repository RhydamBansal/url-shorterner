import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "../validation/register-schema.js";
import { registerApiCall } from "../api/user-api";

export const useRegister = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm(
        {
            resolver: zodResolver(registerSchema),
            defaultValues:{
                email:"sample@example.com",
                password:"",
                name:""
            }
        }
    );
    const doSubmit = async (formData)=>{
        console.log("Register Form Submit", formData);
        try{
        const response = await registerApiCall(formData);
        console.log('Response is ' , response);
        if(response.data.id){
            alert("Register Successfully");
        } else {
            alert("Register Fails");
          }
        }
        catch(err){
           alert("Register Fail");
           console.log("Error ", err);
        }
    }
    return {doSubmit, register, handleSubmit, errors};
}