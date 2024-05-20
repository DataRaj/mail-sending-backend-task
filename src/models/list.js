const { timeStamp } = require('console')
const { subscribe } = require('diagnostics_channel')
const db = require('mongoose')
const { type } = require('os')
const userSchema =new db.Schema({
    name: String,
    email: {
        type:String,
        unique:true 
    },
    id:{
        type:db.Schema.ObjectId, ref: "List",
    },
    subscribe: {
        type: Boolean,
        default: true
    },
    timeStamp:{
        type:Date,
        default:Date.now
    },
    properties: db.Schema.Types.Mixed
})

const User = db.model('user',userSchema)
export default User