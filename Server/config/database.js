// import { verify } from "crypto";
// import mongoose  from "mongoose";
// const dbConnect =() =>{

//     try{
//         const connection = await mongoose.connect('mongodb+srv://parveenjhorar71_db_user: parveenjhorar71@cluster0.hiyxtfk.mongodb.net/')
//         console.log('db conneted');
        
//     } catch (error){
// console.log(error)
//     }}
// }
// export default dbConnect
////////////
import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://parveenjhorar71_db_user: parveenjhorar71@cluster0.hiyxtfk.mongodb.net'
      
    );
    console.log('db connected');
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;

//connect to db 
//resigster/login 
//verify /refresh token // timeout



