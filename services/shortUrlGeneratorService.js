    const {url} = require('../model/UrlModel');
console.log(url);
const  shortid   =require('shortid');

const generateShortUrl = async(longurl) =>{
                const shortUrl = shortid();
               const UrlRes  =  await  url.create({
                      shortUrl:shortUrl,
                      LongUrl:longurl,
                      VisitHistory:[]
               })
              return UrlRes;
}
// VisitHistory: [{timeStamp: {type:Number}}],
const getLongUrl = async (shortUrl) =>{
    const res =  await url.findOneAndUpdate({shortUrl: shortUrl}, { $push : {    VisitHistory : [{timeStamp: Date.now()}] } })
     console.log(res);
     return res.LongUrl;
}
const calculateNoOfClicks = async(shortid) =>{
                             const clicks = await  url.findOne({shortUrl:shortid});
                             
                             return clicks.VisitHistory.length;
}      

module.exports = {
    generateShortUrl,
    getLongUrl,
    calculateNoOfClicks
}