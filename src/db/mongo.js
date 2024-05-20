import mongoose from 'mongoose'
const URL= `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mail-sharing.hmtn7fi.mongodb.mongodb+srv://<username>:<password>@mail-sharing.hmtn7fi.mongodb.net/?retryWrites=true&w=majority&appName=mail-sharingnet/?retryWrites=true&w=majority&appName=mail-sharing`
async function mongoDB(){
    mongoose.set('strictQuery',true)
    
        await mongoose.connect(URL).then(res=>console.log("mongodb is connected"))
        .catch(e)(
        console.log('service interrupted due to invalid error, ', e ))
}