import mongoose from "mongoose";
import env  from "dotenv/config";


export const ConnectMongo = async() =>{
    try {
        await mongoose.connect(process.env.CONNECTION)
        console.log('Mongoose connected!!');
    } catch (error) {

        console.log('Mongoose Error', error);
    }
}