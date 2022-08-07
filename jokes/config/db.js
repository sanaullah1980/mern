import mongoose from 'mongoose';

const connectDB = async () => {
   try {
        const conn =  await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        })

        console.log(`Mongo DB connected: ${conn.connection.host}`);
   } catch (err) {
        console.log(err)
   }    
}

export default connectDB;