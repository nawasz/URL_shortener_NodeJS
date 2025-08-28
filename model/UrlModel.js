const mongoose = require('mongoose');

const urlSchema =mongoose.Schema({
      shortUrl: {type:String,required:true,unique:true},
      LongUrl: {type:String,required:true,unique:true},
      VisitHistory: [{timeStamp: {type:Number}}],
},
{timeStamps:true}
)



const url = mongoose.model('url',urlSchema);


module.exports.url = url;