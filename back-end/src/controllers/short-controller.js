import { nanoid } from "nanoid";
import { addURL, getSmallToBig } from "../services/url-service.js";

export const getBigURL = async (request,response)=>{
  const {code} = request.params;
  console.log('Code is ', code);
  try {
    const doc = await getSmallToBig(code);
  if(doc && doc._id){
    response.redirect(doc.bigurl);
  } else {
    response.json({message:'Invalid Small URL'});
  }
  }
  catch(err){
    console.log('Error is ', err);
    response.json({message:'Invalid Small URL'}, err);
  }
}

export const urlShort = async (request, response) => {
  const bigUrl = request.body.bigurl;
  console.log("Big URL", bigUrl);
  try {
    const num = nanoid(6);
    const doc = await addURL({
      email: "sample@example.com",
      shortid: num,
      bigurl: bigUrl,
    });
    if (doc && doc._id) {
      response.json({ shorturl: process.env.BASE_URL+"small/" + num });
    } else {
      response.json({ error: "Something went Wrong" });
    }
  } catch (err) {
    console.log("Error in Short URL ", err);
    response.json({ error: "Something went Wrong" }, err);
  }
};
