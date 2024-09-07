import app from "./app.js";
// import cloudinary from "cloudinary";

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDIANRY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDIANRY_CLIENT_SECRET,
// });
import { v2 as cloudinary } from "cloudinary";

import fs from "fs";


cloudinary.config({ cloud_name: process.env.CLOUDIANRY_CLIENT_NAME, 
  api_key: process.env.CLOUDINARY_CLIENT_API,
   api_secret: process.env.CLOUDIANRY_CLIENT_SECRET,});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});