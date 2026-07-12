import { findUrlFromShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async(req,res)=>{
  const data = req.body;
  let shorturl
  if(req.user){
    shorturl = await createShortUrlWithUser(data.url,req.user._id,data.slug)
  }else{
    shorturl = await createShortUrlWithoutUser(data.url);
  }
  res.status(200).json({shortUrl : process.env.APP_URL + "/" + shorturl});
});

export const createShortUrlAuth = wrapAsync(async(req,res)=>{
  const {url} = req.body;
  const shorturl = await createShortUrlWithUser(url,req.user._id)
  res.status(200).json({shortUrl : process.env.APP_URL + "/" + shorturl});
});

export const redirectFromShortUrl = wrapAsync(async(req,res)=>{
  const {id} = req.params
  const url = await findUrlFromShortUrl(id);
  if(!url) throw new Error("Short url not found");
  res.redirect(url.full_url);
})
