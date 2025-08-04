const mongoose = require('mongoose');
import { log } from 'console';
import {Env} from './env.config'

const connectDatabase = async()=>{
    try{
        await mongoose.connect(Env.MONGO_URI,{
            serverSelectionTimeoutMS: 5000, //Use-case: If MongoDB is not reachable or very slow, it won’t hang your app forever — it fails fast
            socketTimeoutMS:45000, // Close sockets after 45 seconds of inactivity Use-case: Helps avoid hanging connections and improves stability in production
            connectTimeoutMS:10000,//1st connection par give up kardo after 10sec Prevents long delays during startup if DB is offline or misconfigured
        })
        console.log("DB connected Suucessfully");
        
    }catch(err){
        console.error("Error in connectiong the database " + err);
        process.exit(1);////exit process without failure
    }
} 

export default connectDatabase;