import { loginUser, registerUser } from "../services/user-service.js";


export const home = (request,response)=>{
    response.send('<h1>URL Shortener </h1>');
}
export const login = async (request, response) => {
  const userInfo = request.body;
  try{
    const doc = await loginUser(userInfo);
    if(doc && doc._id){
    response.json({message:"Login Successfully ", id:doc._id, email:doc.email});
    } else {
      response.json({message:"Invalid Email or Password"});
    }
  }
  catch(err){
    response.json({error:"Something Went Wrong During Login ", err:err});
    console.log("Login Fail ", err);
  }
};

export const register = async (request, response) => {
  const userInfo = request.body;
  try{
    const doc = await registerUser(userInfo);
    response.json({message:"Register Successfully ", id:doc._id});
  }
  catch(err){
    response.json({error:"Something Went Wrong During Register ", err:err});
    console.log("Register Fail ", err);
  }
  
  // console.log("User Info ", userInfo);
  // response.send("<h1>Register</h1>");
};
