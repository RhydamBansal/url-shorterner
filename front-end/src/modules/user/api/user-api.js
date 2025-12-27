import { apiClient } from "../../../shared/services/api-client"

export const registerApiCall = async (formData)=>{
    try{
    const response = await apiClient.post('/register', formData);
    console.log('Response :', response);
    return response;
    } 
    catch(err){
        console.log('Register Api Call Fail ', err);
        throw err;
    }
}

export const loginApiCall = async (formData)=>{
    try{
    const response = await apiClient.post('/login', formData);
    console.log('Response :', response);
    return response;
    } 
    catch(err){
        console.log('Login Api Call Fail ', err);
        throw err;
    }
}