const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const broadCastSchema = new Schema({
    id     : Schema.Types.ObjectId,
    message : { type : String }
})

module.exports = mongoose.model('BroadCast' , centeralAdminSchema)
