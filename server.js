import dotenv from "dotenv";
import mongoose from "mongoose";

import { app } from "./app.js";
import { createFolderIfNotExist } from "./handlers/folder.js";
import { storeImage, uploadDir } from "./multerConfig/multerConfig.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const uriDb = process.env.DB_HOST;

const connection = mongoose.connect(uriDb);

connection
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, function () {
      createFolderIfNotExist(uploadDir);
      createFolderIfNotExist(storeImage);
      console.log("Server running. Use API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(`Server not running. Error message: ${error.message}`);
  });
