

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const messageSchema = new Schema({
  
    userId :  { type : Schema.Types.ObjectId , ref : 'Users'},
    Messagae : String ,
    Date: { type: String, default: Date }
 
})

module.exports = mongoose.model('Message' , messageSchema)
