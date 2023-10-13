import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conected to Mongo")
    }
    catch(error){
        console.log(error);
    }
}
export default connectMongoDB;
