import mongoose from "mongoose";

 const dbConnection = () => {
const MONGO="mongodb+srv://raghufks:Raghu2003@cluster0.nmtf6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//  const MONGO= "mongodb://localhost:27017/MERN_JOB_SEEKING_WEBAPP"
  mongoose
    .connect(MONGO, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};

export default dbConnection