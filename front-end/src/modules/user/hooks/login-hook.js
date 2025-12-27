import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema} from "../validation/login-schema.js";
import { loginApiCall } from "../api/user-api";
import {useNavigate} from "react-router-dom";

export const useLogin = ()=>{
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}} = useForm(
        {
            resolver: zodResolver(loginSchema),
            defaultValues:{
                email:"sample@example.com",
                password:""
            }
        }
    );
    const doSubmit = async (formData)=>{
        console.log("Login Form Submit", formData);
        try{
        const response = await loginApiCall(formData);
        console.log('Response is ' , response);
        if(response.data.id){
            localStorage.email = response.data.email;
            alert("Login Successfully");
            navigate('/dashboard');
        } else {
            alert(response.data.message);
          }
        }
        catch(err){
           alert("Login Fail");
           console.log("Error ", err);
        }
    }
    return {doSubmit, register, handleSubmit, errors};
}