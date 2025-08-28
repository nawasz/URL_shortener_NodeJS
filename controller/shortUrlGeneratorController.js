const { generateShortUrl,getLongUrl,calculateNoOfClicks } = require('../services/shortUrlGeneratorService');

const   generatshortUrlController = async (req,res) =>{
    const {longurl} = req.body;
    res.send({
        sucess:"url shorted", 
        shortUrl : await generateShortUrl(longurl)});    
}

const redirectForShortUrl  = async (req,res) =>{
   const {shortUrl} =  req.params;
   
     res.redirect(await getLongUrl(shortUrl));
}

const  getTotalNoofVisitors =  async (req,res) =>{
    const count =  await calculateNoOfClicks(req.params.id)
    
    
    
      res.send({"visits": count});

}

module.exports ={
    generatshortUrlController,
    redirectForShortUrl,
    getTotalNoofVisitors
}