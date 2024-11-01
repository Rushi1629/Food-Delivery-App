import mongoose from "mongoose";

export const connectDB = async () => {
  // try {
  await mongoose.connect(
    "mongodb+srv://rushikeshbhor1629:oV4QgbbtZqFSNct5@cluster0.v2y5b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    // "mongodb://localhost:27017"
  );
  console.log("DB Connected");
  // } catch (error) {
  //   console.error("DB Connection Error:", error.message);
  //   process.exit(1); // Exit the process if DB connection fails
  // }
};

// oV4QgbbtZqFSNct5
// rushikeshbhor1629

// mongodb+srv://rushikeshbhor1629:oV4QgbbtZqFSNct5@cluster0.v2y5b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
